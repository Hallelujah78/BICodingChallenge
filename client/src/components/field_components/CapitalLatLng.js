// components
import TableRow from "../TableRow";

const CapitalLatLng = ({ data }) => {
  const { capitalLatlng } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow
          label="Capital Latitude & Longitude"
          property={capitalLatlng}
        />
      </tbody>
    </table>
  );
};
export default CapitalLatLng;
