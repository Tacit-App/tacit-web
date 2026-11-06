import type { ReactNode } from "react";
import type { Page } from "../i18n";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { SphereField } from "./SphereField";

export function SiteLayout({
  page,
  children,
}: {
  page: Page;
  children: ReactNode;
}) {
  return (
    <div className={`site${page === "thesis" ? " is-thesis" : ""}`}>
      {page === "home" ? <SphereField /> : null}
      <SiteNav page={page} />
      <main className="site-main" id="main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
