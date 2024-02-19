import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import Sitemap from 'vite-plugin-sitemap';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/Images',
          dest: 'public/img',
        }
      ]
    }),
  ],
});
