// components
import TableElementWithToolTip from "../TableElementWithToolTip";

const Currencies = ({ data }) => {
  const { currencies } = data.general;
  return (
    <table className="th-3-col">
      <tbody>
        <tr>
          <th>Currency</th>
          <th>Currency Symbol</th>
          <th>
            <TableElementWithToolTip
              isHeading={true}
              headingText="3-letter code"
              toolTipText="The 3-letter currency code comes <br/> from ISO 4217 which is a standard<br/> published by the International <br/>Organization for Standardization."
            />
          </th>
        </tr>
        {currencies?.length > 0 ? (
          currencies.map((currency) => {
            return (
              <tr key={currency.iso4217}>
                <td>{currency.name}</td>
                <td>{currency.symbol}</td>
                <td>{currency.iso4217}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>None</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Currencies;
