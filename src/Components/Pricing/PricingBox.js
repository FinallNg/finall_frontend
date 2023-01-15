// import { color } from "@chakra-ui/react";
import React from "react";
import PricingBoxButton from "./PricingBoxButton";
import { FaCheck } from "react-icons/fa";

const PricingBox = ({ head, para, price, price2 }) => {
  return (
    <div className="pricing-box">
      <div className="pricing-box-content">
        <div className="pricing-box-head">
          <h3>{head}</h3>
          <p>{para}</p>
        </div>
        <div className="pricing-box-price">
          <span>${price}</span>
          <h6>/month</h6>
        </div>
        <div className="pricing-box-para">
          <p>Billed anually for ${price2}</p>
        </div>
        <div className="pricing-box-details">
          <ul>
            <a href="/">
              <li>
                <FaCheck className="price-detail-icon" />
                <p>Ridiculus velit mattis</p>
              </li>
            </a>
            <a href="/">
              <li>
                <FaCheck className="price-detail-icon" />
                <p>Vel molestie risus lectusino</p>
              </li>
            </a>
            <a href="/">
              <li>
                <FaCheck className="price-detail-icon" />
                <p>Sapien risusfactor</p>
              </li>
            </a>
            <a href="/">
              <li>
                <FaCheck className="price-detail-icon" />
                <p>Lectus nisl sit auctorgravy</p>
              </li>
            </a>
            <a href="/">
              <li>
                <FaCheck className="price-detail-icon" />
                <p>Ridiculus velit mattis.</p>
              </li>
            </a>
          </ul>
        </div>

        <PricingBoxButton plan="Choose plan" />
      </div>
    </div>
  );
};

export default PricingBox;
