import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./app.css"
import Home from "./pages/home/Home";
import { Work,Message,Feedback,MailOutline,BusinessCenterOutlined,ReportProblem,EnhancedEncryptionTwoTone, LineStyle, Timeline, TrendingUp, VerifiedUserOutlined} from "@material-ui/icons"
function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { name: "dashboard", label: "Dashboard", 
  items: [
    { name: "home",  label: "Home", Icon: LineStyle, onClick },
    { name: "analytics", label: "Analytics", Icon : Timeline, onClick },
    { name: "sales", label: "Sales", Icon : TrendingUp, onClick }
  ]
  },
  "divider",
  { name: "quick menu", label: "Quick menu",
  items: [
    { name: "users", label: "Users", Icon: VerifiedUserOutlined, onClick },
    { name: "products", label: "Products", Icon : BusinessCenterOutlined, onClick },
    { name: "transactions", label: "Transactions", Icon : EnhancedEncryptionTwoTone, onClick }
  ]
  },
  "divider",
  { name: "notifications", label: "Notifications",
  items: [
    { name: "mail", label: "Mail", Icon: MailOutline, onClick },
    { name: "feedback", label: "Feedback", Icon : Feedback, onClick },
    { name: "messages", label: "Messages",Icon: Message, onClick }
  ]
  },
  "divider",
  { name: "staff", label: "Staff",
  items: [
    { name: "manage", label: "Manage", Icon: Work, onClick },
    { name: "analytics", label: "Analytics",Icon : Timeline, onClick },
    { name: "reports", label: "Reports", Icon: ReportProblem, onClick }
  ]
  } 
]
function App() {
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

export default App;

