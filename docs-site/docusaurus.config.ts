import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tacit data ingress",
  tagline: "Push API and Amazon S3",
  favicon: "tacit-mark.svg",
  url: "https://tacit.guru",
  baseUrl: "/docs/",
  noIndex: true,
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  organizationName: "Tacit",
  projectName: "tacit-web",
  trailingSlash: false,
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "draft-contract",
      content:
        "This interface is not in production. These pages are the contract Tacit will build to.",
      backgroundColor: "#18232E",
      textColor: "#F4EFE6",
      isCloseable: false,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Tacit",
      logo: {
        alt: "Tacit",
        src: "tacit-mark.svg",
      },
      items: [
        { to: "/", label: "Data ingress", position: "left" },
        { to: "/api", label: "Push API", position: "left" },
        { to: "/s3", label: "Amazon S3", position: "left" },
        { href: "pathname:///openapi.yaml", label: "OpenAPI", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      copyright: "Tacit data ingress · draft 0.1 · not a production API",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
