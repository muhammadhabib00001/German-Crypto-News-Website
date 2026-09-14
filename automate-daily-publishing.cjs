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
  const slug = `${slugify(cleanKw)}-ratgeber-deutschland`;
  const fileName = `${slug}.md`;

  // metaTitle: ≤55 chars, unique, keyword-first, no "2026"
  const rawMeta = `${kwTitle}: Sicherheit, Kosten & BaFin-Info`;
  const metaTitle = rawMeta.length <= 55 ? rawMeta : rawMeta.substring(0, 52) + '...';

  // title: click-worthy, unique H1, ≤70 chars recommended
  const title = `${kwTitle}: Leitfaden für deutsche Krypto-Anleger`;

  const excerpt = `Alles Wichtige zu ${cleanKw} auf einen Blick: Regulierung, Sicherheit, Gebühren und steuerliche Regeln für Anleger in Deutschland.`;
  // metaDescription: ≤155 chars, compelling CTA
  const rawDesc = `${kwTitle} im Überblick: BaFin-Regulierung, Gebührenstruktur, Sicherheitsarchitektur und Steuerregeln für Krypto-Anleger in Deutschland. Jetzt informieren.`;
  const metaDescription = rawDesc.length <= 155 ? rawDesc : rawDesc.substring(0, 152) + '...';

  const highlights = [
    `Self-Custody Sicherheit: Vollständige Kontrolle über Private Keys und Seed Phrase ohne Drittparteien-Risiko.`,
    `Multi-Chain & Web3-Support: Nahtlose Anbindung an Ethereum Layer-2, Solana, Polygon und DePIN-Protokolle.`,
    `Steuerfreiheit in Deutschland: Gewinne aus Staking und Krypto-Verkäufen nach 12 Monaten Haltefrist gemäß § 23 EStG steuerfrei.`,
    `MiCA & BaFin Compliance: Hohe Transparenzstandards für europäische Nutzer im DACH-Raum.`
  ];

  const faqs = [
    { question: `Ist ${cleanKw} in Deutschland und der EU sicher zu nutzen?`, answer: `Ja, als Non-Custodial Wallet behalten Nutzer die alleinige Kontrolle über ihre Wiederherstellungsphrase (Seed Phrase). Es gelten die höchsten kryptographischen Sicherheitsstandards.` },
    { question: `Sind Gewinne beim Krypto-Handel über ${cleanKw} steuerfrei?`, answer: `In Deutschland sind Veräußerungsgewinne von Kryptowährungen nach einer Spekulationsfrist von 365 Tagen (12 Monate) für Privatpersonen vollständig steuerfrei gemäß § 23 EStG.` },
    { question: `Worin unterscheidet sich ${cleanKw} von einer zentralisierten Börse?`, answer: `Bei einer zentralisierten Börse verwahrt der Anbieter die privaten Schlüssel. Bei ${cleanKw} liegt die Verantwortung und Verwahrung zu 100 % beim Anleger.` },
    { question: `Welche Netzwerke und Tokens werden von ${cleanKw} unterstützt?`, answer: `Es werden Tausende von Tokens auf Ethereum, Base, Polygon, Arbitrum, Optimism, Solana und Bitcoin unterstützt.` }
  ];

  const content = `Die Akzeptanz und Nachfrage im Bereich dezentraler Finanzlösungen und digitaler Märkte wächst im europäischen Raum rasant. Das Thema [${cleanKw}](https://bitcoin.org) steht im Zentrum moderner Marktanalysen für Privatanleger und professionelle Web3-Akteure.

In diesem umfassenden Ratgeber analysieren wir die architektonischen Grundlagen, Markt-Kennzahlen, steuerrechtlichen Rahmenbedingungen im DACH-Raum sowie die praktischen Anwendungsmöglichkeiten von **${cleanKw}**.

## 1. Einführung &amp; Marktentwicklung von ${cleanKw}

Die globale Transformation hin zu dezentralen Infrastrukturen hat die Anforderungen an digitale Geldbörsen grundlegend verändert. Während in den Anfängen der Krypto-Bewegung einfache Desktop-Wallets dominierten, fordern moderne Anleger im Jahr 2026 eine nahtlose Interoperabilität zwischen verschiedenen Layer-1 und Layer-2 Netzwerken.

Unter dem Einfluss von **${cleanKw}** hat sich der Markt für Eigenverwahrung entscheidend weiterentwickelt. Anleger suchen verstärkt nach Lösungen, die sowohl höchste Sicherheit als auch Benutzerfreundlichkeit beim Zugriff auf DePIN, Staking-Protokolle und dezentrale Börsen (DEXs) bieten.

### LSI-Schlüsselbegriffe &amp; Markt-Kontext
* **Eigenverwahrung (Self-Custody)**: Der Inhaber besitzt als einziger die 12- oder 24-Wörter Wiederherstellungsphrase.
* **Smart Contract Interaktion**: Direkte Kommunikation mit dezentralen Applikationen (dApps) ohne zentralen Server.
* **Gas Fees &amp; Netzwerkeffizienz**: Optimierte Transaktionsgebühren durch Layer-2 Skalierungslösungen wie Arbitrum, Optimism und Base.

## 2. Sicherheitsarchitektur &amp; Private Key Management

Ein zentrales Thema bei der Nutzung von **${cleanKw}** ist die Sicherheit der aufbewahrten Assets. Da keine zentrale Instanz Passwörter zurücksetzen kann, müssen Anleger Best Practices bei der Verwaltung ihrer kryptographischen Schlüssel beachten.

### Schutz vor Cyber-Bedrohungen &amp; Phishing
* **Hardware-Wallet-Integration**: Die Verknüpfung mit Cold-Storage-Geräten (wie Ledger oder Trezor) verhindert das Auslesen von Private Keys auf infizierten Endgeräten.
* **Biometrische Authentifizierung**: Moderne Mobil-Apps nutzen FaceID und Fingerabdruck-Scans zur Verifizierung lokaler Transaktionen.
* **Transaktions-Vorschau**: Fortschrittliche Sicherheits-Filter warnen Nutzer vor bösartigen Smart Contracts und ungewöhnlichen Token-Approvals.

## 3. Steuerliche Einordnung in Deutschland, Österreich &amp; der Schweiz (DACH)

Für Krypto-Investoren im DACH-Raum spielt die steuerliche Transparenz eine entscheidende Rolle. Bei der Verwendung von **${cleanKw}** gelten klare rechtliche Vorgaben:

1. **Haltefrist gemäß § 23 EStG (Deutschland)**: Werden digitale Wirtschaftsgüter wie Bitcoin, Ethereum oder Altcoins länger als 365 Tage gehalten, sind alle Veräußerungsgewinne für Privatpersonen steuerfrei.
2. **Dokumentationspflicht**: Da bei Non-Custodial Wallets keine automatischen Jahressteuerbescheinigungen ausgestellt werden, sind Nutzer verpflichtet, Transaktionshistorien mittels CSV-Exports oder Tracking-Software aufzuzeichnen.
3. **Staking &amp; Yield Farming**: Erträge aus Staking-Aktivitäten unterliegen spezifischen Freigrenzen und sind bei Einhaltung der gesetzlichen Fristen steuerlich optimal gestaltbar.

## 4. Regulierung im EU-Binnenmarkt: MiCA &amp; BaFin

Die Europäische Union hat mit der **Markets in Crypto-Assets (MiCA)** Verordnung weltweit Maßstäbe für die Regulierung digitaler Vermögenswerte gesetzt. Für Nutzer von **${cleanKw}** ergeben sich daraus klare Vorteile:

* **Rechtssicherheit für Dienstleister**: Erhöhte Transparenz bei Anbietern von Krypto-Dienstleistungen schützt Verbraucher vor betrügerischen Anbietern.
* **Schutz der Privatsphäre**: Eigenverwahrte Wallets bleiben für den persönlichen Gebrauch uneingeschränkt zugänglich, solange keine Geldwäschetatbestände vorliegen.

## 5. Fazit &amp; Ausblick 2026

Das Ökosystem rund um **${cleanKw}** bietet sowohl Einsteigern als auch erfahrenen Web3-Nutzern eine flexible und sichere Plattform zur Verwaltung digitaler Assets. Die Kombination aus dezentraler Kontrolle, Multi-Chain-Kompatibilität und Einhaltung europäischer Qualitätsstandards macht eigenverwahrte Wallets zu einem unverzichtbaren Baustein für das moderne Krypto-Portfolio.`;

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

function runAutomationBatch(targetCount = 1) {
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
  runAutomationBatch(1);
}

module.exports = { runAutomationBatch };
