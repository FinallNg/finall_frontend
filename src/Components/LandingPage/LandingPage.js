import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SpendingHabit from './SpendingHabit/SpendingHabit'
import NewsLetter from './NewsLetter/NewsLetter'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Team from './Team/Team'
import FinancialServices from "../LandingPage/FinancialServices/FinancialServices"
import Services from "../LandingPage/Services/Services"
// import FeatureCover from './FeatureCover/FeatureCover'


function LandingPage() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Services />
        <SpendingHabit />
        <FinancialServices />
        <Team />
        {/* <FeatureCover/> */}
        <NewsLetter />
        <Footer /> 
    </div>
  )
}

export default LandingPage