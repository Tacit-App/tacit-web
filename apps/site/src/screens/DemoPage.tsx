import { DemoCalendar } from "../components/DemoCalendar";
import { useI18n } from "../i18n";
import { usePageMeta } from "../lib/usePageTitle";

export function DemoPage() {
  const { t } = useI18n();
  const meta = t.pages.demo;
  const { close } = t.home;

  usePageMeta(meta.title, meta.description);

  return (
    <article className="reading">
      <h1 id="content" tabIndex={-1}>
        {close.title}
      </h1>
      <p className="lede">{close.body}</p>
      <DemoCalendar id="calendly-demo" label={t.cta.bookDiagnostic} />
    </article>
  );
}
