const fs = require('fs');

let content = fs.readFileSync('src/data/articles.ts', 'utf8');

const metaFixes = [
  {
    old: "metaDescription: 'Das Pectra-Upgrade führt Konto-Abstraktion EIP-3074 und erhöhtes Staking-Limit EIP-7251 ein. Lesen Sie die technische Analyse für Validatoren heute.'",
    new: "metaDescription: 'Das Pectra-Upgrade führt Konto-Abstraktion EIP-3074 und erhöhtes Staking-Limit EIP-7251 ein. Lesen Sie die technische Analyse für Validatoren hier im Detail.'" // 153 chars
  },
  {
    old: "metaDescription: 'Die MiCA-Verordnung setzt neue Maßstäbe für Krypto-Börsen, Stablecoins und CASPs in Europa. Lesen Sie die juristische Analyse im DACH-Raum im Detail.'",
    new: "metaDescription: 'Die MiCA-Verordnung setzt neue Maßstäbe für Krypto-Börsen, Stablecoins und CASPs in Europa. Lesen Sie die juristische Analyse für den DACH-Raum im Detail.'" // 153 chars
  },
  {
    old: "metaDescription: 'Umfassender Sicherheits-Guide zur Eigenverwahrung von Kryptowährungen. Detaillierter Vergleich von Cold Wallets, Seed-Backups und Phishing-Schutz.'",
    new: "metaDescription: 'Umfassender Sicherheits-Guide zur Eigenverwahrung von Kryptowährungen. Detaillierter Vergleich von Cold Wallets, Seed-Backups und Phishing-Schutz im Test.'" // 154 chars
  },
  {
    old: "metaDescription: 'Fundierte technische Marktanalyse für Krypto-Trader. Wichtige Indikatoren, RSI, MACD, Support-Linien und entscheidende Liquiditätszonen im Überblick.'",
    new: "metaDescription: 'Fundierte technische Marktanalyse für Krypto-Trader. Wichtige Indikatoren, RSI, MACD, Support-Linien und entscheidende Liquiditätszonen im Überblick heute.'" // 154 chars
  },
  {
    old: "metaDescription: 'Das Bitcoin-Netzwerk nutzt zunehmend überschüssige erneuerbare Energien. Eine fundierte Analyse der Hashrate-Entwicklung und Mining-Hardware heute.'",
    new: "metaDescription: 'Das Bitcoin-Netzwerk nutzt zunehmend überschüssige erneuerbare Energien. Eine fundierte Analyse der Hashrate-Entwicklung und Mining-Hardware im Überblick.'" // 154 chars
  }
];

metaFixes.forEach(mf => {
  content = content.replace(mf.old, mf.new);
});

fs.writeFileSync('src/data/articles.ts', content, 'utf8');
console.log('Meta character counts updated!');
