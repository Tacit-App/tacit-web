import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "../data/copy";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

function loadCalendly(): Promise<void> {
  if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }
  if (window.Calendly) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(
    'script[src="https://assets.calendly.com/assets/external/widget.js"]',
  );
  if (existing) {
    return new Promise((resolve) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      if (window.Calendly) resolve();
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.body.appendChild(script);
  });
}

export function DemoCalendar({ label }: { label: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    let cancelled = false;

    void loadCalendly().then(() => {
      if (cancelled || !mountRef.current || !window.Calendly) return;
      if (mountRef.current.querySelector("iframe")) return;
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: mountRef.current,
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="calendly-wrapper">
      <div
        ref={mountRef}
        className="demo-calendar"
        aria-label={label}
      />
    </div>
  );
}
