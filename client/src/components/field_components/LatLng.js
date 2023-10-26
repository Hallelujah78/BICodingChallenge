//components
import TableRow from "../TableRow";

const LatLng = ({ data }) => {
  const { latlng } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Latitude & Longitude" property={latlng} />
      </tbody>
    </table>
  );
};
export default LatLng;
