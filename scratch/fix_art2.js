const fs = require('fs');

let content = fs.readFileSync('src/data/articles.ts', 'utf8');

const targetOld = "metaDescription: 'Das Pectra-Upgrade führt Konto-Abstraktion EIP-3074 und erhöhtes Staking-Limit EIP-7251 ein. Lesen Sie die technische Analyse für Validatoren hier im Detail.'";
const targetNew = "metaDescription: 'Das Pectra-Upgrade führt Konto-Abstraktion EIP-3074 und erhöhtes Staking-Limit EIP-7251 ein. Lesen Sie die technische Analyse für Validatoren im Detail.'";

content = content.replace(targetOld, targetNew);

fs.writeFileSync('src/data/articles.ts', content, 'utf8');
console.log('Fixed article 2 meta length!');
