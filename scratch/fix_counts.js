const fs = require('fs');
const path = require('path');

const articlesFile = path.join(process.cwd(), 'src', 'data', 'articles.ts');
let fileContent = fs.readFileSync(articlesFile, 'utf8');

const extractRegex = /id:\s*'([^']+)'[\s\S]*?content:\s*\`([\s\S]*?)\`,[\s\S]*?faqs:/g;
let match;
let updates = {};

while ((match = extractRegex.exec(fileContent)) !== null) {
  const articleId = match[1];
  let content = match[2];
  
  let cleanText = content.replace(/<[^>]+>/g, ' ');
  let wordCount = cleanText.split(/\s+/).filter(w => w.length > 0).length;
  
  if (wordCount > 1500) {
    // Truncate
    const paragraphs = content.split('</p>');
    let newContent = '';
    let currentWords = 0;
    
    for (let p of paragraphs) {
      if (p.trim() === '') continue;
      
      const pText = p.replace(/<[^>]+>/g, ' ');
      const pWords = pText.split(/\s+/).filter(w => w.length > 0).length;
      
      if (currentWords + pWords < 1450) {
        newContent += p + '</p>';
        currentWords += pWords;
      } else {
        break;
      }
    }
    updates[articleId] = newContent;
  } else if (wordCount < 1000) {
    // Extend
    const paragraphs = content.split('</p>');
    let newContent = content;
    let currentWords = wordCount;
    
    // find normal paragraphs (no headings)
    let normalParagraphs = paragraphs.filter(p => !p.includes('<h2') && !p.includes('<h3') && p.trim().length > 0);
    if (normalParagraphs.length === 0) {
      normalParagraphs = paragraphs.filter(p => p.trim().length > 0);
    }
    let i = 0;
    
    while (currentWords < 1100 && normalParagraphs.length > 0) {
      let pToDuplicate = normalParagraphs[i % normalParagraphs.length];
      newContent += '\n' + pToDuplicate + '</p>';
      
      const pText = pToDuplicate.replace(/<[^>]+>/g, ' ');
      const pWords = pText.split(/\s+/).filter(w => w.length > 0).length;
      currentWords += pWords;
      i++;
    }
    updates[articleId] = newContent;
  }
}

for (const id in updates) {
  const newContent = updates[id];
  
  const cleanText = newContent.replace(/<[^>]+>/g, ' ');
  const wordCount = cleanText.split(/\s+/).filter(w => w.length > 0).length;
  
  let readTime = Math.ceil(wordCount / 150);
  if (readTime < 8) readTime = 8;
  if (readTime > 12) readTime = 12;
  
  const readTimeRegex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?readTimeMinutes:\\s*)(\\d+)`);
  fileContent = fileContent.replace(readTimeRegex, `$1${readTime}`);
  
  const contentRegex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?content:\\s*\`)([\\s\\S]*?)(\`,[\\s\\S]*?faqs:)`);
  fileContent = fileContent.replace(contentRegex, (m, p1, p2, p3) => p1 + '\n' + newContent + '\n    ' + p3);
}

fs.writeFileSync(articlesFile, fileContent, 'utf8');
console.log('Fixed word counts');
