// components
import TableRow from "../TableRow";

const GoogleMaps = ({ data }) => {
  const { googleMaps } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow
          label="Google Maps Link"
          property={
            <a
              style={{ textDecoration: "underline", color: "green" }}
              href={googleMaps}
            >
              Google Maps
            </a>
          }
        />
      </tbody>
    </table>
  );
};
export default GoogleMaps;
