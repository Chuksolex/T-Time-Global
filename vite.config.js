import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';//

//import { viteStaticCopy } from 'vite-plugin-static-copy';
//import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [ react(), ],
  server: { port: 3001,  },
});
