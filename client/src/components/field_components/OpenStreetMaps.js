// components
import TableRow from "../TableRow";

const OpenStreetMaps = ({ data }) => {
  const { openStreetMaps } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow
          label="Open Street Maps Link"
          property={
            <a
              style={{ textDecoration: "underline", color: "green" }}
              href={openStreetMaps}
            >
              Open Street Maps
            </a>
          }
        />
      </tbody>
    </table>
  );
};
export default OpenStreetMaps;
