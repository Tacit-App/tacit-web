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

export type Page =
  | "home"
  | "platform"
  | "services"
  | "thesis"
  | "about"
  | "demo"
  | "privacy";

const PAGES: readonly Page[] = [
  "platform",
  "services",
  "thesis",
  "about",
  "demo",
  "privacy",
];

function isPage(value: string | undefined): value is Page {
  return PAGES.includes(value as Page);
}

/** Last path segment, so `/es/platform` and `/platform` both resolve. */
export function pageFromPathname(pathname: string): Page {
  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  const last = segments.at(-1);
  return isPage(last) ? last : "home";
}

/** Href for a locale and page. Keeps a hash (`/es/platform#part-agents`). */
export function pathForLocale(locale: Locale, hash = "", page: Page = "home"): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const slug = page === "home" ? "" : `/${page}`;
  const base = `${prefix}${slug}` || "/";
  const normalizedHash = hash && !hash.startsWith("#") ? `#${hash}` : hash;
  return `${base}${normalizedHash}`;
}

export function diagnosticMailto(subject: string): string {
  return `mailto:sales@tacit.guru?subject=${encodeURIComponent(subject)}`;
}
