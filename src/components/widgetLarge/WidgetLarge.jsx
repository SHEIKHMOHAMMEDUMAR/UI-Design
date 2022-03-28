import { useState } from "react"
import "./widlar.css"
let WidgetLarge = ({items}) => {
  const [item] = useState(items);
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
        {item.map((i)=>(
          <tr className="widgetLTr">
            <td className="widgetLUser">
              <img src={i.img} alt="" className="widgetLImg" />
              <span className="widgetLName">{i.name}</span>
            </td>
            <td className="widgetLDate">{i.date}</td>
            <td className="widgetLAmount">{i.Amount}</td>
            <td className="widgetLStatus">
              <Button type={i.Button} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default WidgetLarge;
