import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: '/myapp/', // Adjust if hosting in a subdirectory
  integrations: [tailwind(), mdx()]
});
