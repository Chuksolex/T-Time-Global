// generateSitemap.js

//const SitemapGenerator = require('sitemap-generator-custom-domain');
import SitemapGenerator from "sitemap-generator-custom-domain"

// Instantiate the generator with your website URL and the desired output file path
const generator = new SitemapGenerator('https://www.t-timenigeriaglobal.com.ng', {
  filepath: './public/sitemap.xml', // Set the path where the sitemap will be saved
  customDomain: 'https://www.t-timenigeriaglobal.com.ng', // Set your custom domain
});

// Start the generator
generator.start();

// Event handlers
generator.on('done', () => {
  console.log('Sitemap has been generated.');
});

generator.on('error', (error) => {
  console.error('An error occurred:', error);
});
