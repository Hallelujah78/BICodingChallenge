import TableRow from "../TableRow";

const AltName = ({ data }) => {
  const { altSpellings } = data.general;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow
          label="Alternative Names and Abbreviations"
          property={altSpellings}
        />
      </tbody>
    </table>
  );
};
export default AltName;
