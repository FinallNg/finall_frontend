import React from 'react'
import './Script'
import Form from './Form'
import Validate from './Validate';
// import { AiOutlineEdit } from 'react-icons/ai'
import 'font-awesome/css/font-awesome.min.css';
import './Settings.css'
import Notify from '../../Notify/Notify'
import Bank from '../../../assets/Bank.png'
import Visa from '../../../assets/visa.png'


const Settings = () => {

  const {handleChange ,values, handleSubmit , errors} = Form(Validate);
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
            <img src = {Bank} alt = '' />
            <img src = {Visa} alt = '' />
            <span>Profile photo</span>
          </div>
          
          <div className = 'payment'>
            <button>Add new payment</button>
          </div>


         {/* collecting and storing user data in the database */}
          
          <div className = 'user-data'>
            <form className = "user-input" onSubmit= {handleSubmit}>
              <div id = "display_image">
              <input  id = "image_input"  type="file" accept="image/jpg, image/jpeg"  name = 'profile'
              value={values.profile}
              onChange = {handleChange}/>
            <script src = "Script.js"></script>
              </div>

              <div className='first'>
            <label htmlFor='First Name' className='form-label'>First Name
            <input id = 'username' type = "text" placeholder = "Example: John"  name = "username"
            value={values.username}
            onChange = {handleChange}/>
            {errors.username && <p>{errors.username}</p>}
            </label>
            </div>

            <div className='second'>
            <label htmlFor = 'Last Name'  className='form-label'> Last Name
              <input id = 'last' type = 'text' placeholder = "Ex:Doe" name = "last" 
              value={values.last}
              onChange = {handleChange}/>
            </label>
            </div>

            <div className='third'>
            <label htmlFor='Sex' className='form-label'>Sex(Optional)
            <select id='gender' defaultValue={"Female"}  name = "gender"
            value={values.gender}
            onChange = {handleChange}>
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
              <option>I'd rather not say</option>
            </select>
            </label>
            </div>

            <div className='fourth'>
            <label htmlFor = "DOB" className='form-label'>Date of birth(Optional)
            <input type= "date" placeholder='Please enter your Date of birth' name ="birth"
            value={values.birth}
            onChange = {handleChange}/>
            </label>
            </div>

            <div className='fifth'>
            <label htmlFor='Email' className = 'form-label'>Email
            <input id='email' type = 'email' placeholder='Ex:johndoe@gmail.com' name="email"
            value={values.email}
            onChange = {handleChange} />
            {errors.email && <p>{errors.email}</p>}
            </label>
            </div>


            <div className='sixth'>
            <label htmlFor='Phone' className='form-label'>Phone 
            <input type="tel" id='phone' placeholder='08012345678' required = "required" name = "phone"
            value={values.phone}
            onChange = {handleChange}/>
            </label>
            </div>
          
            <div className='seventh'>
            <label  htmlFor = 'Password' className='form-label'>Password
            <input id = 'password' type= 'password'  placeholder='Create a strong password' name = "password" 
            value={values.password}
            onChange = {handleChange}/>
            <i  class="bi bi-eye-slash" id = 'visibility'></i>
            {errors.password && <p>{errors.password}</p>}

            </label>
            </div>

            <div className='eighth'>
            <label  htmlFor = 'Password' className='form-label'>Password
            <input id = 'password1' type= 'password'  placeholder='Confirm your new password' name="password1" 
            value={values.password1}
            onChange = {handleChange}/>
            {errors.password1 && <p>{errors.password1}</p>}

            </label>
            </div>

            <div className='nineth'>
            <label htmlFor = 'Account-currency' className='form-label'>Account currency
            <select id ='currency' defaultValue={"NGN"}  name = 'currency'
            value={values.currency}
            onChange = {handleChange}>
              <option>NGN</option>
              <option>USD</option>
              <option>CAD</option>
              <option>GBP</option>
              <option>AUD</option>
            </select>
            </label>
            </div>

            <div className='confirm'>
            <button action = "submit">Save Changes</button>
            </div>

            <div className='delete'>Delete account</div>
            </form>

          </div>
      </div>
    </div>
  )
}

export default Settings