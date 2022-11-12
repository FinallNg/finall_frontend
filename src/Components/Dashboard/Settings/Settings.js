import React from 'react'
import './Script'
import { NavLink} from "react-router-dom";
import './Settings.css'
import profileImage from '../../../assets/settings-icons/profile-image.png'
import accountIcon from '../../../assets/settings-icons/acco-icon.png'
import bankIcon from '../../../assets/settings-icons/bank-icon.png'
import cateIcon from '../../../assets/settings-icons/cate-icon.png'
import suppIcon from '../../../assets/settings-icons/supp-icon.png'
import termsIcon from '../../../assets/settings-icons/terms-icon.png'
import prefIcon from '../../../assets/settings-icons/pref-icon.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'

const Settings = () =>{
  return (
    <div className='settings'>
      <div className='nav'>
        <div className='nav-left'>
          <h3>Good Evening, Enowono</h3>
          <p>Welcome back, nice to see you again!</p>
        </div>
        <div className='nav-right'>
          <div className='nav-icons'>
              <FontAwesomeIcon className='icon' icon={regular('bell')} />
              <FontAwesomeIcon className='icon' icon={regular('envelope')} />
          </div>
          <div className='nav-profile-image'>
            <img alt='profile' src={profileImage} />
          </div>
        </div>
      </div>
      <div className='settings-home'>
        <h3>Settings home</h3>
      </div>
      <div className='settings-container'>
        <NavLink className="nav-link" exact="true" to="connect_bank">
          <div className="settings-item">
            <img alt='settings' src={accountIcon} />
            <p>Account</p>
          </div>
        </NavLink>
        <NavLink className="nav-link" exact="true" to="preferences">
          <div className="settings-item">
            <img alt='settings' src={prefIcon} />
            <p>Preferences</p>
          </div>
        </NavLink>
        <NavLink className="nav-link" exact="true" to="support">
          <div className="settings-item">
            <img alt='settings' src={suppIcon} />
            <p>Support</p>
          </div>
        </NavLink>
        <NavLink className="nav-link" exact="true" to="categories">
          <div className="settings-item">
            <img alt='settings' src={cateIcon} />
            <p>Categories</p>
          </div>
        </NavLink>
        <NavLink className="nav-link" exact="true" to="terms-and-policies">
          <div className="settings-item">
            <img alt='settings' src={termsIcon} />
            <p>Terms and Policies</p>
          </div>
        </NavLink>
        <NavLink className="nav-link" exact="true" to="connect">
          <div className="settings-item">
            <img alt='settings' src={bankIcon} />
            <p>Connected bank accounts</p>
          </div> 
        </NavLink>
      </div>
    </div>

    
  )
}



export default Settings