import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destDir = path.resolve(__dirname, 'public');
const destFile = path.resolve(destDir, 'Priyanka_Resume.pdf');

// Check possible source locations (with underscore, space, double-e, in root or public)
const possibleSources = [
  path.resolve(__dirname, 'PriyankaResumee.pdf'),
  path.resolve(__dirname, 'Priyanka_Resume.pdf'),
  path.resolve(__dirname, 'Priyanka Resume.pdf'),
  path.resolve(destDir, 'PriyankaResumee.pdf'),
  path.resolve(destDir, 'Priyanka Resume.pdf'),
  path.resolve(destDir, 'Priyanka_Resume.pdf')
];

let foundSource = possibleSources.find(file => fs.existsSync(file));

if (foundSource) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (foundSource !== destFile) {
    fs.copyFileSync(foundSource, destFile);
    console.log(`Successfully synced ${path.basename(foundSource)} to public/Priyanka_Resume.pdf!`);
  } else {
    console.log('Resume file public/Priyanka_Resume.pdf is ready.');
  }
} else {
  console.log('Note: Resume source file (Priyanka_Resume.pdf) will be served directly from public/ if present.');
}
