import { ArrowUpward} from "@material-ui/icons"
import "./featureInfo.css"
import { useState } from "react";
let FeatureInfo = ({items}) => {
  const [item] = useState(items);
    return (
    <div className="featured">
        {item.map((i)=>(
            <div className="featuredItem">
            <span className="featuredTitle">{i.title}</span>
            <div className="featuredMoneyConatiner">
                <span className="featuredMoney">{i.cost}</span>
                <span className="featuredMoneyRate">
                    {i.rate} <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
        ))}
    </div>
    )
}
export default FeatureInfo;
