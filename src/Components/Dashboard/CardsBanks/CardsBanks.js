import { useRef } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./CardsBanks.css";
import CardOne from "../../../assets-svg/card-1.svg";
import CardTwo from "../../../assets-svg/card-2.svg";

import SwiperCore, { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const CardsBanks = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  SwiperCore.use([Navigation]);

  const bankCards = [{ src: CardOne }, { src: CardTwo }];

  return (
    <div className="cards-banks">
      <div className="cards-carousel-container">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={24}
          slidesPerView={1.5}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {bankCards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card-container">
                <img src={item.src} alt={item.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="arrow-container">
          <div ref={prevRef} className="slide-arrow prev">
            <MdKeyboardArrowLeft className="slide-icons" />
          </div>
          <div ref={nextRef} className="slide-arrow next">
            <MdKeyboardArrowRight className="slide-icons" />
          </div>
        </div>
      </div>
      <div className="card-balance">
        <p>Your balance</p>
        <p>$96,355.00</p>
      </div>
      <div className="card-info">
        <p className="title">Card Info</p>
        <div className="card-details-container">
          <div className="card-details">
            <p>Status</p>
            <p>Active</p>
          </div>
          <div className="card-details">
            <p>Limit</p>
            <p>$100,000</p>
          </div>
          <div className="card-details">
            <p>Exp.</p>
            <p>April, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsBanks;
