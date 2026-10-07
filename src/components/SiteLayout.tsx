import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { SphereField } from "./SphereField";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <SphereField />
      <SiteNav />
      <main className="site-main" id="main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
