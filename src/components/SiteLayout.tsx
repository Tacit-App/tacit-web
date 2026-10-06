import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { SphereField } from "./SphereField";

export function SiteLayout() {
  const { pathname } = useLocation();
  const onMethod = pathname === "/method";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`site${onMethod ? " is-method" : ""}`}>
      {onMethod ? null : <SphereField />}
      <SiteNav onDark={onMethod} />
      <main className="site-main" id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
