import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Immediate file copy from project root to public folder
try {
  const destDir = path.resolve(__dirname, 'public');
  const destFile = path.resolve(destDir, 'Priyanka_Resume.pdf');
  const possibleSources = [
    path.resolve(__dirname, 'PriyankaResumee.pdf'),
    path.resolve(__dirname, 'Priyanka_Resume.pdf'),
    path.resolve(__dirname, 'Priyanka Resume.pdf'),
    path.resolve(destDir, 'PriyankaResumee.pdf'),
    path.resolve(destDir, 'Priyanka Resume.pdf')
  ];

  const srcFile = possibleSources.find(file => fs.existsSync(file));

  if (srcFile && srcFile !== destFile) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(srcFile, destFile);
  }
} catch (err) {
  // Silent catch
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

