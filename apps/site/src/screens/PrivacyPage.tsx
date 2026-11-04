import { useEffect } from "react";
import { PRIVACY_EMAIL, PRIVACY_MAIL, privacy } from "../data/privacy";
import { pathForLocale, useI18n } from "../i18n";
import { usePageTitle } from "../lib/usePageTitle";

export function PrivacyPage() {
  const { locale } = useI18n();
  const policy = privacy[locale];

  usePageTitle(policy.metaTitle);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", policy.metaDescription);
  }, [policy.metaDescription]);

  useEffect(() => {
    // The page renders after load, so the browser can't jump to a deep link itself.
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <section className="site-section" id="top">
      <div className="site-panel">
        <p className="essay-crumb">
          <a href={pathForLocale(locale)}>{policy.crumb}</a> / {policy.title}
        </p>
        <header className="essay-header">
          <h1>{policy.title}</h1>
          <p className="essay-deck">{policy.deck}</p>
          <p className="privacy-updated">{policy.updated}</p>
        </header>

        <div className="essay-layout">
          <nav className="essay-toc" aria-label={policy.tocLabel}>
            <p>{policy.tocLabel}</p>
            <ol>
              {policy.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="essay-body privacy-body">
            {policy.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.blocks.map((block, index) => {
                  if (block.h) return <h3 key={index}>{block.h}</h3>;
                  if (block.ul) {
                    return (
                      <ul key={index}>
                        {block.ul.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index}>{block.p}</p>;
                })}
              </section>
            ))}
            <p>
              <a href={PRIVACY_MAIL}>{PRIVACY_EMAIL}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
