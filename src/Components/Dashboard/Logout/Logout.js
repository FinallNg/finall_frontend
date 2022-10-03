import React from "react";
import "./Logout.css";
// import bell from "../../../assets/bell.png";
// import email from "../../../assets/email.png";
// import Ellipse from "../../../assets/Ellipse.png"

const Logout = () => {
  //  localStorage.clear();
  //  window.location.reload();

  return (
    <div className="logout-container">
      {/* <div className='logout-image'>
           <div className="logout-image1"><img src={bell} alt="logo"/></div> 
           <div className="logout-image2"><img src={email} alt="logo"/></div> 
           <div className="logout-image3"><img src={Ellipse} alt="logo"/></div>
         </div> */}

      <div className="logout-box">
        <div className="logout-box1">
          <h4 className="logout-tag">Is this goodbye? Enwono</h4>
          <p className="logout-text">Are you sure you want to log out?</p>
        </div>

        <div className="logout-box4">
          <button className="logout-box2">
            <p className="logout-text2">Log out</p>
          </button>

          <button className="logout-box3">
            <p className="logout-text3">Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
