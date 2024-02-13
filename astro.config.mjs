import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://chax-at.github.io',
  base: '/concept-first.org',
  markdown: {
    drafts: true,
  },
});

