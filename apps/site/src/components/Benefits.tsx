import { useEffect, useRef } from "react";
import { pathForLocale, useI18n, type Page } from "../i18n";

const TONES = ["is-feature", "is-sand-a", "is-plain", "is-sand-b", "is-wide"] as const;

function ProductFilm({ label }: { label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
      video.controls = true;
    }
  }, []);

  return (
    <figure className="bento-film">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/product-graph-poster.png"
        aria-label={label}
      >
        <source src="/product-graph-menu.mp4" type="video/mp4" />
      </video>
    </figure>
  );
}

export function Benefits() {
  const { t, locale } = useI18n();
  const { heading, items } = t.home.benefits;
  const paths: Array<{ page: Page; label: string }> = [
    { page: "platform", label: t.home.platform.eyebrow },
    ...t.nav.links,
  ];

  return (
    <section className="bento" aria-labelledby="benefits-title">
      <div className="bento-grid">
        <div className="bento-lead">
          <h2 id="benefits-title">{heading}</h2>
          <a className="site-btn site-btn-primary" href={pathForLocale(locale, "", "demo")}>
            {t.cta.bookDiagnostic}
          </a>
        </div>
        {items.slice(0, 3).map((item, index) => (
          <article className={`bento-cell ${TONES[index]}`} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
        <ProductFilm label={t.home.filmLabel} />
        {items.slice(3).map((item, index) => (
          <article className={`bento-cell ${TONES[index + 3]}`} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <nav className="bento-paths" aria-label={t.nav.menuLabel}>
        {paths.map((item) => (
          <a key={item.page} href={pathForLocale(locale, "", item.page)}>
            {item.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
