import TableRow from "../TableRow";

const NameOfficial = (info) => {
  const { info: nameOfficial } = info;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Formal Name" property={nameOfficial} />
      </tbody>
    </table>
  );
};
export default NameOfficial;
