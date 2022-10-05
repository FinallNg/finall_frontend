import "./Budgets.css";

// import images
import Hospital from "../../../assets-svg/building.svg";
import Shopping from "../../../assets-svg/shopping.svg";
import Feeding from "../../../assets-svg/eatery.svg";
import Transport from "../../../assets-svg/airplane.svg";
import Club from "../../../assets-svg/clubbing.svg";
import Bell from "../../../assets-svg/bell.svg";
import Mail from "../../../assets-svg/mail.svg"
import ProfilePic from "../../../assets-svg/profile-pic.svg";


const Budgets = () => {

    let budgetSrc = [
        {
            id: 1,
            src: Bell
        },
        {
            id: 2,
            src: Mail
        },
        {
            id: 3,
            src: ProfilePic
        }
    ]

    let budgetDetails = [
        {
            id: 1,
            src: Hospital,
            header: "Hospital",
            amount: "$3500",
            amountInfo: "Spent",
            limit: "Limit",
            limitAmount: "$5000",
            duration: "Duration",
            durationTime: "1 Month",
            remain: "Remaining",
            remainAmount: "$1500",
            background: "#CFE6FC",
            headerBg: "#F5FAFF",
            circle: "#6787E4"
        },
        {
            id: 2,
            src: Shopping,
            header: "Shopping",
            amount: "$3500",
            amountInfo: "Spent",
            limit: "Limit",
            limitAmount: "$5000",
            duration: "Duration",
            durationTime: "1 Month",
            remain: "Remaining",
            remainAmount: "$1500",
            background: "#BDFECF",
            headerBg: "#F2FFF6",
            circle: "#00B500"
        },
        {
            id: 3,
            src: Feeding,
            header: "Feeding",
            amount: "$3500",
            amountInfo: "Spent",
            limit: "Limit",
            limitAmount: "$5000",
            duration: "Duration",
            durationTime: "1 Month",
            remain: "Remaining",
            remainAmount: "$1500",
            background: "#FAFADE",
            headerBg: "#FEFEF2",
            circle: "#FFF44F"
        },
        {
            id: 4,
            src: Transport,
            header: "Transportation",
            amount: "$3500",
            amountInfo: "Spent",
            limit: "Limit",
            limitAmount: "$5000",
            duration: "Duration",
            durationTime: "1 Month",
            remain: "Remaining",
            remainAmount: "$1500",
            background: "#FFD0CE",
            headerBg: "#FFF6F5",
            circle: "#F20C02"
        },
        {
            id: 5,
            src: Club,
            header: "Clubbing",
            amount: "$3500",
            amountInfo: "Spent",
            limit: "Limit",
            limitAmount: "$5000",
            duration: "Duration",
            durationTime: "1 Month",
            remain: "Remaining",
            remainAmount: "$1500",
            background: "#FFEADA",
            headerBg: "#FFF8F2",
            circle: "#FB800F"
        }
    ]

    return (
        <div className="budget">
            <header>
                <div className="header-title">
                    <h1>Good Evening , Enwono</h1>
                    <p>Welcome back, nice to see you again!</p>
                </div>
                <div className="header-image">
                    <a href="#budget">
                        <img src={budgetSrc[0].src} alt={budgetDetails[0].header} />
                    </a>
                    <a href="#budget">
                        <img src={budgetSrc[1].src} alt={budgetDetails[0].header} />
                    </a>
                    <a href="#budget">
                        <img src={budgetSrc[2].src} alt={budgetDetails[0].header} className="profile-pic" />
                    </a>
                </div>
            </header>
            <div className="budget-container">
                {budgetDetails.map((budget) => (
                    <div keys={budget.id} className="budget-card">
                        <div className="budget-card-header">
                            <div className="budget-card-header-img" style={{ backgroundColor: budget.background, width: "2.5rem", height: "2.5rem", borderRadius: "50%" }}>
                                <img src={budget.src} alt="" />
                            </div>
                            <h3 style={{ backgroundColor: budget.headerBg }} >{budget.header}</h3>
                        </div>
                        <div className="budget-card-main" style={{ border: "10px solid " + budget.circle, borderLeftColor: "#fff", borderTopColor: "#fff" }}>
                            <div className="budget-card-main-info">
                                <h4>{budget.amount}</h4>
                                <p>{budget.amountInfo}</p>
                            </div>
                        </div>
                        <div className="budget-card-footer">
                            <div className="budget-card-footer-box" style={{backgroundColor: budget.background}}>
                                <p>{budget.limit}</p>
                                <p>{budget.limitAmount}</p>
                            </div>
                            <div className="budget-card-footer-box" style={{backgroundColor: budget.background}}>
                                <p>{budget.duration}</p>
                                <p>{budget.durationTime}</p>
                            </div>
                            <div className="budget-card-footer-box" style={{backgroundColor: budget.background}}>
                                <p>{budget.remain}</p>
                                <p>{budget.remainAmount}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Budgets