import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CardsBanks from './CardsBanks/CardsBanks';
import Goals from './Goals/Goals';
import Help from './Help/Help';
import Invoices from './Invoices/Invoices';
import Logout from './Logout/Logout';
import Overview from './Overview/Overview';
import Settings from './Settings/Settings';
import Sidebar from './Sidebar/Sidebar';
import Transactions from './Transactions/Transactions';
const Dashboard = () => {
  return (
    <div>
        <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={ <Overview />} />
          <Route exact path='/transactions' element={ <Transactions/>} />
          <Route exact path='/cards' element={<CardsBanks />} />
          <Route exact path='/invoices' element={<Invoices />} />
          <Route exact path='/goals' element={<Goals />} />
          <Route exact path='/settings' element={ <Settings />} />
          <Route exact path='/help' element={<Help />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='Overview' element={<Overview />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Dashboard