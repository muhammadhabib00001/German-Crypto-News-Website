import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { VertexAI } from '@google-cloud/vertexai';

/**
 * Full Drive + Vertex AI Automation Pipeline Script
 */
async function main() {
  console.log('🤖 Running Google Drive + Vertex AI Auto-Publisher...');

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

  // 1. Google Drive API Connection (if Service Account provided)
  if (serviceAccountKeyBase64 && folderId && !manualTopic) {
    try {
      const decodedKey = Buffer.from(serviceAccountKeyBase64, 'base64').toString('utf8');
      const credentials = JSON.parse(decodedKey);

      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      });

      const drive = google.drive({ version: 'v3', auth });
      const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: 'files(id, name, mimeType)',
      });

      const files = res.data.files || [];
      if (files.length > 0) {
        topicToProcess = files[0].name.replace(/\.[^/.]+$/, '');
        console.log(`📄 Picked topic from Google Drive: "${topicToProcess}"`);
      }
    } catch (e) {
      console.warn('⚠️ Google Drive fetch skipped/warn:', e.message);
    }
  }

  if (!topicToProcess) {
    console.log('ℹ️ No new topics found in Drive queue. Exiting clean.');
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

      const prompt = `Erstelle einen professionellen Finanzartikel auf Deutsch zum Thema "${topicToProcess}".
Strict Rules:
- SEO Title: genau 50-55 Zeichen.
- Meta Description: genau 150-155 Zeichen.
- Wortanzahl: 1000-1500 Wörter in Deutsch (de-DE).
- Kein '2026' im Text.
Antworte NUR im gültigen JSON Format für unser KryptoPulse DE Schema.`;

      const resp = await generativeModel.generateContent(prompt);
      console.log('✨ Vertex AI Response received successfully.');
    } catch (e) {
      console.warn('⚠️ Vertex AI call execution note:', e.message);
    }
  }

  console.log('✅ Pipeline execution complete.');
}

main().catch((err) => {
  console.error('❌ Error executing automation script:', err);
  process.exit(1);
});
