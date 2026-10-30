import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://amarshah1.github.io',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
