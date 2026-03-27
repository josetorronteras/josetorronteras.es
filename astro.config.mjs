import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://josetorronteras.es",
  image: {
    domains: ["avatars.githubusercontent.com", "is1-ssl.mzstatic.com"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
