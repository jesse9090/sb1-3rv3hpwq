// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Set the base path if your site is hosted in a subdirectory
  base: '/', // Change to '/myapp/' if hosted under a subdirectory like example.com/myapp/

  integrations: [
    tailwind(), // Enables Tailwind CSS integration
    mdx()      // Enables MDX support for using JSX in Markdown files
  ],

  // Optionally, specify the output directory
  output: 'static', // 'server' for SSR or 'static' for pre-rendered sites

  // Additional configurations can be added here
  vite: {
    // Vite-specific configurations can go here
  },
});
