import { CONTACT_MAIL } from "../data/site";
import { pathForLocale, useI18n, type Page } from "../i18n";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { locale, t } = useI18n();
  const links: Array<{ page: Page; label: string }> = [
    { page: "platform", label: t.home.platform.eyebrow },
    ...t.nav.links,
    { page: "demo", label: t.nav.bookDiagnostic },
    { page: "privacy", label: t.footer.privacy },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <img src="/tacit-mark.svg" alt="" width={22} height={22} />
        <span>Tacit</span>
      </div>
      <p className="site-footer-tag">{t.footer.tagline}</p>
      <nav className="site-footer-links" aria-label={t.footer.aria}>
        {links.map((link) => (
          <a key={link.page} href={pathForLocale(locale, "", link.page)}>
            {link.label}
          </a>
        ))}
        <a href={CONTACT_MAIL}>sales@tacit.guru</a>
      </nav>
      <p className="site-footer-meta">© {year} Tacit</p>
    </footer>
  );
}
