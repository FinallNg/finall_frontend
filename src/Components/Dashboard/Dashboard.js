import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsBanks from "./CardsBanks/CardsBanks";
import Goals from "./Goals/Goals";
import Help from "./Help/Help";
import Invoices from "./Invoices/Invoices";
import Logout from "./Logout/Logout";
import Overview from "./Overview/Overview";
import Connect from "./Settings/Connect"
import ContactSupport from "./Settings/ContactSupport"
import Sidebar from "./Sidebar/Sidebar";
import Transactions from "./Transactions/Transactions";
import Budgets from './Budgets/Budgets';
import Accounts from './Accounts/Accounts';

const Dashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route exact="true"  path="/overview" element={<Overview />} />
          <Route exact="true"  path="/transactions" element={<Transactions />} />
          <Route exact="true"  path="/cards" element={<CardsBanks />} />
          <Route exact="true"  path="/invoices" element={<Invoices />} />
          <Route exact="true"  path="/goals" element={<Goals />} />
          <Route exact="true"  path="/budgets" element={<Budgets />} />
          <Route exact="true"  path="/accounts" element={<Accounts />} />
          <Route exact="true"  path="/edit_profile" element={<Connect />} />
          <Route exact="true"  path="/contact_support" element={<ContactSupport />} />
          <Route exact="true"  path="/help" element={<Help />} />
          <Route exact="true"  path="/logout" element={<Logout />} />
          <Route exact="true"  path="Overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
