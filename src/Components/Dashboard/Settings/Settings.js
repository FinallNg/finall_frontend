import React from 'react'
import './Settings.css'
import Notify from '../../Notify/Notify'
import Profile from '../../../assets/Ellipse.png'
import Bank from '../../../assets/Bank.png'
import Visa from '../../../assets/visa.png'

const Settings = () => {
  return (
    <div>
      <Notify />
      <div className = "Accounts">
        <div className="shadow">
        <select selected = "Account">
          <option>Account</option>
          <option>Preferences</option>
          <option>Categories</option>
          <option>Connected bank accounts</option>
          <option>Support</option>
          <option>Terms and Policies</option>
          </select>
          </div>

          {/* collecting user details */}

          <div className = 'settings1'>
            <span>Account Settings</span>
          </div>

          <div className = 'finall-pic'>
            <img src= {Profile} alt ='' />
            <img src = {Bank} alt = '' />
            <img src = {Visa} alt = '' />
            <span>Profile photo</span>
          </div>
          
          <div className = 'user-data'>
            <form className = "user-input">
            <input type="file" accept="image/*" name='filename' upload/>
            </form>

          </div>

        
      </div>
    </div>
  )
}

export default Settings