const CoatOfArms = ({ data }) => {
  const { coatOfArmsAlt, coatOfArmsSvgUrl } = data.general;
  return (
    <table className="table-2-col">
      <tbody>
        <tr>
          <td>Coat of Arms</td>
          <td>
            {coatOfArmsSvgUrl ? (
              <img src={coatOfArmsSvgUrl} alt={coatOfArmsAlt} />
            ) : (
              "None"
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CoatOfArms;
