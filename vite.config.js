import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      images: path.resolve(__dirname, './src/images'),
      css: path.resolve(__dirname, './src/css'),
    },
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
});
