import { useEffect, useRef } from "react";
import { useI18n } from "../i18n";
import { KnowledgeInstrument } from "../lib/knowledgeInstrument.slides";

function MiniSphere({
  stage,
  connections,
}: {
  stage: number;
  connections?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const engine = new KnowledgeInstrument(canvas);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    engine.reduceMotion = reduceMotion;
    engine.debug.surface = "white";
    engine.debug.brightBoost = 1.35;
    engine.debug.showLabels = false;
    engine.debug.cxFrac = 0.5;
    engine.debug.radiusScale = 0.86;
    engine.debug.rotSpeedScale = reduceMotion ? 0 : 0.28;
    engine.debug.overlays = { meteors: false, connections: Boolean(connections), agents: false };
    engine.rebuild(window.innerWidth < 800 ? 480 : 900);

    let raf = 0;
    let visible = true;

    const paint = (now: number) => {
      engine.resize(Math.max(1, host.clientWidth), Math.max(1, host.clientHeight));
      engine.frame(now, { stage });
    };

    const tick = (now: number) => {
      if (visible) paint(now);
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible) paint(performance.now());
    });
    io.observe(host);
    paint(0);
    if (!reduceMotion) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [stage, connections]);

  return (
    <div className="mini-sphere" ref={hostRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}

const NAV = ["Ask Tacit", "Pulse", "Explore", "Knowledge", "My team", "Agents"];

const BOARD_SENTENCES = {
  en: [
    "AI transformation is contingent on human workflows.",
    "It succeeds only when AI is given a defined place within the organization as it actually operates.",
    "Tacit maps that operational reality, so every AI initiative is positioned where it creates measurable value.",
  ],
  es: [
    "La transformación con IA depende de los flujos de trabajo humanos.",
    "Solo tiene éxito cuando la IA ocupa un lugar definido dentro de la organización tal como opera de verdad.",
    "Tacit mapea esa realidad operativa, para que cada iniciativa de IA quede donde crea valor medible.",
  ],
} as const;

function ConsultingBoard() {
  const { t, locale } = useI18n();
  const part = t.home.platform.parts.find((item) => item.id === "consulting");
  const sentences = BOARD_SENTENCES[locale];

  return (
    <div className="app-board">
      <aside>
        <p>Tacit</p>
        <ul>
          {NAV.map((item) => (
            <li key={item} className={item === "Knowledge" ? "is-on" : undefined}>
              {item}
            </li>
          ))}
        </ul>
      </aside>
      <div className="app-board-main">
        <header>
          <h4>Knowledge</h4>
          <span>{part?.marks[0]}</span>
        </header>
        <div className="app-board-cards">
          {part?.marks.map((mark, index) => (
            <article key={mark}>
              <strong>{mark}</strong>
              <p>{sentences[index]}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceStage({ id }: { id: string }) {
  const { locale } = useI18n();

  if (id === "agents") {
    return (
      <figure className="service-stage">
        <MiniSphere stage={1.95} connections />
        <img className="service-stage-card" src="/knowledge-flow.png" alt="" />
      </figure>
    );
  }

  if (id === "apps") {
    return (
      <figure className="service-stage service-stage-apps">
        <img
          src="/deck-living-layer.png"
          alt={
            locale === "es"
              ? "Capa viva de saber hacer, con herramientas conectadas al trabajo"
              : "A living layer of know-how, with tools connected to the work"
          }
          width={976}
          height={432}
        />
      </figure>
    );
  }

  if (id === "development") {
    return (
      <figure className="service-stage service-stage-film">
        <img
          src="/automations-board.png"
          alt={
            locale === "es"
              ? "Pantalla de Automatizaciones con borradores de Pulse, propuestas automáticas, resumen diario y vigilancia de fragilidad"
              : "Automations screen with Pulse copy drafts, automatic proposals, Daily Pulse digest, and Fragility watchdog"
          }
          width={1024}
          height={639}
        />
      </figure>
    );
  }

  return (
    <figure className="service-stage service-stage-board">
      <ConsultingBoard />
    </figure>
  );
}
