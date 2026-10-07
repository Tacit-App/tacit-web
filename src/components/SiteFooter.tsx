import { CONTACT_MAIL } from "../data/site";
import { useI18n } from "../i18n";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <img src="/tacit-mark.svg" alt="" width={22} height={22} />
        <span>Tacit</span>
      </div>
      <p className="site-footer-tag">{t.footer.tagline}</p>
      <nav className="site-footer-links" aria-label={t.footer.aria}>
        <a href={CONTACT_MAIL}>sales@tacit.guru</a>
      </nav>
      <p className="site-footer-meta">© {year} Tacit</p>
    </footer>
  );
}
