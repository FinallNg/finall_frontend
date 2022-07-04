import React from 'react'
import HeroSubButton from '../HeroSection/HeroSubButton'
import './SpendingHabit.css'

const SpendingHabit = () => {
  return (
    <div className='spending'>
      <div className='spending-boxes spending-img-box'>
        <div className='spending-img'>
      
        </div>
           
        </div>
        <div className='spending-boxes spending-details'>
          <div className= 'spending-head'>
            <h2>Curb bad spending habits</h2>
          </div>
          <div className='spending-sub'>
            <h3>Let our experts analyze your spending so that you can reach your money goals, easy!</h3>
          </div>
          <div className='business-button'>
            <HeroSubButton />
          </div>
          </div>
      </div>
  )
}

export default SpendingHabit