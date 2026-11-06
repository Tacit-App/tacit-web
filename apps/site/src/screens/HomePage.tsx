import { Benefits } from "../components/Benefits";
import { pathForLocale, useI18n } from "../i18n";
import { usePageMeta } from "../lib/usePageTitle";

export function HomePage() {
  const { t, locale } = useI18n();
  const { home } = t;

  usePageMeta(t.meta.title, t.meta.description);

  return (
    <>
      <header className="hero-stage">
        <div className="hero-pin">
          <div className="hero-copy">
            <h1 id="content" tabIndex={-1}>
              {home.headline}
            </h1>
            <p className="hero-sub">{home.sub}</p>
            <div className="cta-row">
              <a className="site-btn site-btn-primary" href={pathForLocale(locale, "", "demo")}>
                {t.cta.bookDiagnostic}
              </a>
              <a className="hero-text-link" href={pathForLocale(locale, "", "services")}>
                {t.cta.seeHow}
              </a>
            </div>
          </div>
        </div>
      </header>
      <Benefits />
    </>
  );
}
