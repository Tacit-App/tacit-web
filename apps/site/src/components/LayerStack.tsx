import { useId } from "react";

const W = 108;
const D = 108;
const SCALE = 1.62;
/** Tops sit one plate apart, with about a tenth of each plate overlapping the one below. */
const LAYER_STEP = 97;
const BASE_Y = 520;

/** Screen point for an isometric slab corner. z lifts the plate. */
function point(x: number, y: number, z: number) {
  return {
    x: 188 + (x - y) * Math.cos(Math.PI / 6) * SCALE,
    y: BASE_Y + (x + y) * 0.5 * SCALE - z * SCALE,
  };
}

function iso(x: number, y: number, z: number) {
  const spot = point(x, y, z);
  return `${spot.x.toFixed(1)},${spot.y.toFixed(1)}`;
}

function face(z: number, thick: number, side: "top" | "right" | "front") {
  const bottom = z - thick;
  const points =
    side === "top"
      ? [iso(0, 0, z), iso(W, 0, z), iso(W, D, z), iso(0, D, z)]
      : side === "right"
        ? [iso(W, 0, z), iso(W, D, z), iso(W, D, bottom), iso(W, 0, bottom)]
        : [iso(0, D, z), iso(W, D, z), iso(W, D, bottom), iso(0, D, bottom)];
  return points.join(" ");
}

function Plate({
  z,
  thick,
  className,
  top,
  right,
  front,
  stroke,
}: {
  z: number;
  thick: number;
  className: string;
  top: string;
  right: string;
  front: string;
  stroke: string;
}) {
  return (
    <g className={`stack-layer ${className}`}>
      <polygon points={face(z, thick, "right")} fill={right} stroke={stroke} strokeLinejoin="round" />
      <polygon points={face(z, thick, "front")} fill={front} stroke={stroke} strokeLinejoin="round" />
      <polygon points={face(z, thick, "top")} fill={top} stroke={stroke} strokeLinejoin="round" />
    </g>
  );
}

const CORNERS = [
  [0, 0],
  [W, 0],
  [W, D],
  [0, D],
] as const;

const LAYERS = [
  { name: "AGENTS", z: LAYER_STEP * 3, thick: 12 },
  { name: "TECH", z: LAYER_STEP * 2, thick: 14 },
  { name: "OPERATIONS", z: LAYER_STEP, thick: 16 },
  { name: "CULTURE", z: 0, thick: 59 },
] as const;

export function LayerStack({ label, className }: { label: string; className?: string }) {
  const titleId = useId();

  return (
    <svg
      className={className ? `layer-stack ${className}` : "layer-stack"}
      viewBox="0 0 560 840"
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>{label}</title>
      <g className="stack-guides" fill="none" stroke="rgb(24 35 46 / 18%)" strokeWidth="1.25" strokeDasharray="2.5 5">
        {CORNERS.map(([x, y]) => {
          const from = point(x, y, LAYER_STEP * 3);
          const to = point(x, y, 0);
          return (
            <line
              key={`${x}-${y}`}
              x1={from.x.toFixed(1)}
              y1={from.y.toFixed(1)}
              x2={to.x.toFixed(1)}
              y2={to.y.toFixed(1)}
            />
          );
        })}
      </g>
      <Plate
        className="stack-culture"
        z={0}
        thick={59}
        top="#2dcca0"
        right="#1aaf86"
        front="#129674"
        stroke="#0e7d62"
      />
      <Plate
        className="stack-ops"
        z={LAYER_STEP}
        thick={16}
        top="#1fbf86"
        right="#14a874"
        front="#0e9466"
        stroke="#0c7d56"
      />
      <Plate
        className="stack-tech"
        z={LAYER_STEP * 2}
        thick={14}
        top="#4d6274"
        right="#3e5264"
        front="#34485a"
        stroke="#2c3e4e"
      />
      <Plate
        className="stack-agents"
        z={LAYER_STEP * 3}
        thick={12}
        top="#f7f8fa"
        right="#e7ebef"
        front="#dce2e7"
        stroke="#cfd6dc"
      />
      <g className="stack-labels" fill="#8b98a3" fontFamily="var(--font-sans)" fontSize="15" letterSpacing="0.18em">
        {LAYERS.map((layer) => (
          <text key={layer.name} x="390" y={point(W, D / 2, layer.z - layer.thick / 2).y.toFixed(1)}>
            {layer.name}
          </text>
        ))}
      </g>
    </svg>
  );
}
