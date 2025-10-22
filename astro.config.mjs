import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://josetorronteras.es",
  vite: {
    // @ts-expect-error: Known type incompatibility with Tailwind 4.1.11+ and Vite plugin types
    // See: https://github.com/withastro/astro/issues/14030
    // This will be resolved in Astro 6 with Vite 7 support
    plugins: [tailwindcss()],
  },
});
