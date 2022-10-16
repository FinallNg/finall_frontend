import React from 'react'
import './HeroSection.css'
import HeroSectionButton from './HeroSectionButton'

const HeroSection = () => {
  return (
    <section className='section-hero'>
      
      <div className='hero-container'>
        <div className='boxes-container'> 
          <div className='hero-boxes hero-details'>
            <div className='hero-h1'>
              <h1>
                Stay In Control Of  Your <span>Finances</span> with Finall
              </h1>
            </div>
            <div className='hero-p'>
              <p>
                Get the app that lets you visualize all your accounts in one place, know how much money you have left until next payday, save more, and make a budget for your important needs.
              </p>
            </div>
              
            <div className='hero-button'>
              <HeroSectionButton />
            </div>
          </div>
        
          <div className='hero-boxes hero-img'>
            
          </div>
        </div>


        <div className='business'>
          <div className='business-boxes business-img'>
          
          </div>
          <div className='business-boxes business-details'>
            <div className= 'business-head'>
              <h2>Reach your savings goals</h2>
            </div>
            <div className='business-sub'>
              <h3>Continue to achieve savings milestones with FINALL </h3>
            </div>
            <div className='business-button'>
            <HeroSectionButton />
            </div>
          </div>
        </div>
        <div className='goals'>
          <div className='goal-boxes goal-img'>
        
          </div>
          <div className='goal-boxes goal-details'>
            <div className= 'goal-head'>
              
              <h2>Analyze your <span>business transactions</span> seamlessly</h2>
            </div>
            <div className='goal-sub'>
              
              <h3>Your financial data from anywhere around the world</h3>
            </div>
            <div className='business-button'>
            <HeroSectionButton />
            </div>
          </div>
        </ div>

        </div>
    
      
      
      
    </section>
  )
}

export default HeroSection