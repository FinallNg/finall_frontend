import React from 'react'
import NewsLetter from './NewsLetter/NewsLetter'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Team from './Team/Team'

function LandingPage() {
  return (
    <div>
        <Navbar />
        <NewsLetter />
        <Team />
        {/* <Footer /> */}
    </div>
  )
}

export default LandingPage