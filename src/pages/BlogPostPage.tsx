import { Link, useParams } from "react-router";
import { postBySlug, type Post } from "../data/posts";
import { usePageTitle } from "../lib/usePageTitle";

function Article({ post }: { post: Post }) {
  const contents = post.sections.filter((section) => section.level === 2);

  return (
    <article className="essay">
      <nav className="essay-crumb" aria-label="Breadcrumb">
        <Link to="/blog">Blog</Link>
      </nav>
      <header className="essay-header">
        <h1>{post.title}</h1>
        <p className="essay-deck">{post.deck}</p>
        <p className="essay-byline">
          {post.author}
          <span aria-hidden="true"> · </span>
          <time dateTime={post.date}>{post.date}</time>
        </p>
      </header>
      <div className="essay-layout">
        <nav className="essay-toc" aria-label="Contents">
          <p>Contents</p>
          <ol>
            {contents.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.heading}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="essay-body">
          {post.sections.map((section) => {
            const Heading = section.level === 2 ? "h2" : "h3";
            return (
              <section key={section.id} aria-labelledby={section.id}>
                <Heading id={section.id}>{section.heading}</Heading>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = postBySlug(slug);
  usePageTitle(post ? `${post.title} — Tacit` : "Blog — Tacit");

  if (!post) {
    return (
      <section className="site-section">
        <div className="site-panel reading">
          <p className="kicker">
            <Link to="/blog">Blog</Link>
          </p>
          <h1>This note is not published.</h1>
          <p className="lede">
            <Link to="/blog">Back to the blog</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="site-section">
      <div className="site-panel reading">
        <Article post={post} />
      </div>
    </section>
  );
}
