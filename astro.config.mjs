// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The sitemap integration uses `site` to build absolute URLs and
  // canonical links. Update it if the site is deployed somewhere else.
  site: 'https://a-better-clean.pages.dev',

  // applyBaseStyles: false lets us write the Tailwind directives
  // ourselves in src/styles/global.css.
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
