import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    sitemap({
      baseURL: 'https://www.t-timenigeriaglobal.com.ng',
      exclude: ['/preview', '/login'], // Specify any routes you want to exclude from the sitemap
      // You can add additional options here, refer to the plugin documentation for more details
    }), 
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
