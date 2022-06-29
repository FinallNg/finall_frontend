import "./FinancialServices.css";
import Finance from "../../../assets-svg/fin-services.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

const FinancialServices = () => {
  return (
    <div className="container">
      <div className="col-left">
        <div className="row-1">
          <h3>Providing Smart Financial Services for Everyone</h3>
        </div>
        <div className="row-2">
          <div className="btn-wrapper">
            <button>Get Started</button>
          </div>
          <a href="/">
            <span>Our Services</span>
            <AiOutlineArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
      <div className="col-right">
        <img src={Finance} alt="financial service"/>
      </div>
    </div>
  );
};

export default FinancialServices;
