import TableRow from "../TableRow";

const NameNative = ({ data }) => {
  const { nameNative } = data.general;
  return (
    <table className="th-3-col">
      <tbody>
        <tr>
          <th>Official Languages</th>
          <th>Informal Name</th>
          <th>Official Name</th>
        </tr>
        {nameNative?.length > 0 ? (
          nameNative.map((name) => {
            const { iso6391, lang, official, common } = name;
            return (
              <tr key={lang}>
                <td>{lang}</td>
                <td lang={iso6391}>{common}</td>
                <td lang={iso6391}>{official}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>None</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default NameNative;
