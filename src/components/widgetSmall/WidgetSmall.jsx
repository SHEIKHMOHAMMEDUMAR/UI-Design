import { Visibility } from "@material-ui/icons";
import "./widgetSmall.css"
const { faker } = require('@faker-js/faker');
let WidgetSmall = () => {
  return (
    <div className="widgetS">
        <span className="widgetSTitle">New Join Members</span>
        <ul className="widgetSList">
            <li className="widgetSListItem">
                <img src={faker.image.avatar()} alt="" className="widgetSImg" />
                <div className="widgetSUser">
                    <span className="widgetSUsername">Alan Solly</span>
                    <span className="widgetSUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Display
                </button>
            </li>
            <li className="widgetSListItem">
                <img src={faker.image.avatar()} alt="" className="widgetSImg" />
                <div className="widgetSUser">
                    <span className="widgetSUsername">Alan Solly</span>
                    <span className="widgetSUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Display
                </button>
            </li>
            <li className="widgetSListItem">
                <img src={faker.image.avatar()} alt="" className="widgetSImg" />
                <div className="widgetSUser">
                    <span className="widgetSUsername">Alan Solly</span>
                    <span className="widgetSUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Display
                </button>
            </li>
            <li className="widgetSListItem">
                <img src={faker.image.avatar()} alt="" className="widgetSImg" />
                <div className="widgetSUser">
                    <span className="widgetSUsername">Alan Solly</span>
                    <span className="widgetSUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Display
                </button>
            </li>
            <li className="widgetSListItem">
                <img src={faker.image.avatar()} alt="" className="widgetSImg" />
                <div className="widgetSUser">
                    <span className="widgetSUsername">Alan Solly</span>
                    <span className="widgetSUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Display
                </button>
            </li>
        </ul>
    </div>
  )
}
export default WidgetSmall;
