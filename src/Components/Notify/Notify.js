import React from 'react'
import './Notify.css'
import Profile from '../../assets/Ellipse.png'
import Message from '../../assets/email.png'
import Ding from '../../assets/ding.png'

const Notify = () => {
  return (
    <div className = 'Notify'>
        <div className='p-right'>
          <div className = "slap">
            <img src={Profile} alt="" />
            <img src={Message} alt="" />
            <img src={Ding} alt="" />
            </div>

          </div>
    </div>
  )
}

export default Notify
