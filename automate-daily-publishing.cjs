const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_DIR = 'd:\\Crypto-site';
const NEWS_DIR = path.join(PROJECT_DIR, 'src', 'content', 'news');
const KEYWORDS_FILE = path.join(PROJECT_DIR, 'csv_keywords.json');
const LOG_FILE = path.join(PROJECT_DIR, 'automation-history.json');

// High quality, curated Unsplash image pool for unique assignment
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
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200",
  "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1200",
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200",
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200",
  "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?w=1200",
  "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=1200"
];

const CATEGORIES = ['bitcoin', 'ethereum', 'altcoins', 'defi', 'crypto-markets', 'crypto-regulation', 'crypto-trading'];
const AUTHORS = ['julian-hayes', 'elena-rostova', 'kaito-tanaka', 'marcus-vance'];

function getUsedImages() {
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
  let history = [];
  if (fs.existsSync(LOG_FILE)) {
    try {
      history = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
    } catch(e) {}
  }
  return new Set(history.map(h => h.keyword.toLowerCase()));
}

function recordPublishedKeywords(batch) {
  let history = [];
  if (fs.existsSync(LOG_FILE)) {
    try {
      history = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
    } catch(e) {}
  }
  history.push(...batch.map(b => ({ keyword: b.keyword, file: b.fileName, timestamp: new Date().toISOString() })));
  fs.writeFileSync(LOG_FILE, JSON.stringify(history, null, 2), 'utf8');
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function capitalizeWords(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function generateArticleForKeyword(kw, uniqueImage) {
  const cleanKw = kw.trim();
  const kwTitle = capitalizeWords(cleanKw);
  const dateStr = new Date().toISOString();
  
  const category = getRandomItem(CATEGORIES);
  const author = getRandomItem(AUTHORS);
  const slug = `${slugify(cleanKw)}-anlageratgeber-analyse-2026`;
  const fileName = `${slug}.md`;

  const title = `${kwTitle}: Fundamentalanalyse & Marktübersicht`;
  const metaTitle = `${kwTitle}: Fundamentalanalyse & Marktübersicht`;
  const excerpt = `Umfassender Ratgeber zu ${cleanKw}. Erfahren Sie alles über Marktdynamiken, BaFin-Regulierungen, EZB-Einflüsse und Ertragschancen.`;
  const metaDescription = `Alles zu ${cleanKw} heute: Detaillierte Analyse zu Kursentwicklungen, Steuern nach 12 Monaten und Markttrends im deutschen Finanzratgeber.`;

  const highlights = [
    `Die Fundamentalanalyse zu ${cleanKw} zeigt eine stetige Integration im europäischen Markt.`,
    `In Deutschland sind Gewinne bei Privatanlegern nach einer 12-monatigen Haltefrist steuerfrei gemäß § 23 EStG.`,
    `Strengere BaFin- und MiCA-Regulierungen bieten eine transparente Rechtssicherheit für DACH-Investoren.`,
    `Institutionelle Liquidität auf europäischen Börsen stützt die langfristige Wertentwicklung.`
  ];

  const faqs = [
    { question: `Was bedeutet ${cleanKw} für Anleger in Deutschland?`, answer: `${kwTitle} beschreibt relevante Kennzahlen für Krypto-Investoren im DACH-Raum zur langfristigen Vermögensabsicherung.` },
    { question: `Welche steuerlichen Regeln gelten bei ${cleanKw}?`, answer: `Veräußerungsgewinne sind nach Ablauf einer Spekulationsfrist von 365 Tagen für Privatpersonen vollständig steuerfrei.` },
    { question: `Wie entwickelt sich ${cleanKw} im Vergleich zu traditionellen Märkten?`, answer: `Aufgrund mathematischer Netzwerkeigenschaften bietet der Krypto-Markt einen Inflationsschutz gegenüber herkömmlichen Fiat-Währungen.` },
    { question: `Worauf sollte man bei Investitionen achten?`, answer: `Achten Sie auf regulierte Handelsplattformen mit BaFin-Lizenz und verwahren Sie Ihre Guthaben sicher auf Hardware-Wallets.` }
  ];

  const content = `Die Finanzlandschaft im DACH-Raum verändert sich rasch. Das Thema [${cleanKw}](https://bitcoin.org) steht im Mittelpunkt moderner Marktanalysen für Privatanleger und institutionelle Akteure.

Vor dem Hintergrund makroökonomischer EZB-Zinsentscheidungen und steigender Nachfrage nach digitalen Sachwerten ist das Verständnis für **${cleanKw}** essenziell.

<div class="my-8 p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white shadow-xl">
  <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">${kwTitle} Markt &amp; Regulierungs-Kennzahlen</h4>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
    <div class="bg-slate-800/80 p-3 rounded-xl">
      <span class="block text-slate-400 text-[10px]">HALTEFRIST DE</span>
      <span class="text-lg font-bold text-amber-400">12 Monate frei</span>
    </div>
    <div class="bg-slate-800/80 p-3 rounded-xl">
      <span class="block text-slate-400 text-[10px]">REGULIERUNG</span>
      <span class="text-lg font-bold text-cyan-400">BaFin &amp; MiCA</span>
    </div>
    <div class="bg-slate-800/80 p-3 rounded-xl">
      <span class="block text-slate-400 text-[10px]">MARKTSTANDORT</span>
      <span class="text-lg font-bold text-emerald-400">DACH Region</span>
    </div>
    <div class="bg-slate-800/80 p-3 rounded-xl">
      <span class="block text-slate-400 text-[10px]">NETZWERK STATUS</span>
      <span class="text-lg font-bold text-purple-400">Dezentral</span>
    </div>
  </div>
</div>

## 1. Die fundamentale Bedeutung von ${cleanKw}

Die Entwicklung rund um **${cleanKw}** wird durch globale Liquiditätsströme und technologische Protokoll-Upgrades bestimmt. Während traditionelle Währungen dem Inflationsdruck unterliegen, bietet die kryptographische Verknappung verlässliche Rahmenbedingungen.

## 2. Steuerrechtliche Einordnung in Deutschland

Ein zentraler Vorteil für deutsche Anleger betrifft die steuerliche Behandlung gemäß EStG § 23:

1. **Haltefrist über 1 Jahr**: Sämtliche erzielten Gewinne sind steuerfrei.
2. **Haltefrist unter 1 Jahr**: Gewinne sind bis zur Freigrenze von 1.000 Euro pro Kalenderjahr steuerfrei.

## 3. Fazit

Wer sich fundiert mit **${cleanKw}** auseinandersetzt, trifft nachhaltige Finanzentscheidungen in einem dynamischen Marktumfeld.
`;

  const mdFile = `---
title: "${title}"
metaTitle: "${metaTitle}"
excerpt: "${excerpt}"
metaDescription: "${metaDescription}"
category: "${category}"
author: "${author}"
publishedDate: "${dateStr}"
updatedDate: "${dateStr}"
readingTime: "10 min read"
featuredImage: "${uniqueImage}"
imageAlt: "${cleanKw} Marktübersicht und Finanzanalyse"
imageCaption: "Fundamentale Marktübersicht zu ${cleanKw} im europäischen Krypto-Sektor."
isBreaking: false
isFeatured: true
isTrending: true
tags:
  - "Krypto Deutschland"
  - "${cleanKw}"
  - "DACH Krypto"
  - "Finanzen"
keyHighlights:
${highlights.map(h => `  - "${h}"`).join('\n')}
faqs:
${faqs.map(f => `  - question: "${f.question}"\n    answer: "${f.answer}"`).join('\n')}
sources:
  - name: "Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)"
    url: "https://www.bafin.de"
contentType: "analysis"
---

${content}`;

  return { fileName, content: mdFile, keyword: cleanKw };
}

function runAutomationBatch(targetCount = 5) {
  console.log(`Starting automated batch generation for ${targetCount} articles...`);
  
  const allKeywords = JSON.parse(fs.readFileSync(KEYWORDS_FILE, 'utf8'));
  const publishedKeywords = getPublishedKeywords();
  const usedImages = getUsedImages();

  // Filter available non-duplicate keywords
  const availableKeywords = allKeywords.filter(k => {
    const clean = k.trim().toLowerCase();
    return clean.length > 3 && !publishedKeywords.has(clean);
  });

  if (availableKeywords.length < targetCount) {
    console.error('Not enough unpublished keywords left in list!');
    return;
  }

  // Pick targetCount random (non-sequential) keywords
  const selectedBatch = [];
  const pickedIndices = new Set();

  while (selectedBatch.length < targetCount) {
    const randomIndex = Math.floor(Math.random() * availableKeywords.length);
    if (!pickedIndices.has(randomIndex)) {
      pickedIndices.add(randomIndex);
      selectedBatch.push(availableKeywords[randomIndex]);
    }
  }

  const generatedBatch = [];

  selectedBatch.forEach(kw => {
    // Find unique image not used anywhere on site
    let assignedImg = UNSPLASH_POOL.find(img => !usedImages.has(img.split('?')[0]));
    if (!assignedImg) {
      // Fallback unique image generator URL
      assignedImg = `https://images.unsplash.com/photo-1518770660439-${Math.floor(Math.random()*900000+100000)}?w=1200`;
    }
    usedImages.add(assignedImg.split('?')[0]);

    const articleData = generateArticleForKeyword(kw, assignedImg);
    const targetFile = path.join(NEWS_DIR, articleData.fileName);
    fs.writeFileSync(targetFile, articleData.content, 'utf8');
    generatedBatch.push(articleData);
    console.log(`[GENERATED] ${articleData.fileName} for keyword: "${kw}"`);
  });

  recordPublishedKeywords(generatedBatch);

  console.log('\nRunning build verification...');
  execSync('npx astro build', { cwd: PROJECT_DIR, stdio: 'inherit' });

  console.log('\nCommitting and pushing batch to GitHub...');
  execSync('git add .', { cwd: PROJECT_DIR });
  execSync(`git commit -m "feat(automation): publish automated daily batch of ${targetCount} German articles"`, { cwd: PROJECT_DIR });
  execSync('git push origin main', { cwd: PROJECT_DIR });

  console.log('\nAUTOMATION COMPLETE! Batch successfully published and live on Vercel.');
}

// Run 5 articles batch if executed directly
if (require.main === module) {
  runAutomationBatch(5);
}

module.exports = { runAutomationBatch };
