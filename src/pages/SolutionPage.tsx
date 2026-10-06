import { Link, useParams } from "react-router";
import { dayZero, feedCaptures, site, testimonials } from "../data/copy";
import { solutionBySlug } from "../data/solutions";
import { DIAGNOSTIC_MAIL } from "../data/site";
import { usePageTitle } from "../lib/usePageTitle";

export function SolutionPage() {
  const { slug } = useParams();
  const solution = solutionBySlug(slug);
  usePageTitle(solution ? `${solution.name} — Tacit` : "Solutions — Tacit");

  if (!solution) {
    return (
      <section className="site-section">
        <div className="site-panel">
          <h1>That offer is not on this site.</h1>
          <p className="lede">
            <Link to="/solutions">Back to solutions</Link>
          </p>
        </div>
      </section>
    );
  }

  const brain = solution.slug === "company-brain";

  return (
    <article className="site-section">
      <div className="site-panel offer-page">
        <p className="kicker">
          <Link to="/solutions">Solutions</Link>
          <span aria-hidden="true"> · </span>
          {solution.stage}
        </p>
        <h1>{solution.title}</h1>
        <dl className="offer-facts">
          <div>
            <dt>The situation</dt>
            <dd>{solution.situation}</dd>
          </div>
          <div>
            <dt>What happens</dt>
            <dd>{solution.happens}</dd>
          </div>
          <div>
            <dt>What you keep</dt>
            <dd>{solution.keep}</dd>
          </div>
        </dl>
        {solution.paragraphs.map((paragraph) => (
          <p className="lede" key={paragraph}>
            {paragraph}
          </p>
        ))}

        {brain ? (
          <>
            <div className="brain-shots">
              <figure className="section-shot">
                <img
                  src="/knowledge-profiles.png"
                  alt="Knowledge Type Map and Cognitive Competency Profile"
                  width={1980}
                  height={1106}
                />
              </figure>
              <figure className="section-shot">
                <img
                  src="/pulse-priorities.png"
                  alt="Pulse priorities: Do Now, Plan, Delegate, and Low Priority"
                  width={2950}
                  height={1386}
                />
              </figure>
            </div>
            <h2>What it sounds like</h2>
            <ul className="capture-list">
              {feedCaptures.slice(0, 3).map((item) => (
                <li key={item.body}>
                  <p>{item.body}</p>
                  <span>
                    {item.person} · {item.role}
                  </span>
                </li>
              ))}
            </ul>
            <h2>{dayZero.title}</h2>
            <p className="lede">{dayZero.lead}</p>
            <ul className="capture-list">
              {dayZero.guide.items.map((item) => (
                <li key={item.title}>
                  <p>{item.title}</p>
                  <span>
                    {item.meta} · {item.tag}
                  </span>
                </li>
              ))}
            </ul>
            <p className="closer-line">{dayZero.guide.footer}</p>
            <h2>From early pilots</h2>
            <ul className="quote-list">
              {testimonials.items.map((item) => (
                <li key={item.name}>
                  <blockquote>
                    <p>{item.quote}</p>
                  </blockquote>
                  <span>
                    {item.name} · {item.role}
                  </span>
                </li>
              ))}
            </ul>
            <p className="lede">{site.integrations}</p>
            <p className="trust-line">
              Reading how a company communicates is the point, and it is the
              risk. What is captured stays inside your company. The boundary is
              part of the diagnostic. Write to{" "}
              <a href="mailto:sales@tacit.guru">sales@tacit.guru</a> before you
              connect a tool.
            </p>
          </>
        ) : null}

        <div className="cta-row">
          <a className="site-btn site-btn-primary" href={DIAGNOSTIC_MAIL}>
            Book a diagnostic
          </a>
          <Link className="site-btn site-btn-ghost" to="/method">
            See the method
          </Link>
        </div>
      </div>
    </article>
  );
}
