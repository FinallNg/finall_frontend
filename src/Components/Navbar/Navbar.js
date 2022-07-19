import React from 'react'
import './Navbar.css'
import logo from '../../assets/finall.svg'
import { NavLink, Link } from 'react-router-dom'
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
                <li><NavLink exact activeClassName="active" to ='/'>Home</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/about'>About</NavLink></li>
                {/* <li><NavLink exact activeClassName="active" to ='/services'>Services</NavLink></li> */}
                <li><NavLink exact activeClassName="active" to ='/pricing'>Pricing</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/contact'>Contact Us</NavLink></li> 
              </ul>
  
          </div>
  
          <div>
              <Link className='cta' to='/login'> Login</Link>

              <button className='cta'><Link to='/signup'>Get Started</Link></button>
          </div>
      </header>
    )
  }
  
  export default Navbar