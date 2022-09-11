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
      breakpoint: { max: 3000, min: 1023 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
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
</Carousel>
  )
    }

export default Team;
