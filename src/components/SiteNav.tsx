import { diagnosticMailto, pathForLocale, useI18n } from "../i18n";
import { LocaleToggle } from "./LocaleToggle";

export function SiteNav() {
  const { locale, t } = useI18n();

  return (
    <header className="site-nav">
      <a
        className="site-brand"
        href={pathForLocale(locale, "#top")}
        aria-label={t.nav.homeAria}
      >
        <img src="/tacit-mark.svg" alt="" width={28} height={28} />
        <span>Tacit</span>
      </a>
      <div className="site-nav-actions">
        <LocaleToggle />
        <a
          className="site-nav-cta"
          href={diagnosticMailto(t.diagnosticMailSubject)}
        >
          {t.nav.bookDiagnostic}
        </a>
      </div>
    </header>
  );
}
