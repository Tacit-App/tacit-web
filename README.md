# Tacit marketing site and docs

npm workspace for the public site, the docs, and the decks.

- [`apps/site`](apps/site) is the marketing site. Astro serves `/`, `/es`, `/privacy`, and `/es/privacy`. Each route mounts the React app.
- [`apps/docs`](apps/docs) is the Starlight site for the data-ingress spec. It is built with `base: /docs`.
- [`decks`](decks) holds communication that is not the site. `decks/investors` is the deck served at `/investors`. `decks/src` is the shared HTML and Python source for the investor and commercial PDFs, which keep their relative asset paths. The PDFs are served at `/decks/tacit-investor-deck.pdf` and `/decks/tacit-commercial-deck.pdf`.
- [`packages/brand`](packages/brand) is `@tacit/brand`: color and type tokens, plus the logo SVGs. The site imports the tokens. Deck HTML stays self-contained and copies from this package when it is regenerated.

```bash
npm install
npm run dev
```

The site dev server is http://localhost:4321. Preview the docs alone with `npm run docs:dev` at http://127.0.0.1:3005/docs/.

`npm run build` writes the site to `apps/site/dist`, copies the published decks and logos into that build, and copies the docs build to `apps/site/dist/docs`. One Vercel project serves [tacit.guru](https://tacit.guru) and [tacit.guru/docs](https://tacit.guru/docs).

Hero instrument: Canvas 2D knowledge sphere with scroll stages (chaos → order → clusters → connections). Engine: [`apps/site/src/lib/knowledgeInstrument.ts`](apps/site/src/lib/knowledgeInstrument.ts).
