import TableRow from "../TableRow";

const NameCommon = (info) => {
  const { info: nameCommon } = info;
  console.log(`hi, this is ${nameCommon} in NameCommon`);
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow label="Informal Name" property={nameCommon} />
      </tbody>
    </table>
  );
};
export default NameCommon;
