import React from 'react'
import NewsLetter from '../LandingPage/NewsLetter/NewsLetter';
import Team from '../LandingPage/Team/Team';
import './AboutUs.css' ;
import TeamGrid from '../LandingPage/Team/TeamGrid';
import Revenue from '../../assets/Revenue.png'
import Budget from '../../assets/v_u1 1 (1).png'
import Gain from '../../assets/My password-cuate 1.png'
import vec from '../../assets/Vector 335.png'
import HeroSectionButton from '../LandingPage/HeroSection/HeroSectionButton';

const AboutUs = () => {
  return (
    <div className='about-page'>
      <div className='about-page-container'>
        <div className='about-h1'>
          <h1>Finall Helps you grow your  <span>Financial Health </span> beyond your expectations.</h1>
        </div>
        <div className='about-service'>
          <h2>services we offer</h2> 
        </div>
        <div className='about-container'>
          <div className='about-container-box about-first-box'>
            <div className='about-container-front'>
              <h3>The core objective of Finall is to give  access to all your financial data on one platform without hassle. we make life simple and easy for you. </h3>
            </div>
            <div className='about-container-back'>
              <div className='about-container-img1'>
                <img src={Revenue} alt='revenue image'></img>
              </div>
            </div>
          </div>
          <div className='about-container-box'>
            <div className='about-container-front'>
              <div className='about-container-img2'>
                <img src={Budget} alt='revenue image'></img>
              </div>
            </div>
            <div className='about-container-back'>
              <div className='about-container-back-h'>
              <h3>
              We also help you with your budgeting plan tailored to suit your lifestyle. It keeps track of every financial activity on your accounts and helps you stay within budget and achieve your goals. 
              </h3>
              </div>
            </div>
          </div>
          <div className='about-container-box about-first-box'>
            <div className='about-container-front'>
              <h3 className='front3'>
                Gain easy access to all your financial data in one platform, make better financial decisions.
              </h3>
              <h3 className='front-last'>
                Stay Ahead of the Curve with <span>Finall!</span>
              </h3>
            </div>
          
                
  
            <div className='about-container-back'>
             
              <div className='about-container-img1'>
                <img className='line-image' src={vec} alt='revenue image'></img>
                <img  className='gain-img' src={Gain} alt='revenue image'></img>
                
              </div>
              
            </div> 
            
          </div>

        </div>
        <div className='aboutus-team'>
          <div className='aboutus-team-head'>
              <h2>Our <span>Mission</span></h2>
            </div>
            <div className='aboutus-team-sub'>
              <h3>
                To help people stay ahead of the curve with ease by managing their financial lifestyle.
              </h3>
            </div>


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
        </div>
      </div>
      <div className='newsletter-head-div'>
        <div className='newsletter-head-content'>
          <h2>subscribe to our NewsLetter</h2>
          <p>Subscribe to our newsletter to get weekly and monthly updates on newly added features and better ways to monitor you finances.</p>
        </div>
        <div className='newsletter-head-button'>
          <button><a href=''>get started</a></button>
        </div>
      </div>
      <div className='newsletter-div'>
        <NewsLetter />

      </div>
      


    </div>
  )
}

export default AboutUs