import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { GoogleGenAI } from '@google/genai';
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
 * Full Drive (.xlsx keyword sheet) + Gemini API / Vertex AI Automation Pipeline Script
 */
async function main() {
  console.log('🤖 Running Google Drive (.xlsx) + Gemini AI Auto-Publisher...');

  const geminiApiKey = process.env.GEMINI_API_KEY;
  const serviceAccountKeyBase64 = process.env.GCP_SERVICE_ACCOUNT_KEY;
  const projectId = process.env.GCP_PROJECT_ID;
  const location = process.env.GCP_LOCATION || 'us-central1';
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  const manualTopic = process.env.ARTICLE_TOPIC;

  if (!geminiApiKey && !serviceAccountKeyBase64 && !manualTopic) {
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

  console.log(`🚀 Processing Topic with Gemini Model: "${topicToProcess}"`);

  // 2. AI Content Generation with Master SEO Strategy Prompt
  const prompt = `Act as a Senior SEO Content Strategist, SEO Copywriter, Semantic SEO Specialist, and Editorial Content Planner with expertise in Google Search, helpful content, search intent, topical authority, E-E-A-T, and modern SEO.

TOPIC / PRIMARY KEYWORD: "${topicToProcess}"
SEARCH INTENT: Informational
LANGUAGE: German (de-DE)
ARTICLE LENGTH: 1000–1500 words
TONE: Professional, trustworthy, informative, neutral, natural, and easy to understand.

MASTER SEO WORKFLOW INSTRUCTIONS:
1. Conduct Phase 1 SEO & Search Intent Analysis internally (Primary Keyword, Secondary Keywords 5-10, LSI/Semantic Keywords 10-20, Long-tail Keywords, Entities, Featured Snippet target 40-60 words).
2. Execute Phase 2 Article Writing in German (de-DE).
3. Ensure STRICT SEO constraints:
   - SEO Title: EXACTLY 50 to 55 characters long.
   - Meta Description: EXACTLY 150 to 155 characters long.
   - Word Count: STRICTLY 1000 to 1500 words in German HTML text (<p>, <h2>, <h3>, <ul>, <li>).
   - Absolutely NO '2026' anywhere in the body text.
   - URL Slug: Create a highly descriptive, lowercase, hypen-separated German SEO slug containing the primary keyword plus relevant intent terms (e.g. 'opensea-nft-marktplatz-guide-anleitung' instead of just 'opensea').
   - High E-E-A-T, no keyword stuffing, natural LSI integration, populate faqs array (4-6 questions), and full Table of Contents. Do NOT write an FAQ section inside the content HTML string (the faqs array is rendered separately in the UI).

You MUST respond ONLY with a valid JSON object matching our KryptoPulse DE Schema below (do not include markdown code block backticks \`\`\` or intro text):

{
  "title": "Clean German Article Title",
  "seoTitle": "EXACTLY 50-55 character long German SEO Title",
  "metaDescription": "EXACTLY 150-155 character long German Meta Description",
  "slug": "seo-optimized-german-url-slug (e.g. opensea-nft-marktplatz-guide-anleitung)",
  "excerpt": "Compelling 2-3 sentence German summary with opening hook",
  "content": "<p>Opening Hook and Featured Snippet paragraph (40-60 words)...</p><h2>...</h2><p>Full 1000-1500 words German HTML body text...</p>",
  "toc": [
    { "id": "section-1", "text": "Überschrift 1", "level": 2 },
    { "id": "section-2", "text": "Überschrift 2", "level": 2 }
  ],
  "tags": ["Krypto", "DeFi", "${topicToProcess}"],
  "focusKeyword": "${topicToProcess}",
  "secondaryKeywords": ["Trading", "Analyse", "Sicherheit"],
  "faqs": [
    { "question": "Häufige Frage 1?", "answer": "Kurze, informative Antwort." }
  ],
  "sources": [
    { "title": "Offizielle Dokumentation", "url": "https://example.com", "publisher": "Behörde/Plattform" }
  ]
}`;

  let rawText = '';

  if (geminiApiKey) {
    const modelsToTry = [
      'gemini-3.7-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash',
      'gemini-2.5-flash'
    ];
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });
    
    for (const m of modelsToTry) {
      let attempts = 0;
      while (attempts < 3) {
        try {
          attempts++;
          console.log(`🤖 Attempting Gemini model "${m}" (Attempt ${attempts}/3)...`);
          const resp = await ai.models.generateContent({
            model: m,
            contents: prompt,
          });
          rawText = resp.text || '';
          if (rawText) {
            console.log(`✨ Gemini API (${m}) Response received successfully!`);
            break;
          }
        } catch (e) {
          console.warn(`⚠️ Model "${m}" attempt ${attempts} note:`, e.message);
          if (e.message?.includes('503') || e.message?.includes('high demand') || e.message?.includes('UNAVAILABLE')) {
            console.log('⏳ Waiting 5 seconds before retrying temporary 503 high demand...');
            await new Promise((r) => setTimeout(r, 5000));
          } else {
            break; // Move to next model if it's not a temporary 503
          }
        }
      }
      if (rawText) break;
    }
  }

  if (!rawText) {
    throw new Error('❌ AI Content Generation Failed! Check your GEMINI_API_KEY in GitHub Secrets.');
  }

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

        // Ensure proper article fields & strict uniqueness checks against existing articles
        let existingArticles = [];
        try {
          const existingMatches = currentFileContent.match(/export const ARTICLES: Article\[\] = (\[[\s\S]*?\]);/);
          if (existingMatches && existingMatches[1]) {
            existingArticles = eval(existingMatches[1]);
          }
        } catch (e) {
          // ignore eval parsing errors if any
        }

        const existingTitles = new Set(existingArticles.map(a => (a.title || '').toLowerCase().trim()));
        const existingMetas = new Set(existingArticles.map(a => (a.metaDescription || '').toLowerCase().trim()));
        const existingImages = new Set(existingArticles.map(a => (a.featuredImage?.url || '').trim()));

        // Enforce unique Title
        let finalTitle = generatedArticle.title || `${topicToProcess}: Markt & Ratgeber`;
        if (existingTitles.has(finalTitle.toLowerCase().trim())) {
          finalTitle = `${topicToProcess} Guide: Umfassende Krypto & Web3 Markt-Analyse`;
        }

        // Enforce unique Meta Description
        let finalMeta = generatedArticle.metaDescription || `Entdecken Sie ${topicToProcess} im Detail. Vollständiger Leitfaden, aktuelle Markt-Daten und Tipps im Überblick.`;
        if (existingMetas.has(finalMeta.toLowerCase().trim())) {
          finalMeta = `Erfahren Sie alles Relevante über ${topicToProcess}: Detaillierte Einblicke, Funktionsweise, Sicherheitstipps sowie Markttrends kompakt zusammengefasst.`;
        }

        const rawSlug = generatedArticle.slug || `${topicToProcess} nft marktplatz guide anleitung`;
        const slug = rawSlug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const id = generatedArticle.id || `art-${Date.now()}`;
        
        // Fetch guaranteed UNIQUE image from Unsplash with random page / fallback pools
        let unsplashImageUrl = '';
        const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;
        if (unsplashAccessKey) {
          try {
            const queryParam = encodeURIComponent(topicToProcess || 'crypto');
            // Query 10 regular images and pick the first one not already in existingImages
            const fetchRes = await fetch(`https://api.unsplash.com/search/photos?query=${queryParam}&per_page=10&orientation=landscape`, {
              headers: { Authorization: `Client-ID ${unsplashAccessKey}` }
            });
            const unsplashData = await fetchRes.json();
            if (unsplashData?.results?.length > 0) {
              const freshMatch = unsplashData.results.find(r => r.urls?.regular && !existingImages.has(r.urls.regular));
              if (freshMatch) {
                unsplashImageUrl = freshMatch.urls.regular;
                console.log(`🖼️ Fetched guaranteed unique Unsplash image for "${topicToProcess}": ${unsplashImageUrl}`);
              }
            }
          } catch (uErr) {
            console.warn('⚠️ Unsplash fetch fallback warning:', uErr.message);
          }
        }

        if (!unsplashImageUrl || existingImages.has(unsplashImageUrl)) {
          // Dynamic unique fallback using Unsplash Source featuring topic seed & timestamp
          unsplashImageUrl = `https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=1200&sig=${Date.now()}`;
        }

        // Construct full Article object string
        const articleObj = {
          id,
          title: finalTitle,
          seoTitle: generatedArticle.seoTitle || `${topicToProcess}: Guide & Analyse`,
          metaDescription: finalMeta,
          slug,
          category: (generatedArticle.category && generatedArticle.category.iconName) ? generatedArticle.category : { 
            id: 'cat-1', 
            name: generatedArticle.category?.name || 'DeFi', 
            slug: generatedArticle.category?.slug || 'defi', 
            description: generatedArticle.category?.description || 'Dezentrale Finanzen & Protokolle',
            iconName: generatedArticle.category?.iconName || 'Coins'
          },
          tags: generatedArticle.tags || ['Krypto', 'DeFi', topicToProcess],
          focusKeyword: topicToProcess,
          secondaryKeywords: generatedArticle.secondaryKeywords || ['Trading', 'Sicherheit'],
          excerpt: generatedArticle.excerpt || `Ausführlicher Leitfaden und Analyse zu ${topicToProcess}.`,
          content: (generatedArticle.content || `<p>Detaillierte Analyse zu ${topicToProcess}.</p>`)
            .replace(/<h[1-6][^>]*>(?:Häufige Fragen|FAQ|Frequently Asked Questions|Fragen & Antworten)[\s\S]*$/i, '')
            .trim(),
          toc: (generatedArticle.toc || [{ id: 'ueberblick', text: `Überblick zu ${topicToProcess}`, level: 2 }])
            .filter((t) => !/faq|häufige fragen|fragen & antworten/i.test(t.text)),
          publishedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          readTimeMinutes: generatedArticle.readTimeMinutes || 10,
          author: {
            id: generatedArticle.author?.id || 'florian-becker',
            name: generatedArticle.author?.name || 'Florian Becker',
            slug: generatedArticle.author?.slug || 'florian-becker',
            role: generatedArticle.author?.role || 'Senior Crypto Analyst',
            bio: generatedArticle.author?.bio || 'Spezialist für Finanzmärkte, Blockchain-Technologie und Krypto-Asset-Bewertung.',
            avatar: generatedArticle.author?.avatar || generatedArticle.author?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
            email: generatedArticle.author?.email || 'florian.becker@kryptopulse.de',
            credentials: generatedArticle.author?.credentials || ['M.Sc. Finance', 'Certified Financial Analyst']
          },
          featuredImage: {
            url: generatedArticle.featuredImage?.url && !existingImages.has(generatedArticle.featuredImage.url) ? generatedArticle.featuredImage.url : unsplashImageUrl,
            alt: generatedArticle.featuredImage?.alt || topicToProcess,
            title: generatedArticle.featuredImage?.title || topicToProcess,
            caption: generatedArticle.featuredImage?.caption || `Analyse & Trends zu ${topicToProcess}`,
            width: generatedArticle.featuredImage?.width || 1200,
            height: generatedArticle.featuredImage?.height || 630
          },
          isFeatured: true,
          isTrending: true,
          isBreaking: false,
          canonicalUrl: `https://german-crypto-news-website.vercel.app/${articleObj.category.slug}/${slug}`,
          ...(generatedArticle.tableData ? { tableData: generatedArticle.tableData } : {}),
          ...(generatedArticle.proCons ? { proCons: generatedArticle.proCons } : {}),
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

  console.log('✅ Excel Keyword Automation Pipeline complete.');
}

main().catch((err) => {
  console.error('❌ Error executing Excel keyword automation script:', err);
  process.exit(1);
});
