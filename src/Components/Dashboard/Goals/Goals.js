import "./Goals.css";

import Globe from "../../../assets-svg/global-search.svg";
import Car from "../../../assets-svg/car.svg";
import Xbox from "../../../assets-svg/gameboy.svg";
import Gift from "../../../assets-svg/gift.svg";
import House from "../../../assets-svg/house.svg";
import Book from "../../../assets-svg/book.svg";
import { MdKeyboardArrowDown, MdAdd } from "react-icons/md";

const Goals = () => {
  const targets = [
    {
      id: 1,
      src: Globe,
      title: "Trip to Dubia",
      amount: "$1000.00",
      date: "January 2022",
    },
    {
      id: 2,
      src: House,
      title: "House in Lekki",
      amount: "$4000.00",
      date: "December 2022",
    },
    {
      id: 3,
      src: Car,
      title: "Landcruiser Prado",
      amount: "$12000.00",
      date: "March 2023",
    },
    {
      id: 4,
      src: Book,
      title: "Phd in Oxford University",
      amount: "$2000.00",
      date: "January 2022",
    },
    {
      id: 5,
      src: Xbox,
      title: "Xbox",
      amount: "$1000.00",
      date: "May 2022",
    },
    {
      id: 6,
      src: Gift,
      title: "Birthday",
      amount: "$500.00",
      date: "August 2023",
    },
  ];
  return (
    <div className="Goals">
      <div className="header-container">
        <div className="col-left">
          <span>Goals</span>
          <span>{<MdAdd className="plus-icon"/>}</span>
        </div>
        <div className="col-right">
          <span>Manage</span>
          <span>{<MdKeyboardArrowDown className="caret-down" />}</span>
        </div>
      </div>
      <div className="goals-container">
        {targets.map((target) => (
          <div className="goals-card" key={target.id}>
            <div className="goals-title">
              <img src={target.src} alt={target.title} />
              <span>{target.title}</span>
            </div>
            <div className="goals-amount">
              <p>BUDGET</p>
              <p>{target.amount}</p>
            </div>
            <div className="goals-date">
              <p>Due Month</p>
              <p>{target.date}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="goToTop">
        <MdAdd />
      </button>
    </div>
  );
};

export default Goals;
