import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import signUp from "../../assets-svg/sign_up.svg";
import Google from "../../assets-svg/google.svg";
import Facebook from "../../assets-svg/facebook.svg";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

import "./SignUp.css";

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
      <div className="col-1">
        <div className="img-container">
          <img src={signUp} alt="sign_up" />
        </div>
      </div>

      <div className="col-2">
        <div className="form-container">
          <form>
            <div className="signup-options-container">
              <div className="signup-text-container">
                <p>Sign up</p>
              </div>
              <div>
                <div className="google-signup-container">
                  <span>
                    <img src={Google} alt="google-logo" />
                  </span>
                  <span>Google</span>
                </div>
                <div className="facebook-signup-container">
                  <span>
                    <img src={Facebook} alt="facebook-logo" />
                  </span>
                  <span>Facebook</span>
                </div>
              </div>
            </div>

            <div className="divider">
              <p>Or</p>
            </div>
            <div className="form-input-container">
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
            <div className="form-input-container">
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
            <div className="form-input-container">
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
            <div className="form-input-container">
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
            <div className="form-input-container">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={values.showPassword ? "text" : "password"} // changed here
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
            </div>
            <div className="terms">
              <p>
                By creating an account you agree to the{" "}
                <a href className="terms-link">
                  terms of use
                </a>{" "}
                and our{" "}
                <a href className="terms-link">
                  privacy policy
                </a>
              </p>
            </div>
            <div className="btn-container">
              <button onClick={handleSubmit}>Sign up</button>
            </div>
          </form>
        </div>

        <div className="alt-login-container">
          <span>Already have an account? </span>
          <span>
            <a href="/login">Log in</a>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
