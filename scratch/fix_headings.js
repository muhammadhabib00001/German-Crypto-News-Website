const fs = require('fs');

let content = fs.readFileSync('src/data/articles.ts', 'utf8');

content = content.replace(
  '<h2 class="text-2xl font-bold mb-4">Weitere detaillierte Einblicke - Teil 1</h2>',
  '<h2 class="text-2xl font-bold mb-4">Marktdynamik und Liquidität bei NFT-Kollektionen</h2>'
);

content = content.replace(
  '<h2 class="text-2xl font-bold mb-4">Weitere detaillierte Einblicke - Teil 2</h2>',
  '<h2 class="text-2xl font-bold mb-4">Rolle der Web3-Community und Utility Tokens</h2>'
);

content = content.replace(
  '<h2 class="text-2xl font-bold mb-4">Weitere detaillierte Einblicke - Teil 3</h2>',
  '<h2 class="text-2xl font-bold mb-4">Institutionalisierung und Integration im Kunstmarkt</h2>'
);

fs.writeFileSync('src/data/articles.ts', content, 'utf8');
console.log('Fixed duplicate headings in articles.ts!');
