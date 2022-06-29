import React from 'react'
import NewsLetter from '../LandingPage/NewsLetter/NewsLetter'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Team from './Team/Team'
import FinancialServices from "../LandingPage/FinancialServices/FinancialServices"
import Services from "../LandingPage/Services/Services"

function LandingPage() {
  return (
    <div>
        <Navbar />
        <NewsLetter />
        <Team />
        <Services />
        <FinancialServices />
        {/* <Footer /> */}
    </div>
  )
}

export default LandingPage