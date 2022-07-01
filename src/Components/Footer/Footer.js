import ogo3 from '../../assets/ogo3.png'
import React from 'react'
import './Footer.css';
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn}from "react-icons/fa"
import {FaFacebook}from "react-icons/fa"
import {FaInstagram}from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
          <div className='footer-logo'>
            <div className="footer-image"><img src={ogo3} alt="logo"/></div> 
             <p className="fi">FINALL</p>
              <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Nunc sodales lacus eu turpis congue,</p> 
          </div>
          <div className="footer-pages">
            <div className="footer-final">
              <h4><a>Other Pages</a></h4>
              <a>About <br/></a>
              <a>Services <br/></a>
              <a>Contact <br/></a>
              <a>Account</a>
               
                
               
            </div>

            <div className="footer-link">
              <h4><a>Quick Links</a></h4>
              <a>Privacy Policy <br/></a>
              <a>Terms of Service <br/></a>
              <a>Credit <br/></a>
              <a>Security</a>
            </div>

            <div className="footer-support">
              <h4><a>Support</a></h4>
              <a>FAQs <br/></a>
              <a>Help center <br/></a>
              <a>Accesibility</a>
              
            </div>
           
          </div>
          
             <p className="footer-text2">Follow us on</p>
          
             <div className="footer-icon1"> <FaTwitter /> </div>
             <div className="footer-icon2"><FaLinkedinIn /> </div>
             <div className="footer-icon3"><FaFacebook /> </div>
             <div className="footer-icon4"><FaInstagram /> </div>
             <hr />

             <p className="footer-text3">Copywright 2022 Finall.All right reserved</p>
             
        </div>

    </footer>
  )
}

export default Footer