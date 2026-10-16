import { useEffect, useState } from "react";
import { pathForLocale, useI18n } from "../i18n";
import { LocaleToggle } from "./LocaleToggle";

const MARKS = ["nosotros", "research", "demo", "tesis"] as const;

function NavMark({ kind }: { kind: string }) {
  return (
    <span className={`nav-mark nav-mark-${kind}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export function IndustryIcon({ id }: { id: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "logistics") {
    return (
      <svg {...common}>
        <path d="M2.5 5.2 8 2.8l5.5 2.4v5.6L8 13.2 2.5 10.8z" />
        <path d="M2.5 5.2 8 7.6l5.5-2.4M8 7.6v5.6" />
      </svg>
    );
  }

  if (id === "fintech") {
    return (
      <svg {...common}>
        <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
        <path d="M2 6.5h12" />
      </svg>
    );
  }

  if (id === "healthcare") {
    return (
      <svg {...common}>
        <path d="M8 3.2v9.6M3.2 8h9.6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="2.2" y="3" width="11.6" height="7.6" rx="1.4" />
      <path d="M6 13h4" />
    </svg>
  );
}

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

export function SiteNav() {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState<"platform" | "industries" | null>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
    }
    function onPointer(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!document.querySelector(".site-nav")?.contains(target)) setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header className="site-nav">
      <a className="site-brand" href={pathForLocale(locale, "#top")} aria-label={t.nav.homeAria}>
        <img src="/tacit-mark.svg" alt="" width={28} height={28} />
        <span>Tacit</span>
      </a>
      <nav className="site-nav-links" aria-label="Tacit">
        <div
          className={`nav-drop${open === "platform" ? " is-open" : ""}`}
          onMouseEnter={() => setOpen("platform")}
          onMouseLeave={() => setOpen(null)}
        >
          <button
            type="button"
            aria-expanded={open === "platform"}
            aria-controls="nav-platform"
            onClick={() => setOpen(open === "platform" ? null : "platform")}
          >
            {t.home.platform.eyebrow}
            <span className="nav-chevron" aria-hidden="true" />
          </button>
          <div className="nav-panel" id="nav-platform" hidden={open !== "platform"}>
            {t.home.platform.parts.map((part) => (
              <a key={part.id} href={`#part-${part.id}`} onClick={() => setOpen(null)}>
                <ServiceIcon id={part.id} />
                <strong>{part.name}</strong>
                <span>{part.summary}</span>
              </a>
            ))}
          </div>
        </div>

        <div
          className={`nav-drop${open === "industries" ? " is-open" : ""}`}
          onMouseEnter={() => setOpen("industries")}
          onMouseLeave={() => setOpen(null)}
        >
          <button
            type="button"
            aria-expanded={open === "industries"}
            aria-controls="nav-industries"
            onClick={() => setOpen(open === "industries" ? null : "industries")}
          >
            {t.home.industries.eyebrow}
            <span className="nav-chevron" aria-hidden="true" />
          </button>
          <div className="nav-panel nav-panel-industries" id="nav-industries" hidden={open !== "industries"}>
            {t.home.industries.items.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(null)}>
                <IndustryIcon id={item.id} />
                <strong>{item.name}</strong>
              </a>
            ))}
          </div>
        </div>

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
