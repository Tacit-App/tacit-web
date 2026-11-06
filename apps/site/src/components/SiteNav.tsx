import { useEffect, useRef, useState, type PointerEvent } from "react";
import { pathForLocale, useI18n, type Page } from "../i18n";
import { LayerStack } from "./LayerStack";
import { LocaleToggle } from "./LocaleToggle";

const CLOSE_DELAY_MS = 160;

function ServiceIcon({ id }: { id: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "agents") {
    return (
      <svg {...common}>
        <rect x="5" y="8" width="12" height="12" rx="3" />
        <rect x="11" y="8" width="12" height="12" rx="3" />
      </svg>
    );
  }

  if (id === "apps") {
    return (
      <svg {...common}>
        <path d="M14 6a8 8 0 0 1 0 16" />
        <path d="M14 6v16" />
        <path d="M8 14h6" />
      </svg>
    );
  }

  if (id === "development") {
    return (
      <svg {...common}>
        <path d="M7 9h14" />
        <path d="M7 14h10" />
        <path d="M7 19h14" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="14" cy="14" r="2.2" />
      <circle cx="8" cy="9" r="1.6" />
      <circle cx="20" cy="9" r="1.6" />
      <circle cx="8" cy="19" r="1.6" />
      <circle cx="20" cy="19" r="1.6" />
      <path d="M12.2 12.6 9.2 10.2M15.8 12.6l3-2.4M12.2 15.4 9.2 17.8M15.8 15.4l3 2.4" />
    </svg>
  );
}

function canHoverOpen(event: PointerEvent) {
  if (event.pointerType === "touch") return false;
  if (window.innerWidth < 860) return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function SiteNav({ page }: { page: Page }) {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [menu, setMenu] = useState(false);
  const [panelBox, setPanelBox] = useState({ top: 72, left: 16, width: 720 });
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function closeMega() {
    cancelClose();
    setOpen(false);
    setShown(false);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setShown(false);
      closeTimer.current = null;
    }, CLOSE_DELAY_MS);
  }

  function placePanel() {
    const header = headerRef.current;
    if (!header) return;
    const rect = header.getBoundingClientRect();
    const width = Math.min(832, window.innerWidth - 32);
    const left = Math.max(16, (window.innerWidth - width) / 2);
    setPanelBox({ top: rect.bottom + 10, left, width });
  }

  function openMega() {
    cancelClose();
    placePanel();
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    placePanel();
    const onResize = () => placePanel();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open && !menu) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (open) {
        closeMega();
        triggerRef.current?.focus();
      }
      setMenu(false);
    }
    function onPointer(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (headerRef.current?.contains(target)) return;
      if (document.getElementById("nav-platform")?.contains(target)) return;
      closeMega();
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open, menu]);

  useEffect(() => {
    if (!menu) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menu]);

  useEffect(() => () => cancelClose(), []);

  return (
    <header
      ref={headerRef}
      className={`site-nav${page === "thesis" ? " is-dark" : ""}${menu ? " is-open" : ""}`}
    >
      <a className="skip-link" href="#content">
        {t.nav.skip}
      </a>
      <a className="site-brand" href={pathForLocale(locale)} aria-label={t.nav.homeAria}>
        <img src="/tacit-mark.svg" alt="" width={28} height={28} />
        <span>Tacit</span>
      </a>
      <nav className="site-nav-links" id="site-nav-links" aria-label="Tacit">
        <a
          ref={triggerRef}
          id="nav-platform-trigger"
          className={`nav-mega-trigger${open ? " is-open" : ""}${page === "platform" ? " is-active" : ""}`}
          href={pathForLocale(locale, "", "platform")}
          aria-current={page === "platform" ? "page" : undefined}
          aria-expanded={open}
          aria-controls="nav-platform"
          aria-haspopup="true"
          onPointerEnter={(event) => {
            if (!canHoverOpen(event)) return;
            openMega();
          }}
          onPointerLeave={(event) => {
            if (!canHoverOpen(event)) return;
            scheduleClose();
          }}
          onFocus={(event) => {
            if (event.currentTarget.matches(":focus-visible")) openMega();
          }}
          onClick={() => {
            closeMega();
            setMenu(false);
          }}
        >
          {t.home.platform.eyebrow}
          <svg className="nav-caret" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path
              d="M4 6l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="nav-mobile-parts">
          {t.home.platform.parts.map((part) => (
            <a
              key={part.id}
              href={pathForLocale(locale, `#part-${part.id}`, "platform")}
              onClick={() => setMenu(false)}
            >
              {part.name}
            </a>
          ))}
        </div>

        {t.nav.links.map((link) => (
          <a
            key={link.page}
            href={pathForLocale(locale, "", link.page)}
            aria-current={page === link.page ? "page" : undefined}
            className={page === link.page ? "is-active" : undefined}
            onClick={() => setMenu(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="site-nav-actions">
        <button
          type="button"
          className="site-menu"
          aria-expanded={menu}
          aria-controls="site-nav-links"
          onClick={() => setMenu((value) => !value)}
        >
          {t.nav.menuLabel}
        </button>
        <LocaleToggle />
        <a className="site-nav-cta" href={pathForLocale(locale, "", "demo")}>
          {t.nav.bookDiagnostic}
        </a>
      </div>
      {open ? (
        <>
          <div
            className={`mega-overlay${shown ? " is-in" : ""}`}
            style={{ top: panelBox.top - 10 }}
            onPointerDown={() => closeMega()}
          />
          <div
            className="mega-corridor"
            style={{ top: panelBox.top - 10, left: panelBox.left, width: panelBox.width }}
            onPointerEnter={cancelClose}
            onPointerLeave={scheduleClose}
          />
          <div
            id="nav-platform"
            className={`mega-panel${shown ? " is-in" : ""}`}
            style={{ top: panelBox.top, left: panelBox.left, width: panelBox.width }}
            aria-labelledby="nav-platform-trigger"
            onPointerEnter={cancelClose}
            onPointerLeave={scheduleClose}
          >
            <div className="mega-links">
              {t.home.platform.parts.map((part) => (
                <a
                  key={part.id}
                  href={pathForLocale(locale, `#part-${part.id}`, "platform")}
                  onClick={() => closeMega()}
                >
                  <span className="mega-icon">
                    <ServiceIcon id={part.id} />
                  </span>
                  <span>
                    <strong>{part.name}</strong>
                    <span>{part.summary}</span>
                  </span>
                </a>
              ))}
            </div>
            <a
              className="mega-feature"
              href={pathForLocale(locale, "", "platform")}
              onClick={() => closeMega()}
            >
              <LayerStack className="mega-stack" label={t.home.platform.diagramAlt} />
              <span>
                <strong>{t.home.platform.title}</strong>
                <span>{t.home.platform.eyebrow}</span>
              </span>
            </a>
          </div>
        </>
      ) : null}
    </header>
  );
}
