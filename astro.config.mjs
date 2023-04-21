import { defineConfig } from 'astro/config';
import addClasses from 'rehype-add-classes';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://chax-at.github.io',
  base: '/concept-first.org',
  markdown: {
    drafts: true,
    rehypePlugins: [[addClasses, {
      h1: 'text-4xl',
      h2: 'text-2xl',
      a: 'underline text-indigo-600 hover:text-indigo-400',
      ul: 'list-disc pl-5',
      blockquote: 'border-l-4 border-gray-300 pl-5',
      code: 'text-red-600 bg-red-50',
    }]],
  },
});
