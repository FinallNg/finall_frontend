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
              <label htmlFor='Full Name' className='feed'>Full Name</label>
              <input type="text" placeholder='Example:John Doe' required= "required" />
            </div>

            <div className='user-feed2'>
              <label htmlFor='Email' className='feed'>Email</label>
              <input type="email" placeholder='Example:enwono@gmail.com' required= "required" />
            </div>

            <div className='user-feed3'>
              <label htmlFor='Help' className='feed'>How do you want us to help you?</label>
              <input type="text" maxLength={1000} placeholder='Type here' required= "required" />
            </div>


            <button type= "submit">Submit</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Support