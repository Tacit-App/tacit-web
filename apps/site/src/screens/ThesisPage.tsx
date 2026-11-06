import { Comparison } from "../components/Comparison";
import { CostContrast } from "../components/CostContrast";
import { useI18n } from "../i18n";
import { usePageMeta } from "../lib/usePageTitle";

export function ThesisPage() {
  const { t } = useI18n();
  const meta = t.pages.thesis;
  const { cost } = t.field;

  usePageMeta(meta.title, meta.description);

  return (
    <article className="reading">
      <h1 id="content" tabIndex={-1}>
        {cost.title}
      </h1>
      <p className="lede">{cost.lead}</p>
      <CostContrast />
      <h2>{t.home.contrast.title}</h2>
      <Comparison />
    </article>
  );
}
