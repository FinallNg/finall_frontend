import React from 'react'
import './Support.css'
import Notify from '../../Notify/Notify'
import { NavLink } from 'react-router-dom'
import Feedback from '../../../assets/chat.png'
import Blog from '../../../assets/beats.png'
import Support from '../../../assets/plan.png'
import Data from '../../../assets/details.png'
import Previous from '../../../assets/previous.png'

const BankAccounts = () => {
  return (
    <div className='sp-user'>
      <Notify />
      <div className='arrow'>
        <NavLink className= 'support-links' exact = 'true' to='/settings' >
        <div className='sup'>
            <img alt='back' src={Previous} />
           </div>
             </NavLink>
            <span>Support</span>
          <p>what do you need support with?</p>
      </div>

      <div className='support-containers'>
        <NavLink className= 'sup-link' exact= 'true' to= ''>
          <div className='support-item'>
            <img alt='feedback' src={Feedback} />
            <p>Send Feedback</p>
          </div>
        </NavLink>
        <NavLink className='sup-link' exact= 'true' to= ''>
          <div className='support-item'>
            <img alt='blog' src={Blog} />
            <p>Blog</p>
          </div>
        </NavLink>
        <NavLink className='sup-link' exact= 'true' to= '/settings/contact_support'>
          <div className='support-item'>
            <img alt='support' src={Support} />
            <p>Customer Support</p>
          </div>
        </NavLink>
        <NavLink className='sup-link' exact= 'true' to= ''>
          <div className='support-item'>
            <img alt='data' src={Data} />
            <p>Export financial data</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default BankAccounts