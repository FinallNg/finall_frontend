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
import ConnectBank from './ConnectBank/ConnectBank'

const Dashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route exact  path="/overview" element={<Overview />} />
          <Route exact   path="/transactions" element={<Transactions />} />
          <Route exact  path="/cards" element={<CardsBanks />} />
          <Route exact   path="/invoices" element={<Invoices />} />
          <Route exact   path="/goals" element={<Goals />} />
          <Route exact   path="/budgets" element={<Budgets />} />
          <Route exact  path="/accounts" element={<Accounts />} />
          <Route exact  path="/edit_profile" element={<Connect />} />
          <Route exact   path="/contact_support" element={<ContactSupport />} />
          <Route exact   path="/connect" element={<ConnectBank />} />
          <Route exact  path="/help" element={<Help />} />
          <Route exact   path="/logout" element={<Logout />} />
          <Route exact   path="/overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
