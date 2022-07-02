import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SpendingHabit from './SpendingHabit/SpendingHabit'
import NewsLetter from './NewsLetter/NewsLetter'
import Navbar from '../Navbar/Navbar'
import Team from './Team/Team'
import FinancialServices from "../LandingPage/FinancialServices/FinancialServices"
import Services from "../LandingPage/Services/Services"
import Footer from '../Footer/Footer'


function LandingPage() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <SpendingHabit />
        <NewsLetter />
        <Team />
        <Services />
        <FinancialServices />

        <Footer /> 
    </div>
  )
}

export default LandingPage