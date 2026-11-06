import { FounderQuote } from "../components/FounderQuote";
import { useI18n } from "../i18n";
import { usePageMeta } from "../lib/usePageTitle";

export function AboutPage() {
  const { t } = useI18n();
  const meta = t.pages.about;
  const { who, research } = t.home;

  usePageMeta(meta.title, meta.description);

  return (
    <article className="reading">
      <FounderQuote />
      <section>
        <h2>{who.title}</h2>
        <p className="lede">{who.body}</p>
        <p>{who.closer}</p>
      </section>
      <section>
        <h2>{research.title}</h2>
        <p className="lede">{research.body}</p>
      </section>
    </article>
  );
}
