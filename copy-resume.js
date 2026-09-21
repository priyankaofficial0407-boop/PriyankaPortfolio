import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFile = path.resolve(__dirname, 'Priyanka Resume.pdf');
const destFile = path.resolve(__dirname, 'public/Priyanka_Resume.pdf');
const destFileSpace = path.resolve(__dirname, 'public/Priyanka Resume.pdf');

if (fs.existsSync(srcFile)) {
  if (!fs.existsSync(path.resolve(__dirname, 'public'))) {
    fs.mkdirSync(path.resolve(__dirname, 'public'), { recursive: true });
  }
  fs.copyFileSync(srcFile, destFile);
  fs.copyFileSync(srcFile, destFileSpace);
  console.log('Successfully copied Priyanka Resume.pdf to public/Priyanka_Resume.pdf!');
} else {
  console.log('Priyanka Resume.pdf source file not found.');
}
