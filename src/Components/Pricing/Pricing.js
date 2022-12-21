import React from "react";
import "./Pricing.css";
import PricingBox from "./PricingBox";
// import PricingButton5 from './PricingButton5'

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-head">
        <h2>choose your plan</h2>
        <p>
          Be the first to know when Finall launches. Early access users will
          recieve an extended free trial and early bird pricing options
        </p>
      </div>
      <div className="pricing-content">
        <PricingBox head="Basic" price="0" price2="0" />
        <PricingBox head="Standard" para="Recomended" price="15" price2="150" />
        <PricingBox head="Premium" price="25" price2="250" />
      </div>
    </div>
  );
};

export default Pricing;
