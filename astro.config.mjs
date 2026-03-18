// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ashutoshbibyan.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],

  server:{
    host:true
  },
  vite: {
    plugins: [tailwindcss()],
  },
});