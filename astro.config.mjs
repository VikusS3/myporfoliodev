// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sauldev.pages.dev",
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/CV.pdf"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
