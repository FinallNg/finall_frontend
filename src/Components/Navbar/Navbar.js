import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
      <header>
          <div>
              {/* <h2>Finall</h2> */}
              <img src={logo} alt='logo' />
          </div>
  
          <div>
              <ul>
                <li><Link to ='/'><a href="r" className='active'>Home</a></Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/services'>Services</Link></li>
                <li><Link to ='/pricing'>Pricing</Link></li>
                <li><Link to ='/contact'>Contact Us</Link></li> 
              </ul>
  
          </div>
  
          <div>
              <a href='#' className='cta'>Login</a>
              {/* <Link to='/login' className='cta'><a href='w'>Login</a></Link> */}
              {/* <button className='cta'><Link to='/signup'>Get Started</Link></button> */}
              <button className='cta'>Get Started</button>
          </div>
      </header>
    )
  }
  
  export default Navbar