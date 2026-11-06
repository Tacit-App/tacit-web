import { useI18n } from "../i18n";

export function Comparison() {
  const { contrast } = useI18n().t.home;

  return (
    <div className="table-wrap">
      <table className="contrast-table">
        <caption className="sr-only">{contrast.title}</caption>
        <thead>
          <tr>
            <th scope="col">{contrast.usualPath}</th>
            <th scope="col">{contrast.withTacit}</th>
          </tr>
        </thead>
        <tbody>
          {contrast.rows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
