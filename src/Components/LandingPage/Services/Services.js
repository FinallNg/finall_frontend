import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./Services.css";

import Image1 from "../../../assets-svg/services-3.svg";
import Image2 from "../../../assets-svg/services-2.svg";
import Image3 from "../../../assets-svg/services-1.svg";
import Image4 from "../../../assets-svg/services-4.svg";
import Image5 from "../../../assets-svg/services-5.svg";

// Swiper Core and required modules
import SwiperCore, { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  SwiperCore.use([Navigation]);

  const carouselItems = [
    {
      src: Image4,
      title: "Track debts and inventory",
      content: "FINALL allows you to track your business debt and inventory",
    },
    {
      src: Image3,
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
      src: Image1,
      title: "Schedule your Bill Payments",
      content:
        "Your account allows you to schedule bill payments, set your budget and keep up with deadlines.",
    },
    {
      src: Image5,
      title: "Budget",
      content:
        "You will be able to budget your incomes and spend it in the right direction",
    },
  ];

  return (
    <div className="services">
      <h2>Providing best services</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={25}
        slidesPerView={1.2}
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 33,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
        }}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isNext }) => (
              <div
                className={isNext ? "card-container-active" : "card-container"}
              >
                <div
                  className={
                    isNext ? "card-img-container-active" : "card-img-container"
                  }
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className={isNext ? "card-img-active" : "card-img"}
                  />
                </div>
                <div className={isNext ? "card-body-active" : "card-body"}>
                  <p className={isNext ? "card-title-active" : "card-title"}>
                    {item.title}
                  </p>
                  <p
                    className={isNext ? "card-content-active" : "card-content"}
                  >
                    {item.content}{" "}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="arrow-container">
          <div
            ref={prevRef}
            style={{ left: "114px" }}
            className="slide-arrow prev"
          >
            <MdKeyboardArrowLeft className="slide-icons" />
          </div>
          <div
            ref={nextRef}
            style={{ right: "114px" }}
            className="slide-arrow next"
          >
            <MdKeyboardArrowRight className="slide-icons" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Services;
