import React from 'react'
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <div className='AboutUs-header'>
        <h1>About Us</h1>
        <p>Finall</p>
      </div>
      
      <div className='AboutUs-mid' >
        <h2>Financial Technology At Your Finger Tips</h2>
        <p>We are a fintech startup that is building a platform that will let users import financial data from different platforms and create a financial dashboard</p>
      </div>
      
      <div className='AboutUs-low'>
        <h3>Staying Ahead Of The Curve</h3>
        <p>Why FINALL? It is difficult to go a day without reading troubling news on the financial discrepancy, inflation, recession, and other heartbreaking economic turmoil. Uncertainty is pervasive, and it's natural to be concerned. </p>
        <p>This is why we started FINALL to partner with you through the boom times as well as the rough patches to enable you make smart decisions.</p>
        <p>With FINALL, you can manage your finances in one place with ease. How cool is that? And don't worry, your information is safe with us. Let's get started.</p>
      </div>
      
    </div>
  )
}

export default AboutUs