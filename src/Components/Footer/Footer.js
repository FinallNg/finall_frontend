import ogo3 from '../../assets/ogo3.png'
import Vector from '../../assets/Vector.png'
import React from 'react'
import './Footer.css';
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn}from "react-icons/fa"
import {FaFacebook}from "react-icons/fa"
import {FaInstagram}from "react-icons/fa"
// import {FaAngleDown}from "react-icons/fa" 
const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
          <div className='footer-logo-container'>
            <div className="footer-image">
              <img src={ogo3} alt="logo"/>
              </div> 
             <p className="fi">FINALL</p>
            <div className='footer-logo-para'>
              <p className="footer-text">A financial startup that is building a platform that will let users import there financial data from different platforms and creat a financial dashboard</p>
            </div>
            <div className='footer-logo-social'>
              <p>
                Follow us on
              </p>
              <div className='footer-icons-box'>
                <div className="footer-icon"> <FaTwitter /> </div>
                <div className="footer-icon"><FaLinkedinIn /> </div>
                <div className="footer-icon"><FaFacebook /> </div>
                <div className="footer-icon"><FaInstagram /> </div>
              </div>
            </div>
               
          </div>
          <div className="footer-pages">
            <div className="footer-pages-box">
              <h4>Pages</h4>
              <a href=''>About</a>
              <a href=''>Services </a>
              <a href=''>Contact Us</a>
              <a href=''>Account</a>
            
            </div>

            <div className="footer-pages-box">
              <h4>Quick Links</h4>
              <a href=''>Privacy Policy</a>
              <a href=''>
                Terms Of Service
              </a>
              <a href=''>
                Credits
              </a>
              <a href=''>
                Security
              </a>
            
            </div>

            <div className="footer-support">
            <div className="footer-pages-box">
              <h4>Pages</h4>
              <a href=''>FAQs</a>
              <a href=''>Help Center </a>
              <a href=''>Accessibility</a>      
            </div>
          </div>
           
        </div>     
             
      </div>
      <div className='footer-copywrite'>
        <p>Copyright 2022 Finall.All right reserved</p>
      </div>

    </footer>
  )
}

export default Footer