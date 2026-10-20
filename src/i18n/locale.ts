import { DEFAULT_LOCALE, LOCALES, type Locale } from "./types";

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Locale from the path: `/es` → es, everything else → default (en). */
export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.replace(/\/+$/, "").split("/").filter(Boolean)[0];
  if (segment && isLocale(segment) && segment !== DEFAULT_LOCALE) {
    return segment;
  }
  return DEFAULT_LOCALE;
}

export type Page = "home" | "privacy";

/** Page from the path: `/privacy` and `/es/privacy` → privacy, else home. */
export function pageFromPathname(pathname: string): Page {
  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  return segments.at(-1) === "privacy" ? "privacy" : "home";
}

/** Href for a locale and page (`/`, `/es`, `/privacy`, `/es/privacy`). Keeps hash. */
export function pathForLocale(locale: Locale, hash = "", page: Page = "home"): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const base = page === "privacy" ? `${prefix}/privacy` : prefix || "/";
  const normalizedHash = hash && !hash.startsWith("#") ? `#${hash}` : hash;
  return `${base}${normalizedHash}`;
}

export function diagnosticMailto(subject: string): string {
  return `mailto:sales@tacit.guru?subject=${encodeURIComponent(subject)}`;
}
