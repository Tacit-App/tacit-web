/**
 * White-ground sphere. Scroll moves it from scattered motion to an ordered graph.
 * The story copy lives on /method, not here.
 */
import { useEffect, useRef } from "react";
import { KnowledgeInstrument } from "../lib/knowledgeInstrument.slides";

type Beat = {
  t: number;
  stage: number;
  rot: number;
  conn: number;
};

const BEATS: Beat[] = [
  { t: 0, stage: 2.05, rot: 0.42, conn: 0.55 },
  { t: 0.4, stage: 3.85, rot: 0.32, conn: 1 },
  { t: 0.72, stage: 2.7, rot: 0.22, conn: 0.6 },
  { t: 1, stage: 2.15, rot: 0.14, conn: 0.3 },
];

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function sampleBeats(progress: number): Beat {
  const p = clamp01(progress);
  if (p <= BEATS[0].t) return { ...BEATS[0] };
  for (let i = 1; i < BEATS.length; i++) {
    const a = BEATS[i - 1];
    const b = BEATS[i];
    if (p <= b.t) {
      const u = (p - a.t) / Math.max(1e-6, b.t - a.t);
      const e = u * u * (3 - 2 * u);
      return {
        t: p,
        stage: lerp(a.stage, b.stage, e),
        rot: lerp(a.rot, b.rot, e),
        conn: lerp(a.conn, b.conn, e),
      };
    }
  }
  return { ...BEATS[BEATS.length - 1] };
}

function scrollProgress() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  return clamp01(window.scrollY / max);
}

function particleBudget() {
  return window.innerWidth < 800 ? 1600 : 3200;
}

export function SphereField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new KnowledgeInstrument(canvas);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    engine.reduceMotion = reduceMotion;
    engine.debug.surface = "white";
    engine.debug.brightBoost = 1.28;
    engine.debug.overlays = { meteors: false, connections: false, agents: false };
    engine.debug.showLabels = false;
    engine.debug.cxFrac = 0.78;
    engine.debug.radiusScale = 1.22;
    engine.rebuild(particleBudget());

    let target = sampleBeats(0);
    let current = { ...target };
    let raf = 0;

    const resize = () => {
      engine.resize(Math.max(1, window.innerWidth), Math.max(1, window.innerHeight));
    };

    const syncFromScroll = () => {
      target = sampleBeats(scrollProgress());
    };

    const tick = (now: number) => {
      const follow = reduceMotion ? 1 : 0.085;
      current.stage = lerp(current.stage, target.stage, follow);
      current.rot = lerp(current.rot, target.rot, follow);
      current.conn = lerp(current.conn, target.conn, follow);

      if (reduceMotion) {
        engine.debug.rotSpeedScale = 0;
        engine.debug.overlays.connections = false;
        engine.frame(now, { stage: 2.12 });
      } else {
        engine.debug.rotSpeedScale = current.rot;
        engine.debug.overlays.connections = current.conn > 0.28;
        engine.frame(now, { stage: current.stage });
      }
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      syncFromScroll();
    };

    resize();
    syncFromScroll();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="sphere-field" aria-hidden="true" />;
}
