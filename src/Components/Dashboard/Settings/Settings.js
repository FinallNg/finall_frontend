import React, {useState} from 'react'
import './Script'
import { AiOutlineEdit } from 'react-icons/ai'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Settings.css'
import Notify from '../../Notify/Notify'
import Profile from '../../../assets/Ellipse.png'
import Bank from '../../../assets/Bank.png'
import Visa from '../../../assets/visa.png'


const Settings = () => {
  const [selectedDate, setSelectedDate] = useState(null)
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
          
          <div className = 'payment'>
            <button>Add new payment</button>
          </div>
          
          <div className = 'user-data'>
            <form className = "user-input">
            <input  id = 'profile'  type="file" accept="image/jpg, image/jpeg"  className='upload' />
            <script src = "Script.js"></script>
            <label htmlFor='First Name' className='form-label'>First Name
            <input id = 'username' type = "text" placeholder = "Example: John"  className='input1'/>
            </label>
            <label htmlFor = 'Last Name'  className='form-label'> Last Name
              <input id = 'last-name' type = 'text' placeholder = "Enwono" className='input2'></input>
            </label>
            <label htmlFor='Sex' className='form-label'>Sex(Optional)
            <select id='gender' defaultValue={"Female"} className='input3'>
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
              <option>I'd rather not say</option>
            </select>
            </label>
            <label htmlFor = "DOB" className='form-label'>Date of birth(Optional)
            <ReactDatePicker id = 'date' selected={selectedDate}  onChange={date => setSelectedDate(date)}
            dateFormat = 'dd/MM/yyyy'
            isClearable
            showYearDropdown
            className='input4'
            />
            </label>

            <label htmlFor='Email' className = 'form-label'>Email
            <input id='email' type = 'email' placeholder='Ex:johndoe@gmail.com' className='input5'/>
            </label>

            <label htmlFor='Phone' className='form-label'>Phone 
            <input type="number" id='phone' className="input6" placeholder='08012345678' required = "required"/>
            </label>

            <label  htmlFor = 'Password' className='form-label'>Password
            <input id = 'password' type= 'password' className='input6' placeholder='Create a strong password'></input>
            </label>

            <label  htmlFor = 'Password' className='form-label'>Password
            <input id = 'password1' type= 'password' className='input7' placeholder='Confirm your new password'></input>
            </label>

            <label htmlFor = 'Account-currency' className='form-label'>Account currency
            <select id ='currency' defaultValue={"NGN"}>
              <option>NGN</option>
              <option>USD</option>
              <option>CAD</option>
              <option>GBP</option>
              <option>AUD</option>
            </select>
            </label>
            <div className='confirm'>
            <button>Save Changes</button>
            </div>
            
            <div className='delete'>Delete account</div>
            </form>

          </div>
      </div>
    </div>
  )
}

export default Settings