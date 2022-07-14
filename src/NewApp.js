import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./NewApp.css"

import FeatureCover from "./Components/LandingPage/FeatureCover/FeatureCover";
import ContactUs from "./Components/ContactUsPage/ContactUs";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Pricing from "./Components/Pricing/Pricing";
import SignUp from "./Components/SignUp/SignUp";
import AboutUs from "./Components/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Services from "./Components/Services/Services";

import CardsBanks from './Components/Dashboard/CardsBanks/CardsBanks';
import Goals from './Components/Dashboard/Goals/Goals';
import Help from './Components/Dashboard/Help/Help';
import Invoices from './Components/Dashboard/Invoices/Invoices';
import Logout from './Components/Dashboard/Logout/Logout';
import Overview from './Components/Dashboard/Overview/Overview';
import Settings from './Components/Dashboard/Settings/Settings';
import Sidebar from './Components/Dashboard/Sidebar/Sidebar';
import Transactions from './Components/Dashboard/Transactions/Transactions'


function NewApp() {
  return (
    <div className="NewApp">
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      <BrowserRouter>
        <Sidebar />
        <Routes>
        <Route exact path='/' element={ <Overview />} />
          <Route exact path='/overview' element={ <Overview />} />
          <Route exact path='/transactions' element={ <Transactions/>} />
          <Route exact path='/cards' element={<CardsBanks />} />
          <Route exact path='/invoices' element={<Invoices />} />
          <Route exact path='/goals' element={<Goals />} />
          <Route exact path='/settings' element={ <Settings />} />
          <Route exact path='/help' element={<Help />} />
          <Route exact path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>

      {/* <NewSidebar /> */}
      {/* <Sidebar /> */}
    </div>
  );
}

export default NewApp;
