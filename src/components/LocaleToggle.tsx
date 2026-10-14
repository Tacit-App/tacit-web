import { LOCALES, useI18n, type Locale } from "../i18n";

const LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export function LocaleToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className="locale-toggle"
      role="group"
      aria-label={t.nav.languageLabel}
    >
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
        <button
          key={code}
          type="button"
          className={
            code === locale
              ? "locale-toggle-btn is-active"
              : "locale-toggle-btn"
          }
          aria-pressed={code === locale}
          onClick={() => setLocale(code)}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  );
}
