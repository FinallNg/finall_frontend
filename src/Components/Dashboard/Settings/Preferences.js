import React from 'react'
import './Preferences.css'
import Bell from "../../../assets/bell.png";
import Bell_2 from "../../../assets/bell-2.png";
import Mail from "../../../assets/mail.png";
import ProfilePic from "../../../assets/profile-pic.png";
import ArrowIcon from "../../../assets/arrow-down.png";
import Ei_question from "../../../assets/ei_question.png";
import { Link } from 'react-router-dom';


function Preferences() {

    function ReuseableHeader() {
        return (
          <>
            <header>
              <div className="header-title">
                <h1>Preferences</h1>
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
    <div className='preferences'>
        <ReuseableHeader/>
        <h3>Preference settings</h3>

        <div className="notification">
            <h3>Notification</h3>
            <div className="notice_info_wrapper">
                <button className="notice_setting">
                    <img src={Bell_2} alt="notification bell" />
                    <p>Enable desktop notification</p>
                </button>
                <div className="settings_recommendation">
                    <p>We strongly recommend enabling notifications so that you’ll know when important activity happens in your Slack workspace.</p>
                    <div>
                        <img src={Ei_question} alt="bell-icon"/>
                        <Link to= '#'>About Notifications</Link>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        <div className="sidebar_hide">
          <h3 >Side bar</h3>
          <label class="form-control">
            <input type="checkbox" name="checkbox" /> Hide
          </label>
        </div>
        <hr/>
        <div className="themes">
          <h3>Themes</h3> 
          
          <p>Coming Soon!</p>
        </div>
        <div className='btn_save'>
          <button>Save changes</button>
        </div>
    </div>
  )
}

export default Preferences