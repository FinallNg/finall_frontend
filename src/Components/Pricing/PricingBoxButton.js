import React from 'react'

const PricingBoxButton = ({plan, background}) => {
  return (
    <div className='pricing-box-button'>
      <button><a href='' style={{background}}>{plan}</a></button>
    </div>
  )
}

export default PricingBoxButton