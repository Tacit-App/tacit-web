import { Link } from "react-router";
import { useEffect, useRef } from "react";
import { home } from "../data/home";
import { solutions } from "../data/solutions";
import { DIAGNOSTIC_MAIL } from "../data/site";
import { usePageTitle } from "../lib/usePageTitle";

function ProductFilm() {
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
        aria-label={home.filmLabel}
      >
        <source src="/product-graph-menu.mp4" type="video/mp4" />
      </video>
    </figure>
  );
}

export function HomePage() {
  usePageTitle(home.title);

  return (
    <>
      <header className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">{home.kicker}</p>
            <h1>{home.headline}</h1>
            <p className="hero-sub">{home.sub}</p>
            <div className="cta-row">
              <a className="site-btn site-btn-primary" href={DIAGNOSTIC_MAIL}>
                Book a diagnostic
              </a>
              <a className="site-btn site-btn-ghost" href="#how">
                See how it works
              </a>
            </div>
            <p className="hero-tag">{home.tagline}</p>
          </div>
        </div>
      </header>

      <section className="site-section" aria-label="Product">
        <div className="site-panel">
          <ProductFilm />
        </div>
      </section>

      <section className="site-section" aria-labelledby="problem-title">
        <div className="site-panel">
          <p className="kicker">{home.problem.eyebrow}</p>
          <h2 id="problem-title">{home.problem.title}</h2>
          <p className="lede">{home.problem.body}</p>
          <p className="closer-line">{home.problem.closer}</p>
        </div>
      </section>

      <section className="site-section" aria-labelledby="premise-title">
        <div className="site-panel with-shot">
          <div className="section-split">
            <div>
              <p className="kicker">{home.premise.eyebrow}</p>
              <h2 id="premise-title">{home.premise.title}</h2>
              <p className="lede">{home.premise.body}</p>
            </div>
            <figure className="section-shot">
              <img
                src="/knowledge-profiles.png"
                alt={home.premise.imageAlt}
                width={1980}
                height={1106}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="site-section" id="how" aria-labelledby="how-title">
        <div className="site-panel with-shot">
          <div className="section-split">
            <div>
              <p className="kicker">{home.how.eyebrow}</p>
              <h2 id="how-title">{home.how.title}</h2>
            </div>
            <figure className="section-shot">
              <img
                src="/pulse-priorities.png"
                alt={home.how.imageAlt}
                width={2950}
                height={1386}
              />
            </figure>
          </div>
          <div className="steps">
            {home.how.steps.map((step) => (
              <article className="step" key={step.n}>
                <div className="step-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <div className="solution-row">
            {solutions.map((item) => (
              <Link key={item.slug} to={`/solutions#${item.slug}`}>
                <span className="step-num">{item.stage}</span>
                <strong>{item.name}</strong>
                <span>{item.homeLine}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="who-title">
        <div className="site-panel">
          <p className="kicker">{home.who.eyebrow}</p>
          <h2 id="who-title">{home.who.title}</h2>
          <p className="lede">{home.who.body}</p>
          <p className="closer-line">{home.who.closer}</p>
        </div>
      </section>

      <section className="site-section" aria-labelledby="contrast-title">
        <div className="site-panel">
          <p className="kicker">{home.contrast.eyebrow}</p>
          <h2 id="contrast-title">{home.contrast.title}</h2>
          <div className="table-wrap">
            <table className="contrast-table">
              <thead>
                <tr>
                  <th scope="col">Usual path</th>
                  <th scope="col">With Tacit</th>
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

      <section className="site-section close" aria-labelledby="close-title">
        <div className="site-panel">
          <h2 id="close-title">{home.close.title}</h2>
          <p className="lede">{home.close.body}</p>
          <div className="cta-row">
            <a className="site-btn site-btn-primary" href={DIAGNOSTIC_MAIL}>
              Book a diagnostic
            </a>
          </div>
          <p className="hero-tag">{home.tagline}</p>
        </div>
      </section>
    </>
  );
}
