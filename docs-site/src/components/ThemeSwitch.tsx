import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";

type Theme = "light" | "dark";

function readStored(): Theme | null {
  try {
    const stored = localStorage.getItem("starlight-theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    return null;
  }
  return null;
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("starlight-theme", theme);
  } catch {
    /* private mode */
  }
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(() => readStored() ?? "light");

  useEffect(() => {
    const sync = () => {
      const stored = readStored();
      const next = stored ?? (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    sync();
    document.addEventListener("astro:after-swap", sync);
    return () => document.removeEventListener("astro:after-swap", sync);
  }, []);

  function choose(next: Theme) {
    applyTheme(next);
    setTheme(next);
  }

  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      <button
        type="button"
        aria-pressed={theme === "light"}
        aria-label="Light"
        onClick={() => choose("light")}
      >
        <HugeiconsIcon icon={Sun03Icon} size={16} color="currentColor" strokeWidth={1.75} />
      </button>
      <button
        type="button"
        aria-pressed={theme === "dark"}
        aria-label="Dark"
        onClick={() => choose("dark")}
      >
        <HugeiconsIcon icon={Moon02Icon} size={16} color="currentColor" strokeWidth={1.75} />
      </button>
    </div>
  );
}
