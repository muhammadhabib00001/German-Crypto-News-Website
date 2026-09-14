const fs = require('fs');
const path = require('path');
const articlesFile = path.join(process.cwd(), 'src', 'data', 'articles.ts');
let fileContent = fs.readFileSync(articlesFile, 'utf8');
console.log('\n--- VERIFICATION ---');
let allGood = true;
const extractRegex = /id:\s*'([^']+)'[\s\S]*?content:\s*\`([\s\S]*?)\`,[\s\S]*?faqs:/g;
let match;
while ((match = extractRegex.exec(fileContent)) !== null) {
  const articleId = match[1];
  const articleContent = match[2];
  const cleanText = articleContent.replace(/<[^>]+>/g, ' ');
  const wordCount = cleanText.split(/\s+/).filter(w => w.length > 0).length;
  if (wordCount >= 1000 && wordCount <= 1500) {
    console.log('[PASS] ' + articleId + ' : ' + wordCount + ' words');
  } else {
    console.log('[FAIL] ' + articleId + ' : ' + wordCount + ' words');
    allGood = false;
  }
}
if (allGood) { console.log('Success!'); } else { console.log('Failed!'); }
