import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import "./NewApp.css"

import CardsBanks from './Components/Dashboard/CardsBanks/CardsBanks';
import Goals from './Components/Dashboard/Goals/Goals';
import Help from './Components/Dashboard/Help/Help';
import Invoices from './Components/Dashboard/Invoices/Invoices';
import Logout from './Components/Dashboard/Logout/Logout';
import Overview from './Components/Dashboard/Overview/Overview';
import Settings from './Components/Dashboard/Settings/Settings';
import Sidebar from './Components/Dashboard/Sidebar/Sidebar';
import Transactions from './Components/Dashboard/Transactions/Transactions'
import Analytics from "./Components/Dashboard/Analytics/Analytics";



function NewApp() {
  return (
    <div className="NewApp">
        <BrowserRouter>
        <Sidebar />
        <Routes>
        <Route exact path='/' element={ <Overview />} />
          <Route exact path='/overview' element={ <Overview />} />
          <Route exact path='/transactions' element={ <Transactions/>} />
          <Route exact path='/cards' element={<CardsBanks />} />
          <Route exact path='/invoices' element={<Invoices />} />
          <Route exact path='/goals' element={<Goals />} />
          <Route exact path='/metrics' element={<Analytics />} />
          <Route exact path='/settings' element={ <Settings />} />
          <Route exact path='/help' element={<Help />} />
          <Route exact path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NewApp;
