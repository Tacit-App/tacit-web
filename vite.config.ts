import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const root = import.meta.dirname;

/** Serve the SPA entry for locale paths in dev and preview. */
function localeSpaFallback(): Plugin {
  const rewrite = (url: string | undefined) => {
    if (!url) return url;
    const path = url.split("?")[0];
    if (path === "/es" || path === "/es/") {
      return url.replace(path, "/index.html");
    }
    return url;
  };

  return {
    name: "locale-spa-fallback",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        req.url = rewrite(req.url);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        req.url = rewrite(req.url);
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localeSpaFallback()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        sphereExport: resolve(root, "sphere-export.html"),
        sphereExportSlides: resolve(root, "sphere-export-slides.html"),
        spherePreviewSlides: resolve(root, "sphere-preview-slides.html"),
        landingPreview: resolve(root, "landing-preview.html"),
      },
    },
  },
});
