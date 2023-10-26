const Continents = ({ data }) => {
  const { continents } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <tr>
          <td>Continents</td>
          <td>
            {continents?.length > 0
              ? continents.map((continent, index) => {
                  if (continents.length - 1 === index) {
                    return `${continent}`;
                  } else {
                    return `${continent}, `;
                  }
                })
              : "None"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Continents;
