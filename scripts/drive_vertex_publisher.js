import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { VertexAI } from '@google-cloud/vertexai';
import * as XLSX from 'xlsx';

function parseCredentials(raw) {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (trimmed.startsWith('{')) {
    return JSON.parse(trimmed);
  }
  const decoded = Buffer.from(trimmed, 'base64').toString('utf8');
  return JSON.parse(decoded);
}

/**
 * Full Drive (.xlsx keyword sheet) + Vertex AI Automation Pipeline Script
 */
async function main() {
  console.log('🤖 Running Google Drive (.xlsx) + Vertex AI Auto-Publisher...');

  const serviceAccountKeyBase64 = process.env.GCP_SERVICE_ACCOUNT_KEY;
  const projectId = process.env.GCP_PROJECT_ID;
  const location = process.env.GCP_LOCATION || 'us-central1';
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  const manualTopic = process.env.ARTICLE_TOPIC;

  if (!serviceAccountKeyBase64 && !manualTopic) {
    console.log('ℹ️ Credentials/Topic missing. Automation script standing by.');
    return;
  }

  let topicToProcess = manualTopic || '';

  // 1. Google Drive API Connection (support .xlsx keywords sheet)
  if (serviceAccountKeyBase64 && folderId && !manualTopic) {
    try {
      const credentials = parseCredentials(serviceAccountKeyBase64);

      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      });

      const drive = google.drive({ version: 'v3', auth });

      // List all files in the Drive folder
      const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: 'files(id, name, mimeType)',
      });

      const files = res.data.files || [];
      console.log(`📁 Found ${files.length} file(s) in Drive queue folder.`);

      for (const file of files) {
        if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
          console.log(`📊 Processing Excel Keywords File: "${file.name}"`);

          // Download file stream
          const fileStream = await drive.files.get(
            { fileId: file.id, alt: 'media' },
            { responseType: 'arraybuffer' }
          );

          const buffer = Buffer.from(fileStream.data);
          const workbook = XLSX.read(buffer, { type: 'buffer' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          // Extract first non-empty row/cell as primary keyword topic
          for (const row of rows) {
            if (Array.isArray(row) && row.length > 0 && row[0]) {
              const kw = String(row[0]).trim();
              if (kw && kw.toLowerCase() !== 'keyword' && kw.toLowerCase() !== 'keywords' && kw.toLowerCase() !== 'thema') {
                topicToProcess = kw;
                console.log(`🎯 Extracted Keyword Topic from Excel: "${topicToProcess}"`);
                break;
              }
            }
          }
        } else if (!topicToProcess) {
          topicToProcess = file.name.replace(/\.[^/.]+$/, '');
          console.log(`📄 Picked topic file name: "${topicToProcess}"`);
        }

        if (topicToProcess) break;
      }
    } catch (e) {
      console.warn('⚠️ Google Drive XLSX fetch warning:', e.message);
    }
  }

  if (!topicToProcess) {
    console.log('ℹ️ No new topics/keywords found in Drive queue. Exiting clean.');
    return;
  }

  console.log(`🚀 Processing Topic with Vertex AI Gemini Model: "${topicToProcess}"`);

  // 2. Vertex AI API Generation
  if (serviceAccountKeyBase64 && projectId) {
    try {
      const credentials = parseCredentials(serviceAccountKeyBase64);

      const vertexAI = new VertexAI({
        project: projectId,
        location,
        googleAuthOptions: { credentials },
      });

      const generativeModel = vertexAI.getGenerativeModel({
        model: 'gemini-3.7-flash',
      });

      const prompt = `Erstelle einen professionellen Finanzartikel auf Deutsch basierend auf folgendem Ziel-Keyword: "${topicToProcess}".

Striker SEO Regelkatalog:
- SEO Title: exakt 50-55 Zeichen.
- Meta Description: exakt 150-155 Zeichen.
- Wortanzahl des Artikels: exakt 1000 bis 1500 Wörter in Deutsch (de-DE).
- Kein '2026' im Fliesstext.
- Unique H2 & H3 Subheadings.
Antworte NUR im gültigen JSON Format für unser KryptoPulse DE Schema.`;

      const resp = await generativeModel.generateContent(prompt);
      const rawText = resp.response?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      console.log('✨ Vertex AI Response received successfully.');

      let generatedArticle;
      try {
        const cleanedJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
        generatedArticle = JSON.parse(cleanedJson);
      } catch (jsonErr) {
        console.error('⚠️ Could not parse JSON from Vertex AI, building fallback structure.');
      }

      if (generatedArticle) {
        const articlesFilePath = path.join(process.cwd(), 'src', 'data', 'articles.ts');
        let currentFileContent = fs.readFileSync(articlesFilePath, 'utf8');

        // Ensure proper article fields
        const slug = generatedArticle.slug || topicToProcess.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const id = generatedArticle.id || `art-${Date.now()}`;
        
        // Construct full Article object string
        const articleObj = {
          id,
          title: generatedArticle.title || `${topicToProcess}: Markt & Ratgeber`,
          seoTitle: generatedArticle.seoTitle || `${topicToProcess}: Guide & Analyse`,
          metaDescription: generatedArticle.metaDescription || `Entdecken Sie ${topicToProcess} im Detail. Vollständiger Leitfaden, aktuelle Markt-Daten und Tipps im Überblick.`,
          slug,
          category: generatedArticle.category || { id: 'cat-1', name: 'DeFi', slug: 'defi', description: 'Dezentrale Finanzen & Protokolle' },
          tags: generatedArticle.tags || ['Krypto', 'DeFi', topicToProcess],
          focusKeyword: topicToProcess,
          secondaryKeywords: generatedArticle.secondaryKeywords || ['Trading', 'Sicherheit'],
          excerpt: generatedArticle.excerpt || `Ausführlicher Leitfaden und Analyse zu ${topicToProcess}.`,
          content: generatedArticle.content || `<p>Detaillierte Analyse zu ${topicToProcess}.</p>`,
          publishedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          readTimeMinutes: generatedArticle.readTimeMinutes || 10,
          author: generatedArticle.author || {
            id: 'author-1',
            name: 'Florian Becker',
            slug: 'florian-becker',
            role: 'Senior Crypto Analyst',
            bio: 'Spezialist für Finanzmärkte, Blockchain-Technologie und Krypto-Asset-Bewertung.',
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
          },
          featuredImage: generatedArticle.featuredImage || {
            url: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=1200',
            alt: topicToProcess,
            caption: `Analyse & Trends zu ${topicToProcess}`
          },
          isFeatured: true,
          isTrending: true,
          isBreaking: false,
          canonicalUrl: `https://german-crypto-news-website.vercel.app/article/${slug}`,
          disclaimerRequired: true,
          statistics: generatedArticle.statistics || [],
          tableData: generatedArticle.tableData || null,
          proCons: generatedArticle.proCons || null,
          faqs: generatedArticle.faqs || [],
          sources: generatedArticle.sources || []
        };

        const newArticleTs = JSON.stringify(articleObj, null, 2);

        // Inject into export const ARTICLES: Article[] = [ ... ];
        if (currentFileContent.includes('export const ARTICLES: Article[] = [];')) {
          currentFileContent = currentFileContent.replace(
            'export const ARTICLES: Article[] = [];',
            `export const ARTICLES: Article[] = [\n${newArticleTs}\n];`
          );
        } else if (currentFileContent.includes('export const ARTICLES: Article[] = [')) {
          currentFileContent = currentFileContent.replace(
            'export const ARTICLES: Article[] = [',
            `export const ARTICLES: Article[] = [\n${newArticleTs},`
          );
        }

        fs.writeFileSync(articlesFilePath, currentFileContent, 'utf8');
        console.log(`🎉 Successfully wrote new article "${articleObj.title}" to src/data/articles.ts!`);
      }
    } catch (e) {
      console.warn('⚠️ Vertex AI call execution note:', e.message);
    }
  }

  console.log('✅ Excel Keyword Automation Pipeline complete.');
}

main().catch((err) => {
  console.error('❌ Error executing Excel keyword automation script:', err);
  process.exit(1);
});
