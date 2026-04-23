import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://josetorronteras.es",

  image: {
    domains: [
      "avatars.githubusercontent.com",
      "is1-ssl.mzstatic.com",
      "images.unsplash.com",
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },

  integrations: [sitemap()],
});
