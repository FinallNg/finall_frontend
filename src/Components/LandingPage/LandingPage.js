import React from 'react'
import NewsLetter from './NewsLetter/NewsLetter'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function LandingPage() {
  return (
    <div>
        <Navbar />
        <NewsLetter />
        {/* <Footer /> */}
    </div>
  )
}

export default LandingPage