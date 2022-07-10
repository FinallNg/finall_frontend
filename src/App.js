import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import FeatureCover from "./Components/LandingPage/FeatureCover/FeatureCover";
import ContactUs from "./Components/ContactUsPage/ContactUs";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Pricing from "./Components/Pricing/Pricing";
import SignUp from "./Components/SignUp/SignUp";
import AboutUs from "./Components/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Logout from "./Components/Dashboard/Logout/Logout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          {/* <Route exact path="/dashboard" element={<Dashboard/>} />  */}
        </Routes>
        {/* <Logout /> */}
        <Footer />
        {/* <Logout /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
