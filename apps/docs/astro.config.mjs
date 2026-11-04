import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

export default defineConfig({
  site: "https://tacit.guru",
  base: "/docs",
  integrations: [
    react(),
    mermaid({
      theme: "base",
      autoTheme: false,
      mermaidConfig: {
        fontFamily: "Inter, system-ui, sans-serif",
        themeVariables: {
          fontFamily: "Inter, system-ui, sans-serif",
          primaryColor: "#ebf7f3",
          primaryTextColor: "#18232e",
          primaryBorderColor: "#1a9e78",
          lineColor: "#1a9e78",
          secondaryColor: "#f4efe6",
          tertiaryColor: "#ffffff",
          background: "transparent",
        },
        flowchart: {
          curve: "stepBefore",
          padding: 16,
          htmlLabels: true,
          nodeSpacing: 48,
          rankSpacing: 56,
        },
      },
    }),
    starlight({
      title: "Tacit",
      description: "Push API and Amazon S3.",
      logo: {
        light: "./src/assets/tacit-mark-light.svg",
        dark: "./src/assets/tacit-mark-dark.svg",
        alt: "Tacit",
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        Head: "./src/components/Head.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      lastUpdated: false,
      pagination: false,
      sidebar: [
        { label: "Introduction", link: "/" },
        { label: "Overview", slug: "overview" },
        {
          label: "Push API",
          items: [
            { label: "Overview", slug: "api" },
            {
              label: "Reserve an upload",
              slug: "api/artifacts",
              badge: { text: "POST", variant: "success", class: "method-post" },
            },
            {
              label: "Accept a record",
              slug: "api/observations",
              badge: { text: "POST", variant: "success", class: "method-post" },
            },
            {
              label: "Accept a batch",
              slug: "api/observations-batch",
              badge: { text: "POST", variant: "success", class: "method-post" },
            },
            {
              label: "Read status",
              slug: "api/observation",
              badge: { text: "GET", variant: "note", class: "method-get" },
            },
          ],
        },
        { label: "Amazon S3", slug: "s3" },
      ],
    }),
  ],
});
