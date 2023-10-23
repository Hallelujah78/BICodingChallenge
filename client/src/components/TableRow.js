const TableRow = ({ label, property, value = null, nullValue = "None" }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>
        {Array.isArray(property) && property?.length > 0
          ? property.map((item, index) => {
              if (index === property.length - 1) {
                return `${item}`;
              }
              return `${item}, `;
            })
          : property
          ? value
            ? value
            : property
          : nullValue}
      </td>
    </tr>
  );
};
export default TableRow;
