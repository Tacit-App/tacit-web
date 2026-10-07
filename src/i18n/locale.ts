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

/** Homepage href for a locale (`/` for EN, `/es` for ES). Keeps hash. */
export function pathForLocale(locale: Locale, hash = ""): string {
  const base = locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
  const normalizedHash = hash && !hash.startsWith("#") ? `#${hash}` : hash;
  return `${base}${normalizedHash}`;
}

export function diagnosticMailto(subject: string): string {
  return `mailto:sales@tacit.guru?subject=${encodeURIComponent(subject)}`;
}
