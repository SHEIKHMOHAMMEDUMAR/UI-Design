import Chart from "../../components/chart/Chart"
import FeatureInfo from "../../components/featureInfo/FeatureInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import Widgetlarge from "../../components/widgetLarge/WidgetLarge"
const { faker } = require('@faker-js/faker');
const Litems = [
    { img: faker.image.avatar(), name: "Susan Carol", date: "2 Jan 2021", Amount: "$122.00", Button: "Approved"},
    { img: faker.image.avatar(), name: "Umar Carol", date: "2 Jan 2021", Amount: "$122.00", Button: "Approved"},
    { img: faker.image.avatar(), name: "Susan Carol", date: "2 Jan 2021", Amount: "$122.00", Button: "Declined"},
    { img: faker.image.avatar(), name: "Susan Carol", date: "2 Jan 2021", Amount: "$122.00", Button: "Declined"},
]
const Sitems = [
  { img: faker.image.avatar(), name: "Susan Carol", title: "Software Engineer."},
  { img: faker.image.avatar(), name: "Umar Carol", title: "Software Engineer."},
  { img: faker.image.avatar(), name: "Susan Carol", title: "Software Engineer."},
  { img: faker.image.avatar(), name: "Susan Carol", title: "Software Engineer."}
]
const Feitems = [
  { title: "Revenue", cost: "$2,415", rate: +11.4},
  { title: "Sales", cost: "$4,415", rate: +1.4},
  { title: "Cost", cost: "$2,225", rate: +2.45}
]
let Home = () => {
  return (
    <div className="home">
      <FeatureInfo items={Feitems}/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall items={Sitems}/>
        <Widgetlarge items={Litems}/>
      </div>
    </div>
  )
}
export default Home;
