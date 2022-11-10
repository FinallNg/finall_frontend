import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import SidebarLogo from "../../../assets-svg/sidebarlogo.svg";
import OverviewIcon from "../../../assets-svg/overviewicon.svg";
import goalsicon from "../../../assets-svg/goalsicon.svg";
import cardicon from "../../../assets-svg/cardicon.svg";
import helpicon from "../../../assets-svg/helpicon.svg";
import invoiceicon from "../../../assets-svg/invoiceicon.svg";
import logouticon from "../../../assets-svg/logouticon.svg";
import settingsicon from "../../../assets-svg/settingsicon.svg";
import transactionicon from "../../../assets-svg/transactionicon.svg";
import metricsicon from "../../../assets-svg/metricsicon.svg";
import budgetsicon from '../../../assets/budget-icon1.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">
        &#9776;
      </label>

      <div className="heading">
        Finall
        <a href='/'>
          <img src={SidebarLogo} alt="Finall Logo" />
        </a>
      </div>

      <div>
        <ul className="menu">
          <li>
            <NavLink exact="true"  activeclassname="active" to="/overview">
              <img src={OverviewIcon} alt="" />  Dashboard{" "}
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" to="/transactions">
              <img src={transactionicon} alt="" /> Transactions
            </NavLink>
          </li>
          <li>
            <NavLink exact="true"  activeclassname="active" to="/cards">
              <img src={cardicon} alt="" /> Cards
            </NavLink>
          </li>
          <li>
            <NavLink exact="true"  activeclassname="active" to="/invoices">
              <img src={invoiceicon} alt="" /> Invoices
            </NavLink>
          </li>
          <li>
            <NavLink exact="true"  activeclassname="active" to="/goals">
              <img src={goalsicon} alt="" /> Goals
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" to="/budgets">
              <img src={budgetsicon} alt="" /> Budgets
            </NavLink>
          </li>
          <li>
            <NavLink exact="true"  activeclassname="active" to="/accounts">
              <img src={cardicon} alt="" /> Accounts
            </NavLink>
          </li>
          <li>
            <NavLink exact="true"  activeclassname="active" to="/metrics">
              <img src={metricsicon} alt="" /> Metrics
            </NavLink>
          </li>
          <li>
            <NavLink exact="true"  activeclassname="active" to="/settings">
              <img src={settingsicon} alt="" /> Settings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar-last">
        <ul className="menu">
          <li>
            <NavLink exact="true"  activeclassname="active" to="/help">
              <img src={helpicon} alt="" /> Help
            </NavLink>
          </li>
          <li>
            <NavLink exact='true' activeclassname="active" to="/logout">
              <img src={logouticon} alt="" /> Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
