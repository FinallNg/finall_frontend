import React from 'react'
import './Pricing.css'
import PricingButton1 from './PricingButton1'
import PricingButton2 from './PricingButton2'
import PricingButton3 from './PricingButton3'
import PricingButton4 from './PricingButton4'
import PricingButton5 from './PricingButton5'

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing-box'>
        <div className='pricing-button1'>
          <PricingButton1 />
        </div>
        <div className='price'><h5>Free</h5></div>
        <div className='price-desc'><h6>3 months trial</h6></div>
        <div className='pricing-para1'><p>Free Plan for all users</p></div>
        <div className='pricing-para2'><p>Maximum of 2 accounts</p></div>
        <div className='pricing-button2'>
          <PricingButton2 />
        </div>

      </div>
      <div className='pricing-box'>
        <PricingButton3 />
        <div className='standard-cost'>
          <h5><span>$15/</span>month</h5>
        </div>
        <div className='price-desc2'>
          <h6>Ideal for individual users</h6>
        </div>
        <div className='price-desc2b'>
          <h6>Everything in Basic</h6>
        </div>
        <div className='standard-para1'>
          <p><span>250GB</span>of asset storage</p>
        </div>
        <div className='standard-para1'>
          <p>Share link password protection</p>
        </div>
        <PricingButton4 />
      </div>
      <div className='pricing-box'>
        <PricingButton5 />
        <div className='standard-cost2'>
          <h5><span>$25/</span>month</h5>
        </div>
        <div className='price-desc'><h6>Small teams with up to 10 users</h6></div>
        <div className='pricing-para1'><p>Everything in standard</p></div>
        <div className='pricing-para1'><p>Share team workspace with upto 10 users</p></div>
        <div className='pricing-para1'><p>Custom storage plans</p></div>
        <div className='pricing-para1'><p>Custom branding</p></div>
        <div className='pricing-button6'>
           <PricingButton2 />
        </div>
        
      </div>
    </div>
  )
}

export default Pricing