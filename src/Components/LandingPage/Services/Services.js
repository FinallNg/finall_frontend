import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

import Image1 from "../../../assets/stand3.png";
import Image2 from "../../../assets/stand4.png";
import Image3 from "../../../assets/services-1.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const arrowStyles = {
  background: "#1A33B2",
  width: "72px",
  height: "72px",
  zIndex: "1000",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowStyles,
        right: "114px",
      }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="update-btn" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowStyles,
        left: "114px",
      }}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="update-btn" />
    </div>
  );
};

const Services = () => {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    document.querySelectorAll(".slick-active").forEach((el) => {
      el.style?.setProperty("position", "static", "important");
    });

    document
      .querySelectorAll(".slick-current")
      .style?.setProperty("position", "relative", "important");
    document
      .querySelectorAll(".slick-current")
      .style?.setProperty("z-index", "50", "important");
  }, [imageIndex]);

  const carouselItems = [
    {
      src: Image1,
      title: "Connect Multiple Banks",
      content:
        "FINALL allows you to connect multiple banks data and also other financial institution, leaving your financial health at your fingertips.",
    },
    {
      src: Image2,
      title: "Track Your Transactions",
      content:
        "Our financial dashboard allows you to track your expenses. ,track your transactions and monitor the inflow and outflow of your finances.",
    },
    {
      src: Image3,
      title: "Schedule your Bill Payments",
      content:
        "Your account allows you to schedule bill payments, set your budget and keep up with deadlines.",
    },
    {
      src: Image1,
      title: "ReSchedule your Bill Payments",
      content:
        "You will be able to budget your incomes and spend it in the right direction.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <div className="services">
      <h2>Providing Best Services</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={
              index === imageIndex ? `card-container-active` : `card-container`
            }
          >
            <div
              className={
                index === imageIndex
                  ? `card-img-container-active`
                  : `card-img-container`
              }
            >
              <img
                src={item.src}
                alt={item.title}
                className={
                  index === imageIndex ? `card-img-active` : `card-img`
                }
              />
            </div>
            <div
              className={
                index === imageIndex ? `card-body-active` : `card-body`
              }
            >
              <p
                className={
                  index === imageIndex ? `card-title-active` : `card-title`
                }
              >
                {item.title}
              </p>
              <p
                className={
                  index === imageIndex ? `card-content-active` : `card-content`
                }
              >
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
