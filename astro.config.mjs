import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";

const site = process.env.SITE_URL || "https://akhila14.github.io";

export default defineConfig({
  site,
  output: "static",
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url))
      }
    },
    build: {
      assetsInlineLimit: 2048
    }
  }
});
