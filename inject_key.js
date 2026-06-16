import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the .env file or use environment variable
const apiKey = process.env.ZHIPU_API_KEY || '__ZHIPU_API_KEY__';

// Read the source file
const sourcePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(sourcePath, 'utf8');

// Replace the placeholder
content = content.replace(/__ZHIPU_API_KEY__/g, apiKey);

// Write back to the file
fs.writeFileSync(sourcePath, content);

console.log('✅ ZHIPU API key injected into App.jsx');
