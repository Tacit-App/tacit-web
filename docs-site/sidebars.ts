import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  spec: [
    { type: "doc", id: "index", label: "Data ingress" },
    { type: "doc", id: "api", label: "Push API" },
    { type: "doc", id: "s3", label: "Amazon S3" },
  ],
};

export default sidebars;
