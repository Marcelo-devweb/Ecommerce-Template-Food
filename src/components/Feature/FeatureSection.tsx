import { LiaShippingFastSolid, LiaMoneyBillWaveSolid, LiaGiftSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const data =[
    {title: "teste", icon: <LiaShippingFastSolid />,},
    {title: "teste", icon: <LiaMoneyBillWaveSolid />,},
    {title: "teste", icon: <LiaGiftSolid />,},
    {title: "teste", icon: <FiPhoneCall />,},
];

const FeatureSection = () => {
    return ( 
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map(el => <FeatureCard key={el.title} title={el.title} icon={el.icon} />)}
            </div>
        </div>
     );
}
 
export default FeatureSection;