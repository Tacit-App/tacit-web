import { useI18n } from "../i18n";

function markTacit(heading: string) {
  const word = "Tacit";
  const at = heading.indexOf(word);
  if (at === -1) return heading;

  return (
    <>
      {heading.slice(0, at)}
      <span className="benefits-name">{word}</span>
      {heading.slice(at + word.length)}
    </>
  );
}

export function Benefits() {
  const { t } = useI18n();
  const { heading, items } = t.home.benefits;

  return (
    <section className="benefits chapter" id="benefits" aria-labelledby="benefits-title">
      <h2 id="benefits-title">{markTacit(heading)}</h2>
      <ol className="benefits-list">
        {items.map((item, index) => (
          <li key={item.title}>
            <span className="benefits-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
