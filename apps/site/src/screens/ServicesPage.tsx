import { useEffect } from "react";
import { AiLayer } from "../components/AiLayer";
import { CaptureFeed } from "../components/CaptureFeed";
import { DayZero } from "../components/DayZero";
import { useI18n } from "../i18n";
import { usePageMeta } from "../lib/usePageTitle";

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
      <figure className="section-shot">
        <img src="/knowledge-flow.png" alt={alt} width={1024} height={504} />
      </figure>
    );
  }

  if (id === "loop") {
    return (
      <figure className="section-shot">
        <img src="/product-graph-poster.png" alt={filmLabel} width={1200} height={591} />
      </figure>
    );
  }

  return (
    <figure className="section-shot">
      <img src="/knowledge-sop-detail.png" alt={alt} width={1024} height={481} />
    </figure>
  );
}

export function ServicesPage() {
  const { t, locale } = useI18n();
  const { home } = t;
  const { dayOne } = t.field;
  const meta = t.pages.services;

  usePageMeta(meta.title, meta.description);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <article className="reading">
      <header className="reading-intro">
        <h1 id="content" tabIndex={-1}>
          {home.how.title}
        </h1>
        <p className="lede">{home.problem.body}</p>
        <figure className="section-shot">
          <img
            src="/deck-knowhow-field.png"
            alt={
              locale === "es"
                ? "Campo de cómo ocurre el trabajo: lógica de decisión, flujos, saber tácito y las rutas entre ellos"
                : "Field of how the work happens: decision logic, workflows, tacit know-how, and the paths between them"
            }
            width={2021}
            height={2246}
          />
        </figure>
      </header>
      <ol className="sequence" role="list">
        {home.how.steps.map((step) => (
          <li id={step.id} key={step.id}>
            <h2>
              <span className="sequence-n">{step.n}</span>
              {step.title}
            </h2>
            <p>{step.body}</p>
            {step.id === "loop" ? (
              <AiLayer />
            ) : (
              <ul className="service-points">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            <ServiceVisual
              id={step.id}
              alt={step.imageAlt}
              pulseAlt={home.how.imageAlt}
              filmLabel={home.filmLabel}
            />
            {step.id === "consulting" ? (
              <>
                <CaptureFeed />
                <h3>{dayOne.title}</h3>
                <p>{dayOne.lead}</p>
                <DayZero />
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </article>
  );
}
