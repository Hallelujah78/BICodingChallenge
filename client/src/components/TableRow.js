const TableRow = ({ label, property, value = null, nullValue = "None" }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>
        {
          Array.isArray(property) && property?.length > 0
            ? property.map((item, index) => {
                if (index === property.length - 1) {
                  return `${item}`;
                }
                return `${item}, `;
              })
            : property // property is not an array, is it truthy?
            ? value // if property is truthy, is value truthy?
              ? value // value overwrites property, if value truthy, render value
              : property // if value falsy, use property
            : nullValue // if property is not an array and is falsy, render nullValue
        }
      </td>
    </tr>
  );
};
export default TableRow;
