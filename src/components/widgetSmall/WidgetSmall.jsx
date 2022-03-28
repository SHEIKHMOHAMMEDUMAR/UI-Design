import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import "./widgetSmall.css"
let WidgetSmall = ({items}) => {
    const [item] = useState(items);
  return (
    <div className="widgetS">
        <span className="widgetSTitle">New Join Members</span>
        <ul className="widgetSList">
            {item.map((i)=>(
                <li className="widgetSListItem">
                    <img src={i.img} alt="" className="widgetSImg" />
                    <div className="widgetSUser">
                        <span className="widgetSUsername">{i.name}</span>
                        <span className="widgetSUserTitle">{i.title}</span>
                    </div>
                    <button className="widgetSButton">
                        <Visibility className="widgetSIcon"/> Display
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default WidgetSmall;
