import { useEffect, useRef } from "react";
import { DemoCalendar } from "../components/DemoCalendar";
import { useI18n } from "../i18n";
import { usePageTitle } from "../lib/usePageTitle";

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
    <figure className="product-media">
      <video
        ref={videoRef}
        className="product-video"
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

function ServiceVisual({
  id,
  alt,
  pulseAlt,
  filmLabel,
}: {
  id: string;
  alt: string;
  pulseAlt: string;
  filmLabel: string;
}) {
  if (id === "consulting") {
    return (
      <div className="service-gallery">
        <figure className="section-shot">
          <img src="/knowledge-profiles.png" alt={alt} width={1980} height={1106} />
        </figure>
        <figure className="section-shot">
          <img src="/pulse-priorities.png" alt={pulseAlt} width={2950} height={1386} />
        </figure>
      </div>
    );
  }

  if (id === "agents") {
    return (
      <figure className="section-shot service-shot">
        <img src="/knowledge-flow.png" alt={alt} width={1024} height={504} />
      </figure>
    );
  }

  if (id === "loop") {
    return <ProductFilm label={filmLabel} />;
  }

  return (
    <figure className="section-shot service-shot">
      <img src="/knowledge-sop-detail.png" alt={alt} width={1024} height={481} />
    </figure>
  );
}

export function HomePage() {
  const { t } = useI18n();
  const { home } = t;

  usePageTitle(t.meta.title);

  useEffect(() => {
    const nodes = document.querySelectorAll(".chapter");
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-here", entry.isIntersecting);
        }
      },
      { threshold: 0.45 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="hero chapter" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">{home.kicker}</p>
            <h1>{home.headline}</h1>
            <p className="hero-sub">{home.sub}</p>
            <ul className="hero-services">
              {home.how.steps.map((step) => (
                <li key={step.id}>
                  <a href={`#${step.id}`}>
                    <span>{step.n}</span>
                    {step.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="cta-row">
              <a className="site-btn site-btn-primary" href="#demo">
                {t.cta.bookDiagnostic}
              </a>
              <a className="site-btn site-btn-ghost" href="#services">
                {t.cta.seeHow}
              </a>
            </div>
            <p className="hero-tag">{home.tagline}</p>
          </div>
        </div>
      </header>

      <section className="platform" id="platform" aria-labelledby="platform-title">
        <div className="platform-intro chapter">
          <p className="kicker">{home.platform.eyebrow}</p>
          <h2 id="platform-title">{home.platform.title}</h2>
        </div>
        {home.platform.parts.map((part, index) => (
          <article className={`platform-part chapter part-${part.id}`} key={part.id} id={`part-${part.id}`}>
            <p className="platform-index">{String(index + 1).padStart(2, "0")}</p>
            <div className="platform-motion" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h3>{part.name}</h3>
            <p>{part.body}</p>
          </article>
        ))}
      </section>

      <section className="industries chapter" id="industries" aria-labelledby="industries-title">
        <p className="kicker">{home.industries.eyebrow}</p>
        <h2 id="industries-title">{home.industries.title}</h2>
        <ul>
          {home.industries.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="site-section chapter" id="services" aria-labelledby="services-title">
        <div className="site-panel service-intro">
          <p className="kicker">{home.how.eyebrow}</p>
          <h2 id="services-title">{home.how.title}</h2>
          <p className="lede">{home.problem.title}</p>
          <ProductFilm label={home.filmLabel} />
        </div>
      </section>

      {home.how.steps.map((step) => (
        <section
          className="site-section chapter"
          id={step.id}
          key={step.id}
          aria-labelledby={`${step.id}-title`}
        >
          <div className="site-panel service-block">
            <div className="service-copy">
              <p className="service-index">{step.n}</p>
              <p className="kicker">{step.title}</p>
              <h2 id={`${step.id}-title`}>{step.body}</h2>
              <ul className="service-points">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="service-visual">
              <ServiceVisual
                id={step.id}
                alt={step.imageAlt}
                pulseAlt={home.how.imageAlt}
                filmLabel={home.filmLabel}
              />
            </div>
          </div>
        </section>
      ))}

      <section className="site-section chapter" aria-labelledby="problem-title">
        <div className="site-panel">
          <p className="kicker">{home.problem.eyebrow}</p>
          <h2 id="problem-title">{home.problem.title}</h2>
          <p className="lede">{home.problem.body}</p>
          <p className="closer-line">{home.problem.closer}</p>
        </div>
      </section>

      <section className="site-section chapter" id="nosotros" aria-labelledby="who-title">
        <div className="site-panel">
          <p className="kicker">{home.who.eyebrow}</p>
          <h2 id="who-title">{home.who.title}</h2>
          <p className="lede">{home.who.body}</p>
          <p className="closer-line">{home.who.closer}</p>
        </div>
      </section>

      <section className="site-section chapter" id="research" aria-labelledby="research-title">
        <div className="site-panel">
          <p className="kicker">{home.research.eyebrow}</p>
          <h2 id="research-title">{home.research.title}</h2>
          <p className="lede">{home.research.body}</p>
        </div>
      </section>

      <section className="site-section chapter" id="tesis" aria-labelledby="contrast-title">
        <div className="site-panel">
          <p className="kicker">{home.contrast.eyebrow}</p>
          <h2 id="contrast-title">{home.contrast.title}</h2>
          <div className="table-wrap">
            <table className="contrast-table">
              <thead>
                <tr>
                  <th scope="col">{home.contrast.usualPath}</th>
                  <th scope="col">{home.contrast.withTacit}</th>
                </tr>
              </thead>
              <tbody>
                {home.contrast.rows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="site-section close chapter" id="demo" aria-labelledby="close-title">
        <div className="site-panel">
          <h2 id="close-title">{home.close.title}</h2>
          <p className="lede">{home.close.body}</p>
          <DemoCalendar label={t.cta.bookDiagnostic} />
        </div>
      </section>
    </>
  );
}
