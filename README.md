# Tacit marketing site

Vite + React marketing site.

Hero instrument: Canvas 2D knowledge sphere with scroll stages (chaos → order → clusters → connections). Engine: [`src/lib/knowledgeInstrument.ts`](src/lib/knowledgeInstrument.ts).

Previous static HTML drafts live in [`legacy/`](legacy/).

```bash
npm install
npm run dev
```

Build: `npm run build`

The data-ingress spec is a Starlight site in [`docs-site/`](docs-site/). `npm run build` writes it into `dist/docs`, so the same Vercel project serves it at [tacit.guru/docs](https://tacit.guru/docs). Preview it alone with `npm run docs:dev` at `http://127.0.0.1:3005/docs/`.
