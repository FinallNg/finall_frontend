import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SpendingHabit from './SpendingHabit/SpendingHabit'
import NewsLetter from './NewsLetter/NewsLetter'
import Team from './Team/Team'
import FinancialServices from "../LandingPage/FinancialServices/FinancialServices"
import Services from "../LandingPage/Services/Services"
import FeatureCover from './FeatureCover/FeatureCover'
import Overview from './Overview/Overview'
import Dashboard from '../Dashboard/Dashboard'




function LandingPage() {
  return (
    <div>
        <HeroSection />
        <Services />
        <SpendingHabit />
        <FinancialServices />
        <Team />
        <Overview />
        <FeatureCover />
        <NewsLetter />



    </div>
  )
}

export default LandingPage