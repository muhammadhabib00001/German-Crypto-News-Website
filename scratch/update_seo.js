const fs = require('fs');

let content = fs.readFileSync('src/data/articles.ts', 'utf8');

const replacements = [
  {
    oldTitle: 'Bitcoin ETF Rekordzuflüsse 2026: Grund für den BTC Kursanstieg | KryptoPulse',
    newTitle: 'Bitcoin ETF Zuflüsse: Grund für den BTC Kursanstieg',
    oldMeta: 'Institutionelles Kapital strömt in Rekordhöhe in Bitcoin Spot ETFs. Erfahren Sie die Hintergründe, On-Chain-Daten und Marktauswirkungen im Detail.',
    newMeta: 'Institutionelles Kapital strömt in Rekordhöhe in Bitcoin Spot ETFs. Erfahren Sie die Hintergründe, On-Chain-Daten und Marktauswirkungen im Detail hier.'
  },
  {
    oldTitle: 'Ethereum Pectra Upgrade 2026: Alle Neuerungen, EIPs & Staking | KryptoPulse',
    newTitle: 'Ethereum Pectra Upgrade: Neuerungen, EIPs & Staking',
    oldMeta: 'Das Pectra-Upgrade führt Konto-Abstraktion EIP-3074 und erhöhtes Staking-Limit EIP-7251 ein. Lesen Sie die technische Analyse für Validatoren.',
    newMeta: 'Das Pectra-Upgrade führt Konto-Abstraktion EIP-3074 und erhöhtes Staking-Limit EIP-7251 ein. Lesen Sie die technische Analyse für Validatoren heute.'
  },
  {
    oldTitle: 'Solana Krypto News 2026: SOL Kurs, Pay Integration & DeFi Boom | KryptoPulse',
    newTitle: 'Solana Krypto News: SOL Kurs, Pay & DeFi Markt-Boom',
    oldMeta: 'Solana verzeichnet Rekord-Transaktionszahlen und steigende Akzeptanz im Zahlungsverkehr. Analyse der Netzwerk-Performance und Ökosystem-Trends.',
    newMeta: 'Solana verzeichnet Rekord-Transaktionszahlen und steigende Akzeptanz im Zahlungsverkehr. Eine detaillierte Analyse aller Ökosystem-Trends im Überblick.'
  },
  {
    oldTitle: 'MiCA Regulierung EU 2026: Krypto Regeln für Anleger in DE, AT & CH | KryptoPulse',
    newTitle: 'MiCA Regulierung EU: Krypto Regeln in DE, AT & CH',
    oldMeta: 'Die MiCA-Verordnung setzt neue Maßstäbe für Krypto-Börsen, Stablecoins und CASPs in Europa. Juristische Analyse der Auswirkungen im DACH-Raum.',
    newMeta: 'Die MiCA-Verordnung setzt neue Maßstäbe für Krypto-Börsen, Stablecoins und CASPs in Europa. Lesen Sie die juristische Analyse im DACH-Raum im Detail.'
  },
  {
    oldTitle: 'DeFi & Liquid Restaking 2026: EigenLayer, Yields & Risikobewertung | KryptoPulse',
    newTitle: 'DeFi & Liquid Restaking: EigenLayer & Risikotest',
    oldMeta: 'Liquid Restaking Protokolle verzeichnen Rekord-Kapitalzuflüsse. Eine fundamentale Analyse von Ertragschancen und Slashing-Risiken.',
    newMeta: 'Liquid Restaking Protokolle verzeichnen Rekord-Kapitalzuflüsse. Eine fundamentale Analyse von Ertragschancen, Yields und Slashing-Risiken für Anleger.'
  },
  {
    oldTitle: 'Bitcoin Prognose 2026 / 2027: Wo steht der BTC Kurs in den nächsten Jahren? | KryptoPulse',
    newTitle: 'Bitcoin Prognose: Wo steht der Krypto BTC Kurs?',
    oldMeta: 'Analytische Prognose der Bitcoin-Kursentwicklung auf Basis historsicher Halving-Zyklen, Geldmengenwachstum M2 und institutionalisiertem Zufluss.',
    newMeta: 'Analytische Prognose der Bitcoin-Kursentwicklung auf Basis historischer Halving-Zyklen, Geldmengenwachstum M2 und institutionalisiertem Mittelzufluss.'
  },
  {
    oldTitle: 'Hardware Wallet Test & Sicherheit 2026: Ledger, Trezor, BitBox02 | KryptoPulse',
    newTitle: 'Hardware Wallet Test & Sicherheit: Ledger & Trezor',
    oldMeta: 'Umfassender Sicherheits-Guide zur Eigenverwahrung von Kryptowährungen. Vergleich von Cold Wallets, Seed-Phrase-Backup und Phishing-Schutz.',
    newMeta: 'Umfassender Sicherheits-Guide zur Eigenverwahrung von Kryptowährungen. Detaillierter Vergleich von Cold Wallets, Seed-Backups und Phishing-Schutz.'
  },
  {
    oldTitle: 'Web3 Passkeys 2026: Krypto Login ohne Seed Phrase | KryptoPulse',
    newTitle: 'Web3 Passkeys: Krypto Login ohne Seed Phrase Guide',
    oldMeta: 'Passkeys und Account Abstraction ermöglichen nahtlosen Web3-Zugang über FaceID und TouchID. Eine Analyse der neuen Technologien.',
    newMeta: 'Passkeys und Account Abstraction ermöglichen nahtlosen Web3-Zugang über FaceID und TouchID. Eine fundamentale Analyse der neuen Technologien für User.'
  },
  {
    oldTitle: 'Krypto Trading Analyse 2026: BTC & ETH Charttechnik | KryptoPulse',
    newTitle: 'Krypto Trading Analyse: BTC & ETH Charttechnik Guide',
    oldMeta: 'Technische Marktanalyse für Krypto-Trader. Indikatoren, RSI, MACD und entscheidende Liquiditätszonen im Überblick.',
    newMeta: 'Fundierte technische Marktanalyse für Krypto-Trader. Wichtige Indikatoren, RSI, MACD, Support-Linien und entscheidende Liquiditätszonen im Überblick.'
  },
  {
    oldTitle: 'RWA Tokenisierung 2026: Immobilien & Anleihen auf der Blockchain | KryptoPulse',
    newTitle: 'RWA Tokenisierung: Immobilien & Sachwerte im Test',
    oldMeta: 'Tokenisierung von Sachwerten (Real World Assets). Wie Finanzinstitute Sachwerte in digitale Token auf der Blockchain umwandeln.',
    newMeta: 'Tokenisierung von Sachwerten (Real World Assets). Wie Finanzinstitute Sachwerte in digitale Token auf der Blockchain effizient umwandeln im Überblick.'
  },
  {
    oldTitle: 'Bitcoin Mining 2026: Hashrate Rekorde & Erneuerbare Energien | KryptoPulse',
    newTitle: 'Bitcoin Mining: Hashrate & Erneuerbare Energien',
    oldMeta: 'Das Bitcoin-Netzwerk nutzt zunehmend überschüssige erneuerbare Energien. Analyse der Hashrate-Entwicklung und Mining-Hardware.',
    newMeta: 'Das Bitcoin-Netzwerk nutzt zunehmend überschüssige erneuerbare Energien. Eine fundierte Analyse der Hashrate-Entwicklung und Mining-Hardware heute.'
  }
];

replacements.forEach(r => {
  content = content.replace(r.oldTitle, r.newTitle);
  content = content.replace(r.oldMeta, r.newMeta);
});

fs.writeFileSync('src/data/articles.ts', content, 'utf8');
console.log('Successfully updated all titles and metas!');
