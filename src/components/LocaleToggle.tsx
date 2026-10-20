import { LOCALES, pageFromPathname, pathForLocale, useI18n, type Locale } from "../i18n";

const LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export function LocaleToggle() {
  const { locale, t } = useI18n();
  const hash = window.location.hash;
  const page = pageFromPathname(window.location.pathname);

  return (
    <div className="locale-toggle" role="group" aria-label={t.nav.languageLabel}>
      <svg
        className="locale-toggle-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 12h17M5 8.2h14M5 15.8h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      {LOCALES.map((code) => (
        <a
          key={code}
          href={pathForLocale(code, hash, page)}
          hrefLang={code}
          className={
            code === locale
              ? "locale-toggle-btn is-active"
              : "locale-toggle-btn"
          }
          aria-current={code === locale ? "true" : undefined}
          onClick={(event) => {
            event.preventDefault();
            window.location.assign(pathForLocale(code, window.location.hash, page));
          }}
        >
          {LABELS[code]}
        </a>
      ))}
    </div>
  );
}
