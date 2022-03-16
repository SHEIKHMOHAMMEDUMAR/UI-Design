import "./widgetLarge.css"
const { faker } = require('@faker-js/faker');
export default function WidgetLarge() {
  const Button = ({type}) => {
    return <button className={"widgetLButton " + type}>{type}</button>
  }
  return (
    <div className="widgetL">
      <span className="widgetLTitle">Latest transactions</span>
      <table className="widgetLTable">
        <tr className="widgetLTr">
          <th className="widgetLTh">Customer</th>
          <th className="widgetLTh">Date</th>
          <th className="widgetLTh">Amount</th>
          <th className="widgetLTh s">Status</th>
        </tr>
        <tr className="widgetLTr">
          <td className="widgetLUser">
            <img src={faker.image.avatar()} alt="" className="widgetLImg" />
            <span className="widgetLName">Susan Carol</span>
          </td>
          <td className="widgetLDate">2 Jun 2021</td>
          <td className="widgetLAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLTr">
          <td className="widgetLUser">
            <img src={faker.image.avatar()} alt="" className="widgetLImg" />
            <span className="widgetLName">Susan Carol</span>
          </td>
          <td className="widgetLDate">2 Jun 2021</td>
          <td className="widgetLAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLTr">
          <td className="widgetLUser">
            <img src={faker.image.avatar()} alt="" className="widgetLImg" />
            <span className="widgetLName">Susan Carol</span>
          </td>
          <td className="widgetLDate">2 Jun 2021</td>
          <td className="widgetLAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLTr">
          <td className="widgetLUser">
            <img src={faker.image.avatar()} alt="" className="widgetLImg" />
            <span className="widgetLName">Susan Carol</span>
          </td>
          <td className="widgetLDate">2 Jun 2021</td>
          <td className="widgetLAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
