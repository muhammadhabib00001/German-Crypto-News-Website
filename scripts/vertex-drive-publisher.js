const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const { VertexAI } = require('@google-cloud/vertexai');
const { execSync } = require('child_process');

const PROJECT_DIR = process.env.GITHUB_WORKSPACE || process.cwd();
const NEWS_DIR = path.join(PROJECT_DIR, 'src', 'content', 'news');
const LOG_FILE = path.join(PROJECT_DIR, 'automation-history.json');

// Initialize Google Services
const gcpProjectId = process.env.GCP_PROJECT_ID;
const gcpLocation = process.env.GCP_LOCATION || 'us-central1';
const googleDriveFileId = process.env.GOOGLE_DRIVE_FILE_ID; // The spreadsheet ID containing keywords

// Base64 decoded GCP Service Account credentials from GitHub Secrets
const credentialsBase64 = process.env.GCP_SA_KEY;
let credentials = {};
if (credentialsBase64) {
  credentials = JSON.parse(Buffer.from(credentialsBase64, 'base64').toString('utf8'));
}

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/spreadsheets.readonly']
});

const vertexAI = new VertexAI({ project: gcpProjectId, location: gcpLocation, googleAuth: auth });
const generativeModel = vertexAI.getGenerativeModel({ model: process.env.VERTEX_MODEL || 'gemini-2.5-flash' });

// Image pool for unique assignment
const UNSPLASH_POOL = [
  "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200",
  "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200",
  "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=1200",
  "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
  "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1200",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200",
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200"
];

function getUsedImages() {
  if (!fs.existsSync(NEWS_DIR)) return new Set();
  const files = fs.readdirSync(NEWS_DIR);
  const used = new Set();
  files.forEach(f => {
    if (f.endsWith('.md')) {
      const text = fs.readFileSync(path.join(NEWS_DIR, f), 'utf8');
      const matches = text.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g) || [];
      matches.forEach(m => used.add(m.split('?')[0]));
    }
  });
  return used;
}

function getPublishedKeywords() {
  if (!fs.existsSync(LOG_FILE)) return new Set();
  try {
    const history = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
    return new Set(history.map(h => h.keyword.toLowerCase()));
  } catch (e) {
    return new Set();
  }
}

async function fetchKeywordsFromGoogleSheets() {
  console.log(`Fetching keyword list from Google Sheets (ID: ${googleDriveFileId})...`);
  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: googleDriveFileId,
    range: 'A:A'
  });
  const rows = response.data.values || [];
  return rows.flat().map(k => k.trim()).filter(k => k.length > 2 && k.toLowerCase() !== 'keyword');
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

