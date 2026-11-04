import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "apps/site/public");
const investorsDir = join(publicDir, "investors");
const decksDir = join(publicDir, "decks");

await rm(investorsDir, { recursive: true, force: true });
await rm(decksDir, { recursive: true, force: true });
await mkdir(decksDir, { recursive: true });

await cp(join(root, "decks/investors"), investorsDir, {
  recursive: true,
  filter: (source) => !source.endsWith("tacit-investor-deck.pdf"),
});

await cp(join(root, "decks/investors/tacit-investor-deck.pdf"), join(decksDir, "tacit-investor-deck.pdf"));
await cp(join(root, "decks/commercial/tacit-commercial-deck.pdf"), join(decksDir, "tacit-commercial-deck.pdf"));

for (const logo of ["tacit-mark.svg", "tacit-logo-light.svg", "tacit-logo-dark.svg"]) {
  await cp(join(root, "packages/brand/logos", logo), join(publicDir, logo));
}
