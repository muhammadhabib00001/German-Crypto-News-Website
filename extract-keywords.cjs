const fs = require('fs');
const path = require('path');

const targetPath = 'C:\\Users\\NDCOM\\.gemini\\antigravity\\brain\\48ebfe62-0a4e-4570-ad0d-30249d089e24\\.system_generated\\steps\\4484\\content.md';
const csvRaw = fs.readFileSync(targetPath, 'utf8');

const lines = csvRaw.split(/\r?\n/).slice(9).map(l => l.trim()).filter(l => l.length > 0);
console.log('Total keywords extracted from CSV:', lines.length);

fs.writeFileSync('d:\\Crypto-site\\csv_keywords.json', JSON.stringify(lines, null, 2), 'utf8');