async function generateGermanArticleWithVertex(keyword, featuredImage) {
  console.log(`Calling Vertex AI Gemini API for keyword: "${keyword}"...`);
  
  const systemPrompt = `You are a senior financial journalist writing for newskrypt, a premier German financial publication.
Write a native German news article between 1,000 and 1,200 words targeting the primary keyword: "${keyword}".

CRITICAL RULES:
1. Native German Target Language (de-DE).
2. Exactly 1 external markdown link anchored directly on "${keyword}" in the first paragraph (e.g. [${keyword}](https://bitcoin.org)). Do NOT put external links anywhere else.
3. No Horizontal Dash Rules ("---") anywhere in the article body.
4. No raw backtick code blocks (\`\`\`html) around HTML components or text.
5. Include a custom Key Highlights HTML box with double quotes: <div class="my-8 p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white shadow-xl">...</div>.
6. Return JSON only with fields: title, metaTitle (max 55 chars), excerpt, metaDescription (max 155 chars), category (one of: bitcoin, ethereum, altcoins, defi, crypto-markets, crypto-regulation, crypto-trading), author (one of: julian-hayes, elena-rostova, kaito-tanaka, marcus-vance), keyHighlights (array of 4 German bullet strings), faqs (array of 4 objects {question, answer}), content (the Markdown body text in German).`;

  const req = {
    contents: [{ role: 'user', parts: [{ text: systemPrompt }] }],
    generationConfig: { responseMimeType: 'application/json' }
  };

  const response = await generativeModel.generateContent(req);
  const jsonText = response.response.candidates[0].content.parts[0].text;
  const parsed = JSON.parse(jsonText);

  const slug = `${slugify(keyword)}-anlageratgeber-analyse-2026`;
  const fileName = `${slug}.md`;
  const dateStr = new Date().toISOString();

  const mdFile = `---
title: "${parsed.title}"
metaTitle: "${parsed.metaTitle}"
excerpt: "${parsed.excerpt}"
metaDescription: "${parsed.metaDescription}"
category: "${parsed.category}"
author: "${parsed.author}"
publishedDate: "${dateStr}"
updatedDate: "${dateStr}"
readingTime: "10 min read"
featuredImage: "${featuredImage}"
imageAlt: "${keyword} Marktübersicht und Finanzanalyse"
imageCaption: "Fundamentale Marktübersicht zu ${keyword} im europäischen Krypto-Sektor."
isBreaking: false
isFeatured: true
isTrending: true
tags:
  - "Krypto Deutschland"
  - "${keyword}"
  - "DACH Krypto"
  - "Finanzen"
keyHighlights:
${parsed.keyHighlights.map(h => `  - "${h}"`).join('\n')}
faqs:
${parsed.faqs.map(f => `  - question: "${f.question}"\n    answer: "${f.answer}"`).join('\n')}
sources:
  - name: "Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)"
    url: "https://www.bafin.de"
contentType: "analysis"
---

${parsed.content}`;

  return { fileName, content: mdFile, keyword };
}

async function main() {
  const targetCount = parseInt(process.env.DAILY_BATCH_COUNT || '5', 10);
  console.log(`Starting Vertex AI & Google Drive Automated Publishing Workflow for ${targetCount} articles...`);

  const keywords = await fetchKeywordsFromGoogleSheets();
  const publishedKeywords = getPublishedKeywords();
  const usedImages = getUsedImages();

  const availableKeywords = keywords.filter(k => !publishedKeywords.has(k.toLowerCase()));

  if (availableKeywords.length < targetCount) {
    console.error('Insufficient unpublished keywords remaining in Google Sheet.');
    process.exit(1);
  }

  // Non-sequential random selection
  const selectedKeywords = [];
  const pickedIndices = new Set();
  while (selectedKeywords.length < targetCount) {
    const idx = Math.floor(Math.random() * availableKeywords.length);
    if (!pickedIndices.has(idx)) {
      pickedIndices.add(idx);
      selectedKeywords.push(availableKeywords[idx]);
    }
  }

  const generatedBatch = [];
  for (const kw of selectedKeywords) {
    let img = UNSPLASH_POOL.find(i => !usedImages.has(i.split('?')[0]));
    if (!img) {
      img = `https://images.unsplash.com/photo-1518770660439-${Math.floor(Math.random() * 900000 + 100000)}?w=1200`;
    }
    usedImages.add(img.split('?')[0]);

    const articleData = await generateGermanArticleWithVertex(kw, img);
    const targetFile = path.join(NEWS_DIR, articleData.fileName);
    fs.writeFileSync(targetFile, articleData.content, 'utf8');
    generatedBatch.push(articleData);
  }

  // Update history log
  let history = [];
  if (fs.existsSync(LOG_FILE)) {
    try { history = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8')); } catch(e) {}
  }
  history.push(...generatedBatch.map(b => ({ keyword: b.keyword, file: b.fileName, timestamp: new Date().toISOString() })));
  fs.writeFileSync(LOG_FILE, JSON.stringify(history, null, 2), 'utf8');

  console.log('Batch generation complete!');
}

main().catch(err => {
  console.error('Pipeline execution error:', err);
  process.exit(1);
});
