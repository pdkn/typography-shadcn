import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import markdoc from '@astrojs/markdoc';
import devOnlyRoutes from "astro-dev-only-routes";

// https://astro.build/config
export default defineConfig({
  integrations: [
    markdoc(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    devOnlyRoutes(),
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['js','tsx'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
