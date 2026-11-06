import { useI18n } from "../i18n";

export function FounderQuote() {
  const { founder } = useI18n().t.field;

  return (
    <figure className="founder">
      <blockquote>
        <h1 id="content" tabIndex={-1}>
          {founder.quote}
        </h1>
      </blockquote>
      <figcaption>
        {founder.name}
        <span>{founder.role}</span>
      </figcaption>
    </figure>
  );
}
