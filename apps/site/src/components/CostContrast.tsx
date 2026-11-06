import { useI18n } from "../i18n";

export function CostContrast() {
  const { cost } = useI18n().t.field;

  return (
    <div className="split">
      <section>
        <h2>{cost.withoutTitle}</h2>
        <p>{cost.withoutBody}</p>
      </section>
      <section className="split-with">
        <h2>{cost.withTitle}</h2>
        <p>{cost.withBody}</p>
      </section>
    </div>
  );
}
