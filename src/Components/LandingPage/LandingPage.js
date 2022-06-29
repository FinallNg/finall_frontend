import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SpendingHabit from './SpendingHabit/SpendingHabit'
import NewsLetter from './NewsLetter/NewsLetter'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Team from './Team/Team'


function LandingPage() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <SpendingHabit />
        <NewsLetter />
        <Team />
        {/* <Footer /> */}
    </div>
  )
}

export default LandingPage