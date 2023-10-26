import TableRow from "../TableRow";

const Subregion = ({ data }) => {
  const { subregion } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Subregion" property={subregion} nullValue="None" />
      </tbody>
    </table>
  );
};
export default Subregion;
