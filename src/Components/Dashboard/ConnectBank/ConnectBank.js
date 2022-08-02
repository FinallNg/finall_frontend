import React from 'react'
import './ConnectBank.css'
import Dot from '../../../assets/dot.png'
import Bell from '../../../assets/bell.png'
import Open from '../../../assets/Open.png'
import Bar from '../../../assets/bar.png'
import Bars from '../../../assets/bars.png'
import Arrow from '../../../assets/arrow.png'
import Analyse from '../../../assets/analyse.png'
import Money from '../../../assets/money.png'
import Kite from '../../../assets/kite.png'
import Kites from '../../../assets/kites.png'
import Square from '../../../assets/square.png'
import Bulb from '../../../assets/bulb.png'
import Profile from '../../../assets/Ellipse.png'
import Message from '../../../assets/email.png'


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
        <img src = {Bell} alt = ''/>
        <img src = {Dot} alt = '' />
        <img src = {Message} alt = '' />
        <img src = {Profile} alt = '' />
        <img src = {Open} alt = '' />
        <img src = {Bar} alt = '' />
        <img src = {Bars} alt = '' />
        <img src = {Analyse} alt = '' />
        <img src = {Arrow} alt = '' />
        <img src = {Money} alt = '' />
        <img src = {Bulb} alt = '' />
        <img src = {Square} alt = '' />
        <img src = {Kite} alt = '' />
        <img src = {Kites} alt = '' />
        <span>Welcome to</span>
        <span>Finall!</span>
        <span>Get</span>
        <span>Started</span>
        <span>by connecting your</span>
        <span>Bank Accounts</span>
        <span>for</span>
        <span>seamless analysis</span>
      </div>
      <button className="t-button">Connect a bank account</button>
      </div>
  )
}

export default ConnectBank