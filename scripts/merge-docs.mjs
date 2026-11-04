import { cp, rm } from "node:fs/promises";

await rm("apps/site/dist/docs", { recursive: true, force: true });
await cp("apps/docs/dist", "apps/site/dist/docs", { recursive: true });
