import { useI18n } from "../i18n";

export function DayZero() {
  const { dayOne } = useI18n().t.field;

  return (
    <article className="guide">
      <header className="guide-person">
        <p className="guide-name">{dayOne.name}</p>
        <p>{dayOne.role}</p>
      </header>
      <ul>
        {dayOne.items.map((item) => (
          <li key={item.title}>
            <h4>{item.title}</h4>
            <p className="guide-meta">{item.meta}</p>
            <p>{item.tag}</p>
          </li>
        ))}
      </ul>
      <p className="guide-footer">{dayOne.footer}</p>
    </article>
  );
}
