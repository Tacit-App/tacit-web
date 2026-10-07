import { useEffect, useState } from "react";
import { DIAGNOSTIC_MAIL } from "../data/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
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
