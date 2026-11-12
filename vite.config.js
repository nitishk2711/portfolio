import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths working on GitHub Pages project sites
// (https://<user>.github.io/<repo>/) as well as on a custom domain.
export default defineConfig({
  base: './',
  plugins: [react()],
});
