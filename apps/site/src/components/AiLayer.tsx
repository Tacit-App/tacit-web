import { useI18n } from "../i18n";

export function AiLayer() {
  const { judgment } = useI18n().t.field;

  return (
    <ul className="index" role="list">
      {judgment.map((item) => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
