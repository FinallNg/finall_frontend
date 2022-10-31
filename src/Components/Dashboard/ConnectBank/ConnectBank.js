import React from 'react'
import './ConnectBank.css'
import Dot from '../../../assets/dot.png'
import Bell from '../../../assets/bell.png'
import Door from '../../../assets/open_door.png'
import Ding from '../../../assets/ding.png'
import Profile from '../../../assets/Ellipse.png'
import Message from '../../../assets/email.png'
import LinkAccount from '../../LinkAccount/LinkAccount'


const ConnectBank = () => {
  return (
    <div className='Banks'>
      <div className='i-left' >
        <div className='space' >
          <span>Good Evening, Enwono</span>
          <span>We are glad to have you here!</span>
        </div>
      </div>

      <div className='i-right'>
        <img src = {Ding} alt = ''/>
        <img src = {Message} alt = '' />
        <img src = {Profile} alt = '' />
        <img src = {Door} alt = '' />
        <span>Welcome to</span>
        <span>Finall!</span>
        <span>Get</span>
        <span>Started</span>
        <span>by connecting your</span>
        <span>Bank Accounts</span>
        <span>for</span>
        <span>seamless analysis</span>
      </div>
      <div>
        <LinkAccount />
      </div>
      </div>
  )
}

export default ConnectBank