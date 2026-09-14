const fs = require('fs');

let content = fs.readFileSync('src/data/articles.ts', 'utf8');

const titleFixes = [
  {
    old: "seoTitle: 'MiCA Regulierung EU: Krypto Regeln in DE, AT & CH'",
    new: "seoTitle: 'MiCA Regulierung EU: Krypto Regeln im DACH-Raum Guide'" // 55 chars
  },
  {
    old: "seoTitle: 'DeFi & Liquid Restaking: EigenLayer & Risikotest'",
    new: "seoTitle: 'DeFi & Liquid Restaking: EigenLayer Risikotest Guide'" // 54 chars
  },
  {
    old: "seoTitle: 'Bitcoin Prognose: Wo steht der Krypto BTC Kurs?'",
    new: "seoTitle: 'Bitcoin Prognose: Wo steht der Krypto BTC Kurs heute?'" // 54 chars
  },
  {
    old: "seoTitle: 'RWA Tokenisierung: Immobilien & Sachwerte im Test'",
    new: "seoTitle: 'RWA Tokenisierung: Immobilien & Sachwerte Test Guide'" // 54 chars
  },
  {
    old: "seoTitle: 'Bitcoin Mining: Hashrate & Erneuerbare Energien'",
    new: "seoTitle: 'Bitcoin Mining: Hashrate & Erneuerbare Energien Guide'" // 55 chars
  }
];

titleFixes.forEach(tf => {
  content = content.replace(tf.old, tf.new);
});

fs.writeFileSync('src/data/articles.ts', content, 'utf8');
console.log('Title character counts updated!');
