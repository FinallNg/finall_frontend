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
    <form className="form"
    onSubmit={handleSubmit}
    initialValues={initialState}
    >
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
    </div>
  </div>
  )
}
const initialState = {
  email: "",
  password: ""
};
export default Login