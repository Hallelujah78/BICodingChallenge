// components
import TableElementWithToolTip from "../TableElementWithToolTip";
import TableRow from "../TableRow";

const Timezones = ({ data }) => {
  const { timezones } = data.geography;
  return (
    <table className="table-2-col">
      <tbody>
        <TableRow
          label={
            <TableElementWithToolTip
              isHeading={false}
              headingText="Timezones"
              toolTipText="UTC means Coordinated <br/> Universal Time, and it is<br/> the primary central time <br/>standard by which the <br/>world synchronizes clock <br/>and time, nowadays, which <br/>also is based on time<br/> in Greenwich, London."
            />
          }
          property={timezones}
        />
      </tbody>
    </table>
  );
};
export default Timezones;
