const fs = require('fs');
const path = require('path');

const articlesFile = path.join(__dirname, 'src', 'data', 'articles.ts');
let fileContent = fs.readFileSync(articlesFile, 'utf8');

const jsonFiles = [
  'scratch/part1.json',
  'scratch/part2.json',
  'scratch/part3.json',
  'scratch/part4.json'
];

let allArticlesData = {};

for (const file of jsonFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    allArticlesData = { ...allArticlesData, ...data };
  } else {
    console.warn(File not found:  + file);
  }
}

for (const id in allArticlesData) {
  const newContent = allArticlesData[id];
  
  const cleanText = newContent.replace(/<[^>]+>/g, ' ');
  const wordCount = cleanText.split(/\s+/).filter(w => w.length > 0).length;
  
  let readTime = Math.ceil(wordCount / 150);
  if (readTime < 8) readTime = 8;
  if (readTime > 12) readTime = 12;
  
  const readTimeRegex = new RegExp((id:\\s*'\\'[\\s\\S]*?readTimeMinutes:\\s*)(\\d+));
  fileContent = fileContent.replace(readTimeRegex, "$1" + readTime);
  
  const contentRegex = new RegExp((id:\\s*'\\'[\\s\\S]*?content:\\s*\)([\\s\\S]*?)(\,[\\s\\S]*?faqs:));
  fileContent = fileContent.replace(contentRegex, (m, p1, p2, p3) => p1 + '\n' + newContent + '\n    ' + p3);
}

fs.writeFileSync(articlesFile, fileContent, 'utf8');
console.log('Updated articles.ts');

console.log('\n--- VERIFICATION ---');
let allGood = true;

const extractRegex = /id:\s*'([^']+)'[\s\S]*?content:\s*\([\s\S]*?)\,[\s\S]*?faqs:/g;
let match;
while ((match = extractRegex.exec(fileContent)) !== null) {
  const articleId = match[1];
  const articleContent = match[2];
  
  const cleanText = articleContent.replace(/<[^>]+>/g, ' ');
  const wordCount = cleanText.split(/\s+/).filter(w => w.length > 0).length;
  
  if (wordCount >= 1000 && wordCount <= 1500) {
    console.log([PASS]  + articleId +  :  + wordCount +  words);
  } else {
    console.log([FAIL]  + articleId +  :  + wordCount +  words);
    allGood = false;
  }
}

if (allGood) {
  console.log('Success! All articles are between 1000 and 1500 words.');
} else {
  console.log('Failed! Some articles do not meet the word count requirement.');
}
