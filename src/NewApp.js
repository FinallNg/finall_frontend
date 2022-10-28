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
import Settings from './Components/Dashboard/Settings/Settings';


function NewApp() {
  return (
    <div className="NewApp">
        <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact   path='/' element={ <Overview />} />
          <Route exact   path='/overview' element={ <Overview />} />
          <Route exact   path='/transactions' element={ <Transactions/>} />
          <Route exact   path='/cards' element={<CardsBanks />} />
          <Route exact   path='/invoices' element={<Revoice />} />
          <Route exact   path='/goals' element={<Goals />} />
          <Route exact   path='/budgets' element={<Budgets />} />
          <Route exact   path='/accounts' element={<Accounts />} />
          <Route exact   path='/metrics' element={<Analytics />} />
          <Route exact   path='/edit_profile' element={ <Connect />} />
          <Route exact   path='/help' element={<Help />} />
          <Route exact   path='/logout' element={<Logout />} />
          <Route exact   path='/connectbank' element={<ConnectBank/>} />
          <Route exact   path='/contact_support' element={<ContactSupport/>} />
          <Route exact   path='/settings' element={ <Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NewApp;
