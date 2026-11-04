import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tacit.guru",
  integrations: [react()],
  redirects: {
    "/en": "/",
    "/en/privacy": "/privacy",
  },
});
