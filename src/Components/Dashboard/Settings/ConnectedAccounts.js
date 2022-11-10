import React, { useState } from 'react'
import './ConnectedAccounts.css'
import Bell from "../../../assets/bell.png";
import Bell_2 from "../../../assets/bell-2.png";
import Mail from "../../../assets/mail.png";
import ProfilePic from "../../../assets/profile-pic.png";
import ArrowIcon from "../../../assets/arrow-down.png";
import { Link } from 'react-router-dom';

function ConnectedAccounts() {

  const [banks, SetBanks] = useState([
    {
      id: '1',
      name: "GTBank"
    },
    {
      id: '2',
      name: "First Bank"
    },

  ]);

  function ReuseableHeader() {
    return (
      <>
        <header >
          <div className="header-title">
            <h1>Connected bank accounts</h1>
            <img src={ArrowIcon} alt=""  style={{ width: '30px', height: "30px"}}/>
          </div>
          <div className="header-image">
            <a href="#account">
              <img src={Bell}  alt='' />
            </a>
            <a href="#account">
              <img src={Mail}  alt='' />
            </a>
            <a href="#account">
              <img
                src={ProfilePic}
                alt=''
                className="profile-pic"
              />
            </a>
          </div>
        </header>
      </>
    );
  }

  return (
    <div 
    className='connected_accounts'>
      <ReuseableHeader/>
      <h2>Connected accounts</h2>
      {
        banks.map(bank => (   
          <div className='bank_list' key={bank.id}>
            <p>{bank.name}</p>
            <div className='btn_action_wrapper'>
              <button>Manage</button>
              <button className='remove'>Remove</button>
            </div>
          </div>
        ))
      }

        <div className='btn_create_new'>
          <button>Connect a new account</button>
        </div>
    </div>
  )
}

export default ConnectedAccounts