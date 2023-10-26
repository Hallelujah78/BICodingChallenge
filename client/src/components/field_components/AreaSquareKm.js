// components
import TableRow from "../TableRow";

const AreaSquareKm = ({ data }) => {
  const { area } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow
          label="Area in Square Kilometres"
          property={area}
          nullValue="None"
        />
      </tbody>
    </table>
  );
};
export default AreaSquareKm;
