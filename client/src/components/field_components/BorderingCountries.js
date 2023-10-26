// components
import TableRow from "../TableRow";

const BorderingCountries = ({ data }) => {
  const { borders } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Bordering Countries" property={borders} value="None" />
      </tbody>
    </table>
  );
};
export default BorderingCountries;
