const fs = require('fs');
const path = require('path');

// Read the .env file or use environment variable
const apiKey = process.env.GROQ_API_KEY || '__GROQ_API_KEY__';

// Read the source file
const sourcePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(sourcePath, 'utf8');

// Replace the placeholder
content = content.replace(/__GROQ_API_KEY__/g, apiKey);

// Write back to the file
fs.writeFileSync(sourcePath, content);

console.log('✅ API key injected into App.jsx');
