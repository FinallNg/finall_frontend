import React from 'react'
import './ContactSupport.css'

const Support = () => {
  return (
    <div className='support-container'>
      <div className= 'support-box'>
        <div className='user-feedback'>
          <span>What do you need help with?</span>
          <form className='user-feed'>
             <div className='user-feed1'>
              <label htmlFor='Full Name' className='feed'>Full Name </label>
              <input type="text" placeholder='Blessing' required= "required" />
            </div>

            <div className='user-feed2'>
              <label htmlFor='Email' className='feed'>Email</label>
              <input type="email" placeholder='enwono@gmail.com' required= "required" />
            </div>

            <div className='user-feed3'>
              <label htmlFor='Help' className='feed'>How do you want us to help you?</label>
              <textarea  type="text" maxLength= "500" placeholder='Type here' required= "required" />
            </div>
          </form>
          
          <button type= "submit">Submit</button>


        </div>
      </div>
    </div>
  )
}

export default Support