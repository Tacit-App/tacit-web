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
    links: Array<{ href: string; label: string }>;
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
      parts: Array<{ id: string; name: string; body: string }>;
    };
    industries: {
      eyebrow: string;
      title: string;
      items: string[];
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
  solutions: Array<{
    slug: string;
    name: string;
    stage: string;
    homeLine: string;
  }>;
  footer: {
    aria: string;
    tagline: string;
  };
};
