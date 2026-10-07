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
