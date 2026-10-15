import { useState } from "react";
import { diagnosticMailto, pathForLocale, useI18n } from "../i18n";
import { LocaleToggle } from "./LocaleToggle";

export function SiteNav() {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className={open ? "site-nav is-open" : "site-nav"}>
      <a
        className="site-brand"
        href={pathForLocale(locale, "#top")}
        aria-label={t.nav.homeAria}
      >
        <img src="/tacit-mark.svg" alt="" width={28} height={28} />
        <span>Tacit</span>
      </a>
      <button
        type="button"
        className="site-menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {t.nav.menuLabel}
      </button>
      <nav className="site-nav-links" aria-label={t.nav.menuLabel}>
        {t.nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
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
