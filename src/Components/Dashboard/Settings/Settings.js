import React from 'react'
import Notify from '../../Notify/Notify'

const Settings = () => {
  return (
    <div>
      <Notify />
      <div className = "Accounts">
        <div className='shadow'>
        <select selected = "Account">
          <option>Account</option>
          <option>Preferences</option>
          <option>Categories</option>
          <option>Connected bank accounts</option>
          <option>Support</option>
          <option>Terms and Policies</option>
          </select>
      
        </div>
      </div>
    </div>
  )
}

export default Settings