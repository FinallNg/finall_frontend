import React from 'react';
import "../Login/Login.css";
import Door from "../../assets/door.png";
import {FcGoogle}from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa"
import axios from "axios";
import { useForm } from "react-hook-form";

function Login(props){ 
  // const history = useHistory()
  const { register, formState: { errors } } = useForm();

  function handleSubmit(values, actions) {
    console.log(values);
      axios
      .post("https://finall-app.herokuapp.com/api/v1/users/login", values, {headers:{"Content-Type": "application/json"}})
      .then(res => {
      localStorage.setItem("token", res.data.token);
      values.resetForm();
        // history.push(`/`);
      })
      .catch(err => {
        console.log(err);
        })
        .finally(() => {
          console.log("login sucessful")
        });
    }
  return (
    <div className="Login">
      <div className='login-img'>
        <div>
          <img src={Door} alt="Door" />
        </div>
      </div>
      <div className='login-content'>
        <div className='login-content-box'>
          <h2 className='login-head'>Login</h2>
          <div className='button-class'>
            <button><a href='' target='_blank'><FcGoogle className='google-icon'></FcGoogle>Google</a></button>
            <button><a href='' target='_blank'><FaFacebookF className='facebook-icon'></FaFacebookF>Facebook</a></button>
          </div>
          <div className="login-line">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>
          <form className="form-container" onSubmit={handleSubmit} initialValues={initialState}>
            <div className="input-group">
              <label>Email</label>
               <input type="email" name='email'
              {...register("email",
              { required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              placeholder="Example@gmail.com" />
            </div>
            {errors.email && <p>Please check the Email</p>}
            <div className="input-group">
              <label>Create password</label>
              <input 
              type="password" 
              name='password'
              {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                              })} 
              placeholder="**********" />
            </div>
            {errors.password && <p>Please check the Password</p>}
          <div className="form-actions">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberPassword" name="checkbox"/>
              <label className="form-check-label">
                Remember me
              </label>
            </div>
            <div className='form-password-reset'>
              <a href=''>
                <h4>Forgotten Password?</h4>
              </a>
            </div>
          </div>
        </form>
        <div className='form-login-btn'>
          <button><a href=''> Login</a></button>
        </div>
        <div className='form-new'>
          <p>Don’t have account yet?</p>
          <a href=''>New Account</a>
        </div>










        </div>
      </div>
    {/*
      <form className="form"
        onSubmit={handleSubmit}
        initialValues={initialState}
      >
        <div className="input-group">
          <
          
          
          <label>Email</label>
          <input 
          type="email"  
          name='email'
          {...register("email",
          {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          placeholder="Example@gmail.com" />
        </div>
        {errors.email && <p>Please check the Email</p>}
        <div className="input-group">
          <label>Create password</label>
          <input 
          type="password" 
          name='password'
          {...register("password", {
          required: true,
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                          })} 
          placeholder="**********" />
        </div>
        {errors.password && <p>Please check the Password</p>}
        <div className="form-actions">
                    <br />
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberPassword"
                        name="checkbox"
                      />
                          <label className="form-check-label">
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
         </div> */}
    </div>
  
  )
}
const initialState = {
  email: "",
  password: ""
};
export default Login