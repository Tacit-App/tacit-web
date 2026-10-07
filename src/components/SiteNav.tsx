import { DIAGNOSTIC_MAIL } from "../data/site";

export function SiteNav() {
  return (
    <header className="site-nav">
      <a className="site-brand" href="#top" aria-label="Tacit home">
        <img src="/tacit-mark.svg" alt="" width={28} height={28} />
        <span>Tacit</span>
      </a>
      <a className="site-nav-cta" href={DIAGNOSTIC_MAIL}>
        Book a diagnostic
      </a>
    </header>
  );
}
