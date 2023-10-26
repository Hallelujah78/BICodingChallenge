// components
import TableRow from "../TableRow";

const CapitalCity = ({ data }) => {
  const { capital } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Capital City" property={capital} />
      </tbody>
    </table>
  );
};
export default CapitalCity;
