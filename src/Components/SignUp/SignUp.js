import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import signUp from "../../assets-svg/sign_up.svg";
// import Google from "../../assets-svg/google.svg";
// import Facebook from "../../assets-svg/facebook.svg";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: user.username,
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
      password: user.password,
    };

    axios
      .post("https://finall-app.herokuapp.com/api/v1/users/register", newUser)
      .then((res) => {
        console.log(res.data);
        toast.success("Sign up successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Sign up unsuccessful. Please, fill in fields correctly", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="sign-up">
      <div className="img-container">
        <img src={signUp} alt="sign_up" />
      </div>
      <div className="form-extender">
        <div className="form-container">
          <div className="login-content-box">
            <h2 className="login-head">Sign up</h2>
            <div className="button-class">
              <button>
                <a href="/" target="_blank">
                  <FcGoogle className="google-icon"></FcGoogle>Google
                </a>
              </button>
              <button>
                <a href="/" target="_blank">
                  <FaFacebookF className="facebook-icon"></FaFacebookF>Facebook
                </a>
              </button>
            </div>
            <div className="login-line">
              <div></div>
              <span>Or</span>
              <div></div>
            </div>
            <form className="form-container">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="rick_donald"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="input-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstName"
                  placeholder="Rick"
                  value={user.firstName}
                  onChange={handleInput}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastName"
                  placeholder="Donald"
                  value={user.lastName}
                  onChange={handleInput}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Rick Donald"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password"> Create Password</label>
                <input
                  type={values.showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="********"
                  value={user.password}
                  onChange={handleInput}
                />
                {values.showPassword ? (
                  <AiFillEyeInvisible
                    className="password-icon"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  />
                ) : (
                  <MdOutlineVisibility
                    className="password-icon"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  />
                )}
              </div>
            </form>
            <div className="terms">
              <p>
                By creating an account you agree to the{" "}
                <a href="/" target="_blank" className="terms-link">
                  terms of use
                </a>
                and our
                <a href="/" target="_blank" className="terms-link">
                  privacy policy
                </a>
              </p>
            </div>
            <div className="btn-container">
              <button onClick={handleSubmit}>
                <a href="/">Sign up</a>
              </button>
            </div>
            <div className="alt-login-container">
              <p>Already have an account? </p>
              <a href="/login">Log in</a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
