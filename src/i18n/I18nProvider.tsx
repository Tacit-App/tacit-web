import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { I18nContext } from "./context";
import { messages } from "./messages";
import { localeFromPathname, pathForLocale } from "./locale";
import { DEFAULT_LOCALE, type LandingCopy, type Locale } from "./types";

function applyDocumentLocale(locale: Locale, copy: LandingCopy) {
  document.documentElement.lang = locale;
  document.title = copy.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", copy.meta.description);
  }
}

function readLocale(): Locale {
  return localeFromPathname(window.location.pathname);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.history.pushState(
      { locale: next },
      "",
      pathForLocale(next, window.location.hash),
    );
  }, []);

  useEffect(() => {
    applyDocumentLocale(locale, messages[locale]);
  }, [locale]);

  useEffect(() => {
    // Canonicalize `/en` → `/` so English stays at the root.
    if (
      window.location.pathname === "/en" ||
      window.location.pathname === "/en/"
    ) {
      window.history.replaceState(
        { locale: DEFAULT_LOCALE },
        "",
        pathForLocale(DEFAULT_LOCALE, window.location.hash),
      );
      setLocaleState(DEFAULT_LOCALE);
    }

    const onPopState = () => setLocaleState(readLocale());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      t: messages[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}
