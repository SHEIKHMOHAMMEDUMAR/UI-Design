import { ArrowUpward, ArrowDownward } from "@material-ui/icons"
import "./featureInfo.css"

let FeatureInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyConatiner">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featureSub">Comapred to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyConatiner">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">
                    -1.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featureSub">Comapred to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyConatiner">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">
                    +2.45 <ArrowUpward className="featuredIcon" />
                </span>
            </div>
            <span className="featureSub">Comapred to last month</span>
        </div>
    </div>
  )
}
export default FeatureInfo;
