import React from 'react'
import './Pricing.css'
import PricingButton1 from './PricingButton1'
import PricingButton2 from './PricingButton2'

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing-box'>
        <div className='pricing-button1'>
          <PricingButton1 />
        </div>
        <div className='price'><h5>Free</h5></div>
        <div className='price-desc'><h6>3 months trail</h6></div>
        <div className='pricing-para1'><p>Free Plan for all users</p></div>
        <div className='pricing-para2'><p>Maximum of 2 accounts</p></div>
        <div className='pricing-button2'>
          <PricingButton2 />
        </div>

      </div>
      <div className='pricing-box'>2</div>
      <div className='pricing-box'>3</div>
    
    </div>
  )
}

export default Pricing