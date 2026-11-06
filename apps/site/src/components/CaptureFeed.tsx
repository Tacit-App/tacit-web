import { useI18n } from "../i18n";

export function CaptureFeed() {
  const { captures } = useI18n().t.field;

  return (
    <ul className="transcript" role="list">
      {captures.map((item) => (
        <li key={`${item.person}-${item.source}`}>
          <p className="transcript-source">{item.source}</p>
          <p>{item.body}</p>
          <p className="transcript-person">
            {item.person}, {item.role}
          </p>
        </li>
      ))}
    </ul>
  );
}
