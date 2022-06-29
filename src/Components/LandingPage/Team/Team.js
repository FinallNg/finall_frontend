import React from "react";
import "../Team/Team.css";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img10 from "../../../assets/img10.png";
import img9 from "../../../assets/img9.jpg"

function Team() {
  return (
    <>
      <div className="team">
        <h1>Our Team</h1>
        <p>
          We have gathered excellent minds capable of delivering our services to
          you
        </p>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={img1} className="card-img" alt="Chris Okorie"></img>
            <div className="container">
              <h2>Chris Okorie</h2>
              <p>Team Lead, FINALL</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={img2} className="card-img"  alt="Jessica Ebeye"></img>
            <div className="container">
              <h2>Jessica Ebeye</h2>
              <p>Team lead,Product design</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={img3} className="card-img"  alt="Fegho Emede"></img>
            <div className="container">
              <h2>Fego Emede</h2>
              <p>Team lead,Product Management</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="column">
          <div className="card">
            <img src={img4} className="card-img" alt="Stella Igidi"></img>
            <div className="container">
              <h2>Stella Igidi</h2>
              <p>Team lead,D.M.C.C</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={img5} className="card-img"  alt="Damilola Omotayo"></img>
            <div className="container">
              <h2>Damilola Omotayo</h2>
              <p>Team lead,Graphics</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            
            <img src={img6} className="card-img" alt="Fahad Sarki"></img>
            <div className="container">
              <h2>Fahad Sarki</h2>
              <p>Team lead,Frontend development</p>
            </div>
          </div>
        </div>
         <div className="column">
          <div className="card">
            <img src={img7} className="card-img"  alt="Matachi Ononuju"></img>
            <div className="container">
              <h2>Matachi Ononuju</h2>
              <p>Team lead, Quality Assurance</p>
            </div>
          </div>
        </div>
         <div className="column">
          <div className="card">
            <img src={img8} className="card-img"  alt="Elozona Udoh"></img>
            <div className="container">
              <h2>Elozona Udoh</h2>
              <p>Team lead,Ms Office</p>
            </div>
          </div>
        </div>
         <div className="column">
          <div className="card">
            <img src={img9} className="card-img"  alt="Toyosi Akpan"></img>
            <div className="container">
              <h2>Toyosi Akpan</h2>
              <p>Team lead,C.R.M</p>
            </div>
          </div>
        </div>
         <div className="last-column">
          <div className="cards">
            <img src={img10} className="card-img"  alt="Kanife Happiness"></img>
            <div className="last-container">
              <h2>Kevin Happiness</h2>
              <p>Team lead,Data Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
