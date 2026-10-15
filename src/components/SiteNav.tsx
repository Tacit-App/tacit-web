import { pathForLocale, useI18n } from "../i18n";
import { LocaleToggle } from "./LocaleToggle";

const MARKS = ["services", "nosotros", "research", "demo", "tesis"] as const;

function NavMark({ kind }: { kind: string }) {
  return (
    <span className={`nav-mark nav-mark-${kind}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

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
      <nav className="site-nav-links" aria-label="Tacit">
        {t.nav.links.map((link, index) => (
          <a key={link.href} href={link.href}>
            <NavMark kind={MARKS[index] ?? "services"} />
            {link.label}
          </a>
        ))}
      </nav>
      <div className="site-nav-actions">
        <LocaleToggle />
        <a className="site-nav-cta" href="#demo">
          {t.nav.bookDiagnostic}
        </a>
      </div>
    </header>
  );
}
