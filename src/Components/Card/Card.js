import React from 'react'
import './Card.css'

const Card = ({icon,heading,detail}) => {
  return (
    <div className='wrangler'>
      <div className='wrangler-content'>
        <div className='wrangler-content-image'>
          <img src = {icon} alt='' />
        </div>
        <div className='wrangler-content-span'>
          <span>{heading}</span>
          <span>{detail}</span>
        </div>
        

      </div>    
     </div> 

 
  )
}

export default Card