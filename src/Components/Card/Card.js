import React from 'react'
import './Card.css'

const Card = ({icon,heading,detail}) => {
  return (
    <div className='card-wrangler'>
      <div className='card-wrangler-content'>
        <div className='card-wrangler-content-image'>
          <img src = {icon} alt='' />
        </div>
        <div className='card-wrangler-content-span'>
          <span>{heading}</span>
          <span>{detail}</span>
        </div>
        

      </div>    
     </div> 

 
  )
}

export default Card