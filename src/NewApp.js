import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./NewApp.css"

import CardsBanks from './Components/Dashboard/CardsBanks/CardsBanks';
import Goals from './Components/Dashboard/Goals/Goals';
import Help from './Components/Dashboard/Help/Help';
import Invoices from './Components/Dashboard/Invoices/Invoices';
import Logout from './Components/Dashboard/Logout/Logout';
import Overview from './Components/Dashboard/Overview/Overview';
import Connect from './Components/Dashboard/Settings/Connect'
import Sidebar from './Components/Dashboard/Sidebar/Sidebar';
import Transactions from './Components/Dashboard/Transactions/Transactions'
import Analytics from "./Components/Dashboard/Analytics/Analytics";
import ConnectBank from "./Components/Dashboard/ConnectBank/ConnectBank";
import ContactSupport from "./Components/Dashboard/Settings/ContactSupport"
import Budgets from "./Components/Dashboard/Budgets/Budgets";
import {Revoice} from "./Components/Dashboard/Invoices/ID-INVOICE/idinvoice";
import Accounts from './Components/Dashboard/Accounts/Accounts';



function NewApp() {
  return (
    <div className="NewApp">
        <BrowserRouter>
        <Sidebar />
        <Routes>
        <Route exact="true"  path='/' element={ <Overview />} />
          <Route exact="true"  path='/overview' element={ <Overview />} />
          <Route exact="true"  path='/transactions' element={ <Transactions/>} />
          <Route exact="true"  path='/cards' element={<CardsBanks />} />
          <Route exact="true"  path='/invoices' element={<Revoice />} />
          <Route exact="true"  path='/goals' element={<Goals />} />
          <Route exact="true"  path='/budgets' element={<Budgets />} />
          <Route exact="true"  path='/accounts' element={<Accounts />} />
          <Route exact="true"  path='/metrics' element={<Analytics />} />
          <Route exact="true"  path='/edit_profile' element={ <Connect />} />
          <Route exact="true"  path='/help' element={<Help />} />
          <Route exact="true"  path='/logout' element={<Logout />} />
          <Route exact="true"  path='/connectbank' element={<ConnectBank/>} />
          <Route exact="true"  path='/contact_support' element={<ContactSupport/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NewApp;
