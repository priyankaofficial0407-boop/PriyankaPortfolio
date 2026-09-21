import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Immediate file copy from project root to public folder
try {
  const srcFile = path.resolve(__dirname, 'Priyanka Resume.pdf');
  const destDir = path.resolve(__dirname, 'public');
  const destFile = path.resolve(destDir, 'Priyanka_Resume.pdf');
  const destFileSpace = path.resolve(destDir, 'Priyanka Resume.pdf');

  if (fs.existsSync(srcFile)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(srcFile, destFile);
    fs.copyFileSync(srcFile, destFileSpace);
  }
} catch (err) {
  console.error('Error copying resume file:', err);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

