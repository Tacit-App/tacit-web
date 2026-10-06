import { Link } from "react-router";
import { solutions } from "../data/solutions";
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
        {solutions.map((item) => (
          <Link key={item.slug} to={`/solutions/${item.slug}`}>
            {item.name}
          </Link>
        ))}
        <Link to="/method">Method</Link>
        <Link to="/blog">Blog</Link>
        <a href={CONTACT_MAIL}>sales@tacit.guru</a>
      </nav>
      <p className="site-footer-meta">© {year} Tacit</p>
    </footer>
  );
}
