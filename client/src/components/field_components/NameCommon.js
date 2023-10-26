import TableRow from "../TableRow";

const NameCommon = ({ data }) => {
  const { nameCommon } = data.general;

  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Informal Name" property={nameCommon} />
      </tbody>
    </table>
  );
};
export default NameCommon;
