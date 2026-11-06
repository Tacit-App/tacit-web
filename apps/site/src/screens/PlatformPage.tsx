import { useEffect } from "react";
import { LayerStack } from "../components/LayerStack";
import { ServiceStage } from "../components/ServiceDiagrams";
import { useI18n } from "../i18n";
import { usePageMeta } from "../lib/usePageTitle";

export function PlatformPage() {
  const { t } = useI18n();
  const { platform } = t.home;
  const meta = t.pages.platform;

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
          {platform.title}
        </h1>
        <p className="lede">{platform.intro}</p>
        <figure className="reading-diagram">
          <LayerStack label={platform.diagramAlt} />
        </figure>
      </header>
      <ol className="sequence" role="list">
        {platform.parts.map((part, index) => (
          <li id={`part-${part.id}`} key={part.id}>
            <h2>
              <span className="sequence-n">{String(index + 1).padStart(2, "0")}</span>
              {part.name}
            </h2>
            <p>{part.body}</p>
            <ServiceStage id={part.id} />
          </li>
        ))}
      </ol>
    </article>
  );
}
