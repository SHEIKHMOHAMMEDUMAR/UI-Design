import "./sidebar.css"
import { Work,Message,Feedback,MailOutline,Report,BusinessCenterOutlined,ReportProblem,EnhancedEncryptionTwoTone, LineStyle, Timeline, TrendingUp, VerifiedUserOutlined} from "@material-ui/icons"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/> Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/> Analytics
                    </li>
                    <li className="sidebarListItem"> 
                        <TrendingUp className="sidebarIcon"/> Sales   
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <VerifiedUserOutlined className="sidebarIcon"/> Users
                    </li>
                    <li className="sidebarListItem">
                        <BusinessCenterOutlined className="sidebarIcon"/> Products
                    </li>
                    <li className="sidebarListItem"> 
                        <EnhancedEncryptionTwoTone className="sidebarIcon"/> Transactions   
                    </li>
                    <li className="sidebarListItem"> 
                        <Report className="sidebarIcon"/> Reports   
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon"/> Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcon"/> Feedback
                    </li>
                    <li className="sidebarListItem"> 
                        <Message className="sidebarIcon"/> Messages   
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/> Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/> Analytics
                    </li>
                    <li className="sidebarListItem"> 
                        <ReportProblem className="sidebarIcon"/> Reports   
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
