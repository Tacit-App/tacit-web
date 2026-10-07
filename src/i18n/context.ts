import { createContext } from "react";
import type { LandingCopy, Locale } from "./types";

export type I18nContextValue = {
  locale: Locale;
  t: LandingCopy;
  setLocale: (locale: Locale) => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
