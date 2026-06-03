// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tripspackinglist.com',
  integrations: [sitemap({
    serialize(item) {
      if (/\/400\/?$/.test(item.url)) {
        return undefined;
      }
      return item;
    }
  })],
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});