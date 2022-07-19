import React from 'react'
import './Help.css'
import bell from '../../../assets/bell.png'
import email from '../../../assets/email.png'
import Ellipse from '../../../assets/Ellipse.png'
const Help = () => {
  return (
    <div className='help-container'>
      {/* <h4 className='help-tag'>Good Evening Enwono</h4>
      <p className='help-text1'>Welcome back,nice to see you again</p>

      <div className='help-image'>
      <div className="help-image1"><img src={bell} alt="logo"/></div> 
      <div className="help-image2"><img src={email} alt="logo"/></div> 
      <div className="help-image3"><img src={Ellipse} alt="logo"/></div>
      </div> */}

       <div className='help-box'>
          <div className='help-box1'>
            <h5 className='help-tag2'>Contact Finall Support</h5>
            <p className='help-text2'>How to contact our support<br/> team in case you need any<br/> help</p>
          </div>

          <div className='help-box1'>
            <h5 className='help-tag2'>About Finall</h5>
            <p className='help-text2'>What is Finall,Who is Finall <br/> For features and everything<br/> you need to know</p>
         </div> 
        
          <div className='help-box1'>
            <h5 className='help-tag2'>Bank Connections</h5>
            <p className='help-text2'>List of supported banks and <br/> cards and how to connect <br/> them to your Finall account</p>
          </div>
       </div> 
       <div className='help-box'>
          <div className='help-box1'>
            <h5 className='help-tag2'>Unable to Connect Account</h5>
            <p className='help-text2'>Having difficlties connecting <br/> accounts? See why. <br/></p>
          </div>
          <div className='help-box1'>
            <h5 className='help-tag2'>Finall Account</h5>
            <p className='help-text2'>How to create,delete,import <br/>and export data and more. <br/></p>
          </div>
          <div className='help-box1'>
            <h5 className='help-tag2'>Subscriptions</h5>
            <p className='help-text2'>Finall free and Premium <br/>accounts, and all the goodies. <br/></p>
          </div>
       </div>


           

    </div>
  )
}

export default Help