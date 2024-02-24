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

// Get the sitemap instance
const sitemap = generator.getSitemap();

// Add static URL on crawl init.
generator.getCrawler().on('crawlstart', () => {
  //Add additional URLs to the sitemap
sitemap.addURL('https://www.t-timenigeriaglobal.com.ng/about');
sitemap.addURL('https://www.t-timenigeriaglobal.com.ng/contact');
sitemap.addURL('https://www.t-timenigeriaglobal.com.ng/services');
sitemap.addURL('https://t-timenigeriaglobal.com.ng/portfolio');
sitemap.addURL('https://t-timenigeriaglobal.com.ng/services/electrical-installation');
sitemap.addURL('https://t-timenigeriaglobal.com.ng/services/air-conditioning-system');
sitemap.addURL('https://t-timenigeriaglobal.com.ng/services/refrigerator-maintenace');
sitemap.addURL('https://t-timenigeriaglobal.com.ng/services/generator-maintenance');
sitemap.addURL('https://t-timenigeriaglobal.com.ng/services/painting-services');
});

// Event handlers
generator.on('done', () => {
  console.log('Sitemap has been generated.');
});

generator.on('error', (error) => {
  console.error('An error occurred:', error);
});
