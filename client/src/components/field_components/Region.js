// components
import TableRow from "../TableRow";

const Region = ({ data }) => {
  const { region } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Region" property={region} nullValue="None" />
      </tbody>
    </table>
  );
};
export default Region;
