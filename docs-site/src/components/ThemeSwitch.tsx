import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("starlight-theme", theme);
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(readTheme());
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
