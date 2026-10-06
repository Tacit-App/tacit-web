import { useId } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { solutions, type SolutionSlug } from "../data/solutions";
import { usePageTitle } from "../lib/usePageTitle";

function slugFromHash(hash: string): SolutionSlug {
  const id = hash.replace("#", "");
  const match = solutions.find((item) => item.slug === id);
  return match?.slug ?? solutions[0].slug;
}

export function SolutionsPage() {
  usePageTitle("Solutions — Tacit");
  const { hash } = useLocation();
  const navigate = useNavigate();
  const slug = slugFromHash(hash);
  const selected = solutions.find((item) => item.slug === slug) ?? solutions[0];
  const baseId = useId();

  const select = (next: SolutionSlug) => {
    navigate({ hash: next }, { replace: true, preventScrollReset: true });
  };

  return (
    <section className="site-section" aria-labelledby="solutions-title">
      <div className="site-panel">
        <p className="kicker">Solutions</p>
        <h1 id="solutions-title">Four ways in. One path.</h1>
        <p className="lede">
          Map how the company really works, change it with the team, leave a
          company brain, then let agents carry that judgment.
        </p>
        <div
          className="offer-tabs"
          role="tablist"
          aria-label="Solutions"
          onKeyDown={(event) => {
            if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
            event.preventDefault();
            const index = solutions.findIndex((item) => item.slug === selected.slug);
            const step = event.key === "ArrowRight" ? 1 : -1;
            const next = solutions[(index + step + solutions.length) % solutions.length];
            select(next.slug);
            document.getElementById(`${baseId}-tab-${next.slug}`)?.focus();
          }}
        >
          {solutions.map((item) => {
            const active = item.slug === selected.slug;
            return (
              <button
                key={item.slug}
                id={`${baseId}-tab-${item.slug}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`${baseId}-panel`}
                tabIndex={active ? 0 : -1}
                className={active ? "is-active" : undefined}
                onClick={() => select(item.slug)}
              >
                <span>{item.stage}</span>
                {item.name}
              </button>
            );
          })}
        </div>
        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${selected.slug}`}
          tabIndex={-1}
          className="offer-panel"
        >
          <p className="step-num">{selected.stage}</p>
          <h2>{selected.title}</h2>
          <dl className="offer-facts">
            <div>
              <dt>The situation</dt>
              <dd>{selected.situation}</dd>
            </div>
            <div>
              <dt>What happens</dt>
              <dd>{selected.happens}</dd>
            </div>
            <div>
              <dt>What you keep</dt>
              <dd>{selected.keep}</dd>
            </div>
          </dl>
          <Link className="site-btn site-btn-primary" to={`/solutions/${selected.slug}`}>
            Read {selected.name}
          </Link>
        </div>
      </div>
    </section>
  );
}
