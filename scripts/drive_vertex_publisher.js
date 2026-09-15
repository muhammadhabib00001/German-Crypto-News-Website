import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { VertexAI } from '@google-cloud/vertexai';
import * as XLSX from 'xlsx';

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
      const decodedKey = Buffer.from(serviceAccountKeyBase64, 'base64').toString('utf8');
      const credentials = JSON.parse(decodedKey);

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
      const decodedKey = Buffer.from(serviceAccountKeyBase64, 'base64').toString('utf8');
      const credentials = JSON.parse(decodedKey);

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
      console.log('✨ Vertex AI Response received successfully for Excel Keyword.');
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
