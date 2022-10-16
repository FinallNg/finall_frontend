import React from 'react'
import './Pricing.css'
import PricingBox from './PricingBox'
import PricingButton5 from './PricingButton5'

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing-head'>
        <h2>choose your plan</h2>
        <p>Be the first to know when Finall launches. Early access users will recieve an extended free trial and early bird pricing options</p>
      </div>
      <div className='pricing-content'>
        <PricingBox head='Basic' price='0' price2='0'/>
        <PricingBox head='Standard' para='Recomended' price='15' price2='150'/>
        <PricingBox head='Premium' price='25' price2='250'/>






        
       {/* <div className='pricing-box'>
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
          
          </div>
          
        </div>*/}
      </div>
    </div>
  )
}

export default Pricing