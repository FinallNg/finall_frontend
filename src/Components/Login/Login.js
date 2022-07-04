import React from 'react';
import "../Login/Login.css";
import Door from "../../assets/door.png";
import {FcGoogle}from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa"
function Login(){ 
  return (
    <div className="Login">
    <form className="form">
      <div className="input-group">
        <h1 className='form-title'>Login</h1>
        <div className='button-class'>
          <FcGoogle className='google-icon'></FcGoogle>
        <button>Google</button>
        <FaFacebookF className='facebook-icon'></FaFacebookF>
        <button>Facebook</button>
        </div>
      <div className="login-line">
        Or
      </div>
        <label htmlFor="username">UserName</label>
        <input type="username" name="username" placeholder="Example@gmail.com" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Create password</label>
        <input type="password" name="password" placeholder="**********" />
      </div>
      <div className="form-actions">
                  <br />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberPassword"
                      name="checkbox"
                    />
                         <label className="form-check-label" for="rememberPassword">
                      Remember me
                    </label>
                    </div>
                    </div>
      <button className="primary">Submit</button>
      <div className='Account'><span>Don’t have account yet?</span><p>New Account</p></div>
      <h4>forgot password?</h4>
    </form>
    <div className='login-left'>
      <div className='login-img'>
      <img src={Door} alt="Door" />
      </div>
    </div>
  </div>
  )
}

export default Login