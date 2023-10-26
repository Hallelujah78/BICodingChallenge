import TableRow from "../TableRow";

const NameOfficial = ({ data }) => {
  const { nameOfficial } = data.general;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Formal Name" property={nameOfficial} />
      </tbody>
    </table>
  );
};
export default NameOfficial;
