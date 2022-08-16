import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";
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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  export const data = [
    {
      name: 'chris okorie',
      imgPath: img1,
      role: 'Team Lead, FINALL',
    },
    {
      name: 'Jessica Ebeye',
      imgPath: img2,
      role: 'Team Lead, Product Design',
    },
    {
      name: 'Fegho Emede',
      imgPath: img3,
      role: 'Team Lead, Product Management',
    },
    {
      name: 'Stella Igidi',
      imgPath: img4,
      role: 'Team Lead, D.M.C.C',
    },
    {
      name: 'Damilola Omotayo',
      imgPath: img5,
      role: 'Team Lead, Graphics',
    },
    {
      name: 'Fahad Sarki',
      imgPath: img6,
      role: 'Team Lead, Frontend Development',
    },
    {
      name: 'Matachi Ononujuchris',
      imgPath: img7,
      role: 'Team Lead, Quality Assurance',
    },
    {
      name: 'Elozona Udohchris',
      imgPath: img8,
      role: 'Team Lead, MS Office',
    },
    {
      name: 'Toyosi Akpanchris',
      imgPath: img9,
      role: 'Team Lead, C.R.M',
    },
    {
      name: 'Kelvin Happiness',
      imgPath:  img10,
      role: 'Team Lead, Data Analysis',
    },

  ]
  const Team = () => {
  return (
    <Carousel containerClass="slider-container" responsive={responsive}>
      {
        data.map((item, index) => <TeamCard key={index} name={item.name} profileImgPath={item.imgPath} alt="Alt text" role={item.role} />)
      }
  {/* <div className="row">
        <div className="column">
          <div className="card">
            <img src={img1} className="card-img" alt="Chris Okorie"></img>
            <div className="container-img">
              <h2>Chris Okorie</h2>
              <p>Team Lead, FINALL</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={img2} className="card-img"  alt="Jessica Ebeye"></img>
            <div className="container-img">
              <h2>Jessica Ebeye</h2>
              <p>Team lead,Product design</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={img3} className="card-img"  alt="Fegho Emede"></img>
            <div className="container-img">
              <h2>Fego Emede</h2>
              <p>Team lead,Product Management</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="column">
          <div className="card">
            <img src={img4} className="card-img" alt="Stella Igidi"></img>
            <div className="container-img">
              <h2>Stella Igidi</h2>
              <p>Team lead,D.M.C.C</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={img5} className="card-img"  alt="Damilola Omotayo"></img>
            <div className="container-img">
              <h2>Damilola Omotayo</h2>
              <p>Team lead,Graphics</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            
            <img src={img6} className="card-img" alt="Fahad Sarki"></img>
            <div className="container-img">
              <h2>Fahad Sarki</h2>
              <p>Team lead,Frontend development</p>
            </div>
          </div>
        </div>
         <div className="column">
          <div className="card">
            <img src={img7} className="card-img"  alt="Matachi Ononuju"></img>
            <div className="container-img">
              <h2>Matachi Ononuju</h2>
              <p>Team lead, Quality Assurance</p>
            </div>
          </div>
        </div>
         <div className="column">
          <div className="card">
            <img src={img8} className="card-img"  alt="Elozona Udoh"></img>
            <div className="container-img">
              <h2>Elozona Udoh</h2>
              <p>Team lead,Ms Office</p>
            </div>
          </div>
        </div>
         <div className="column">
          <div className="card">
            <img src={img9} className="card-img"  alt="Toyosi Akpan"></img>
            <div className="container-img">
              <h2>Toyosi Akpan</h2>
              <p>Team lead,C.R.M</p>
            </div>
          </div>
        </div>
         <div className="column">
          <div className="card">
            <img src={img10} className="card-img"  alt="Kanife Happiness"></img>
            <div className="container-img">
              <h2>Kevin Happiness</h2>
              <p>Team lead,Data Analysis</p>
            </div>
          </div>
        </div>
      </div> */}
</Carousel>
  )
    }

export default Team;
