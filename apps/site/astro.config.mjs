import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tacit.guru",
  integrations: [react()],
  redirects: {
    "/en": "/",
    "/en/privacy": "/privacy",
    "/en/platform": "/platform",
    "/en/services": "/services",
    "/en/thesis": "/thesis",
    "/en/about": "/about",
    "/en/demo": "/demo",
  },
});
