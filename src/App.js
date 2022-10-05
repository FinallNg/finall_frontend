import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ContactUs from "./Components/ContactUsPage/ContactUs";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Pricing from "./Components/Pricing/Pricing";
import SignUp from "./Components/SignUp/SignUp";
import AboutUs from "./Components/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Dashboard from "./Components/Dashboard/Dashboard";

// import Logout from "./Components/Dashboard/Logout/Logout"

import Overview from "./Components/Dashboard/Overview/Overview";
import Transactions from "./Components/Dashboard/Transactions/Transactions";
import CardsBanks from "./Components/Dashboard/CardsBanks/CardsBanks";
import Invoices from "./Components/Dashboard/Invoices/Invoices";
import Goals from "./Components/Dashboard/Goals/Goals";
import Budgets from "./Components/Dashboard/Budgets/Budgets"
import Help from "./Components/Dashboard/Help/Help";
import Logout from "./Components/Dashboard/Logout/Logout";
// import Sidebar from "./Components/Dashboard/Sidebar/Sidebar";
import LearnMore from "./Components/LandingPage/LearnMore/LearnMore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Sidebar /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/overview" element={<Overview />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/cards" element={<CardsBanks />} />
          <Route exact path="/invoices" element={<Invoices />} />
          <Route exact path="/goals" element={<Goals />} />
          <Route exact path="/budgets" element={<Budgets />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
        {/* <Logout /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
