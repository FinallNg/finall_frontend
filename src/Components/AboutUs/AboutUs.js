import React from 'react'
import NewsLetter from '../LandingPage/NewsLetter/NewsLetter';
import Team from '../LandingPage/Team/Team';
import './AboutUs.css' ;
import TeamGrid from '../LandingPage/Team/TeamGrid';

const AboutUs = () => {
  return (
    <div className='about-page'>
      <div className='about-page-container'>
        <div className='about-h1'>
          <h1>Finall is a fintech platform that allows users <span>import financial data from different</span> platforms to create a financial dashboard.</h1>
        </div>
        <div className='about-container'>
          <div className='about-container-box about-first-box'>
            <div className='about-container-front'>
              <h3>A Financial Dashboard is where you import all your financial data and you get to see all the details of your financial data at a glance. </h3>
              <h3>The objective of Finall is to give you access to all your financial data on one platform with ease.</h3>
            </div>
            <div className='about-container-back'>
              <div className='about-container-img1'>

              </div>
            </div>
          </div>
          <div className='about-content-middle'>
            <h3>We also help you with your budgeting plan tailored to suit your lifestyle. It keeps track of every financial activity on your accounts and helps you stay within budget and achieve your goals.</h3>
          </div>
          <div className='about-container-box'>
            <div className='about-container-front'>
              <div className='about-container-img2'>

              </div>
            </div>
            <div className='about-container-back'>
              <div className='about-container-back-h'>
              <h3>
                Finall is a fintech platform built on the basic concepts of integrity, security, stability and trust. 
              </h3> <br/>
              <h3>
                Be rest assured that your financial data is safe with us.
              </h3>
              </div>
            </div>
          </div>
          <div className='about-container-box about-first-box'>
            <div className='about-container-front'>
              <h3>
                Gain easy access to all your financial data in one platform, make better financial decisions.
              </h3>
              <br/>
              <h3>
                Stay Ahead of the curve with Finall!
              </h3>
            </div>
            <div className='about-container-back'>
              <div className='about-container-img3'>

              </div>
            </div>
          </div>

        </div>
        <div className='aboutus-team'>
          <div className='aboutus-team-head'>
            <h2>Our <span>Team</span></h2>
          </div>
          <div className='aboutus-team-sub'>
            <h3>
              Our team of young and smart experts is motivated by the mission to make your life easy by helping you keep track of your financial transactions to make better decisions.
            </h3>
          </div>
          <Team />
          <TeamGrid />
          <div className='aboutus-team-head'>
            <h2>Our <span>Mission</span></h2>
          </div>
          <div className='aboutus-team-sub'>
            <h3>
              To help people stay ahead of the curve with ease by managing their financial lifestyle.
            </h3>
          </div>
      
        </div>
        
        <NewsLetter />
      </div>
      


    </div>
  )
}

export default AboutUs