import Chart from "../../components/chart/Chart"
import FeatureInfo from "../../components/featureInfo/FeatureInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import Widgetlarge from "../../components/widgetLarge/WidgetLarge"
let Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <Widgetlarge />
          </div>
    </div>
  )
}
export default Home;
