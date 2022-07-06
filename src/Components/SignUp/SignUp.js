import { useState } from "react";

import signUp from "../../assets-svg/sign_up.svg";
import Google from "../../assets-svg/google.svg";
import Facebook from "../../assets-svg/facebook.svg";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./SignUp.css";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    "Rick Donald",
    "Jane Deveraux",
    "Dave Dwayne",
    "Shane McMahon",
  ];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
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
              <label htmlFor="username">User name</label>
              <input type="text" id="username" placeholder="Rick Donald" />
            </div>
            <div className="form-input-container">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Rick Donald" />
            </div>
            <div className="form-input-container">
              <label htmlFor="company">Company type</label>
              <div className="dropdown">
                <div onClick={toggling} className="select-header">
                  <span>{selectedOption || "Rick Donald"}</span>
                  <span>
                    <MdKeyboardArrowDown className="select-icon" />
                  </span>
                </div>
                {isOpen && (
                  <div className="select-list-container">
                    <div className="select-list">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className="list-item"
                          onClick={onOptionClicked(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="form-input-container">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input type="password" id="password" placeholder="********" />
                <AiFillEyeInvisible className="password-icon" />
              </div>
            </div>
            <div className="terms">
              <p>
                By creating an accout you agree to the{" "}
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
              <button>Sign up</button>
            </div>
          </form>
        </div>

        <div className="alt-login-container">
          <span>Already have an acount? </span>
          <span>
            <a href="/login">Log in</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
