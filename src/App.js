import React from "react";
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./app.css"
import Home from "./pages/home/Home";
import { Work,Message,Feedback,MailOutline,BusinessCenterOutlined,ReportProblem,EnhancedEncryptionTwoTone, LineStyle, Timeline, TrendingUp, VerifiedUserOutlined} from "@material-ui/icons"

const items = [
  { name: "dashboard", label: "Dashboard", 
  items: [
    { name: "home",  label: "Home", Icon: LineStyle},
    { name: "analytics", label: "Analytics", Icon : Timeline},
    { name: "sales", label: "Sales", Icon : TrendingUp}
  ]
  },
  "divider",
  { name: "quick menu", label: "Quick menu",
  items: [
    { name: "users", label: "Users", Icon: VerifiedUserOutlined},
    { name: "products", label: "Products", Icon : BusinessCenterOutlined},
    { name: "transactions", label: "Transactions", Icon : EnhancedEncryptionTwoTone}
  ]
  },
  "divider",
  { name: "notifications", label: "Notifications",
  items: [
    { name: "mail", label: "Mail", Icon: MailOutline},
    { name: "feedback", label: "Feedback", Icon : Feedback},
    { name: "messages", label: "Messages",Icon: Message}
  ]
  },
  "divider",
  { name: "staff", label: "Staff",
  items: [
    { name: "manage", label: "Manage", Icon: Work},
    { name: "analytics", label: "Analytics",Icon : Timeline},
    { name: "reports", label: "Reports", Icon: ReportProblem}
  ]
  } 
]
class App extends React.Component {
  render(){
    return (
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar items={items} />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;

