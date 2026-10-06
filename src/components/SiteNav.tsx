import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { DIAGNOSTIC_MAIL } from "../data/site";

const links = [
  { to: "/solutions", label: "Solutions" },
  { to: "/method", label: "Method" },
  { to: "/blog", label: "Blog" },
];

export function SiteNav({ onDark }: { onDark: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bar = scrolled && !onDark ? " is-scrolled" : "";

  return (
    <header className={`site-nav${onDark ? " is-dark" : ""}${open ? " is-open" : ""}${bar}`}>
      <Link className="site-brand" to="/" aria-label="Tacit home">
        <img src="/tacit-mark.svg" alt="" width={28} height={28} />
        <span>Tacit</span>
      </Link>
      <button
        type="button"
        className="site-menu"
        aria-expanded={open}
        aria-controls="site-nav-links"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav id="site-nav-links" className="site-nav-links" aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <a className="site-nav-cta" href={DIAGNOSTIC_MAIL}>
        Book a diagnostic
      </a>
    </header>
  );
}
