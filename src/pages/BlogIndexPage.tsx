import { Link } from "react-router";
import { usePageTitle } from "../lib/usePageTitle";

export function BlogIndexPage() {
  usePageTitle("Blog — Tacit");

  return (
    <section className="site-section" aria-labelledby="blog-title">
      <div className="site-panel reading">
        <p className="kicker">Blog</p>
        <h1 id="blog-title">Notes from the work.</h1>
        <p className="lede">
          Field notes will be published here when there is something measured
          or learned worth keeping. Nothing is up yet.
        </p>
        <p className="lede">
          <Link to="/method">The method</Link> is the story of how scattered
          know-how becomes a structure.
        </p>
      </div>
    </section>
  );
}
