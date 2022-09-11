import "./FinancialServices.css";
import Finance from "../../../assets-svg/fin-services.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

const FinancialServices = () => {
  return (
    <div className="finance-financial-services">
      <div className="finance-container">
        <div className="finance-col-left">
          <div className="finance-row-1">
            <h3>Providing Smart Financial Services for Everyone</h3>
          </div>
          <div className="finance-row-2">
            <div className="finance-btn-wrapper">
              <button><a href="/SignUp">Get Started</a></button>
            </div>
            <a href="/Services">
              <span>Our Services</span>
              <AiOutlineArrowRight className="finance-arrow-icon" />
            </a>
          </div>
        </div>
        <div className="finance-col-right">
          <div className="finance-img-container">
            <img src={Finance} alt="financial service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
