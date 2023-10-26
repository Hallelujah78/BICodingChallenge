const Flag = ({ data }) => {
  const { flagSvg, flagAlt } = data.general;
  return (
    <table className="table-2-col">
      <tbody>
        <tr>
          <td>Flag</td>
          <td>
            <img src={flagSvg} alt={flagAlt} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Flag;
