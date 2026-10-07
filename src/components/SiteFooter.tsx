import { CONTACT_MAIL, TAGLINE } from "../data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <img src="/tacit-mark.svg" alt="" width={22} height={22} />
        <span>Tacit</span>
      </div>
      <p className="site-footer-tag">{TAGLINE}</p>
      <nav className="site-footer-links" aria-label="Footer">
        <a href={CONTACT_MAIL}>sales@tacit.guru</a>
      </nav>
      <p className="site-footer-meta">© {year} Tacit</p>
    </footer>
  );
}
