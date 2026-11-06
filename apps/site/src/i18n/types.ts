export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export type LandingCopy = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    homeAria: string;
    bookDiagnostic: string;
    languageLabel: string;
    menuLabel: string;
    skip: string;
    platformMenu: string;
    links: Array<{ page: "services" | "thesis" | "about"; label: string }>;
  };
  cta: {
    bookDiagnostic: string;
    seeHow: string;
    siteUrlLabel: string;
  };
  diagnosticMailSubject: string;
  productAria: string;
  home: {
    kicker: string;
    headline: string;
    sub: string;
    tagline: string;
    benefits: {
      heading: string;
      items: Array<{ title: string; body: string }>;
    };
    problem: {
      eyebrow: string;
      title: string;
      body: string;
      closer: string;
    };
    premise: {
      eyebrow: string;
      title: string;
      body: string;
      imageAlt: string;
    };
    how: {
      eyebrow: string;
      title: string;
      imageAlt: string;
      steps: Array<{
        n: string;
        id: string;
        title: string;
        body: string;
        detail: string;
        points: string[];
        imageAlt: string;
        media: "knowledge-left" | "knowledge-right" | "pulse" | "film" | "none";
      }>;
    };
    who: {
      eyebrow: string;
      title: string;
      body: string;
      closer: string;
    };
    research: {
      eyebrow: string;
      title: string;
      body: string;
    };
    platform: {
      eyebrow: string;
      title: string;
      intro: string;
      diagramAlt: string;
      parts: Array<{ id: string; name: string; summary: string; body: string; marks: string[] }>;
    };
    industries: {
      eyebrow: string;
      title: string;
      items: Array<{ id: string; name: string }>;
    };
    contrast: {
      eyebrow: string;
      title: string;
      usualPath: string;
      withTacit: string;
      rows: Array<[string, string]>;
    };
    close: {
      title: string;
      body: string;
    };
    filmLabel: string;
  };
  pages: {
    platform: { title: string; description: string };
    services: { title: string; description: string };
    thesis: { title: string; description: string };
    about: { title: string; description: string };
    demo: { title: string; description: string };
  };
  field: {
    captures: Array<{ source: string; body: string; person: string; role: string }>;
    dayOne: {
      title: string;
      lead: string;
      name: string;
      role: string;
      items: Array<{ title: string; meta: string; tag: string }>;
      footer: string;
    };
    judgment: Array<{ title: string; body: string }>;
    cost: {
      title: string;
      lead: string;
      withoutTitle: string;
      withoutBody: string;
      withTitle: string;
      withBody: string;
    };
    founder: {
      quote: string;
      name: string;
      role: string;
    };
  };
  solutions: Array<{
    slug: string;
    name: string;
    stage: string;
    homeLine: string;
  }>;
  footer: {
    aria: string;
    tagline: string;
    privacy: string;
  };
};
