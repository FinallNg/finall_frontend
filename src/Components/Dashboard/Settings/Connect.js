import React from 'react'
import './Script'
import Form from './Form'
import Validate from './Validate';
// import { AiOutlineEdit } from 'react-icons/ai'
import 'font-awesome/css/font-awesome.min.css';
import './Connect.css'
import Notify from '../../Notify/Notify'
import Card from '../../../assets/card.png'


const Settings = () => {

  const {handleChange ,values, handleSubmit , errors} = Form(Validate);
  return (
    <div className='accounts__container'>
      <Notify />
      <div  className="modal">
        <div className='modal-content'>
          <span>Delete your Finall Account</span>
          <p>You are about to delete your Finall Account. 
            Please confirm that you understand what this means. 
            Then verify yourself by re-entering your account password.</p>
           <p> <input type = 'checkbox' />I understand that this process is permanent and cannot be reverted.</p>
           <p></p>
          <button>Delete Account</button>
        </div>
      </div>

      
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
            <img src = {Card} alt = '' />
            <span>Profile photo</span>
          </div>
          
          <div className = 'payment'>
            <button>Add new payment</button>
          </div>


         {/* collecting and storing user data in the database */}
          
          <div className = 'user-data'>
            <form className = "user-input" method= "POST" onSubmit= {handleSubmit}>
              <div id = "display_image">
              <input  id = "image_input"  type="file" accept="image/jpg, image/jpeg"  name = 'profile'
              value={values.profile}
              onChange = {handleChange}/>
            <script src = "Script.js"></script>
              </div>

              <div className='first'>
            <label htmlFor='First Name' className='form-label'>First Name </label>
            <input id = 'username' required = "required" type = "text" placeholder = "Example: John"  name = "username"
            value={values.username}
            onChange = {handleChange}/>
            {errors.username && <p>{errors.username}</p>}
            </div>

            <div className='second'>
            <label htmlFor = 'Last Name'  className='form-label'> Last Name </label>
              <input id = 'last' type = 'text' required = "required" placeholder = "Ex:Doe" name = "last" 
              value={values.last}
              onChange = {handleChange}/>
               {errors.last && <p>{errors.last}</p>}
            
            </div>

            <div className='third'>
            <label htmlFor='Sex' className='form-label'>Sex(Optional) </label>
            <select id='gender' name = "gender"
            value={values.gender}
            onChange = {handleChange}>
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
              <option>I'd rather not say</option>
            </select>
            </div>

            <div className='fourth'>
            <label htmlFor = "DOB" className='form-label'>Date of birth(Optional) </label>
            <input type= "date" placeholder='Please enter your Date of birth' name ="birth"
            value={values.birth}
            onChange = {handleChange}/>
            {errors.birth && <p>{errors.birth}</p>}
            </div>

            <div className='fifth'>
            <label htmlFor='Email' className = 'form-label'>Email </label>
            <input id='email' type = 'email' required ="required" placeholder='Ex:johndoe@gmail.com' name="email"
            value={values.email}
            onChange = {handleChange} />
            {errors.email && <p>{errors.email}</p>}
            </div>


            <div className='sixth'>
            <label htmlFor='Phone' className='form-label'>Phone </label>
            <input type="tel" id='phone' placeholder='08012345678' required = "required" name = "phone"
            value={values.phone}
            onChange = {handleChange}/>
            {errors.phone && <p>{errors.phone}</p>}
            </div>
          
            <div className='seventh'>
            <label  htmlFor = 'Password' className='form-label'>Password </label>
            <input id = 'password' type= 'password'  required = "required"  placeholder='Create a strong password' name = "password" 
            value={values.password}
            onChange = {handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            </div>

            <div className='eighth'>
            <label  htmlFor = 'Password' className='form-label'>Confirm Password </label>
            <input id = 'password1' type= 'password' required = "required"  placeholder='Confirm your new password' name="password1" 
            value={values.password1}
            onChange = {handleChange}/>
            {errors.password1 && <p>{errors.password1}</p>}
            </div>

            <div className='nineth'>
            <label htmlFor = 'Account-currency' className='form-label'>Account currency </label>
            <select id ='currency' name = 'currency'
            value={values.currency}
            onChange = {handleChange}>
              <option value='NGN'>NGN</option>
              <option value= 'USD'>USD</option>
              <option value = 'CAD'>CAD</option>
              <option value = 'GBP'>GBP</option>
              <option value = 'AUD'>AUD</option>
            </select>
            </div>

            <div className='confirm'>
            <button action = "submit">Save Changes</button>
            </div>

            <div className='delete'>
              <span onClick={openModal}>Delete account</span>
            </div>
            </form>

          </div>
      </div>
    </div>
  )
}

const openModal = function(){
  document.querySelector('.modal').style.display = "flex";
}

window.addEventListener('click', function(e) {
  let modal = document.querySelector('.modal');
  if(e.target === modal){
    modal.style.display = "none"
  }
})

export default Settings