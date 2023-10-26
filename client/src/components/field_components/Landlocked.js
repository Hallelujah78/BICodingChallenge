// components
import TableRow from "../TableRow";

const Landlocked = ({ data }) => {
  const { landlocked } = data.geography;

  return (
    <table className="table-2-col">
      <tbody>
        <TableRow
          label="Landlocked"
          property={landlocked}
          nullValue="No"
          value="Yes"
        />
      </tbody>
    </table>
  );
};
export default Landlocked;
