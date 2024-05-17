import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio_website/', // Ensure this matches your repository name exactly
  build: {
    outDir: 'dist', // Ensure this matches your deploy directory
    assetsDir: 'assets' // This can be customized as needed
  }
});
