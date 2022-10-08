import React, { useState } from 'react'
import "./Accounts.css";
import  { ATMCard } from 'atm-card-react'

// Import Images
import Bell from "../../../assets-svg/bell.svg";
import Mail from "../../../assets-svg/mail.svg"
import ProfilePic from "../../../assets-svg/profile-pic.svg";
import AtmCard from "../../../assets/atm-card.png";
import PlusIcon from "../../../assets-svg/plus-icon.svg";
import ArrowIcon from "../../../assets-svg/arrow-down.svg";

const Accounts = () => {
  

    const accountsDetails = [
        {
            id: 1,
            src: AtmCard,
            cardType: "GTB",
            acctName: "Enowo Enowo",
            acctNumber: "0455845267",
            acctBalance: "# 350,000",
            type: "Bank"
        },
        {
            id: 2,
            src: AtmCard,
            cardType: "PayPal",
            acctName: "Onuha John",
            acctNumber: "0655674827",
            acctBalance: "# 850,000",
            type: "Wallet"
        },
        {
            id: 3,
            src: AtmCard,
            cardType: "Sterling",
            acctName: "Chidera okonkwo",
            acctNumber: "0156895615",
            acctBalance: "# 200,000",
            type: "Bank"
        },
        {
            id: 4,
            src: AtmCard,
            cardType: "Access",
            acctName: "Kunle Taiyo",
            acctNumber: "6561898615",
            acctBalance: "# 430,000",
            type: "Bank"
        },
        {
            id: 5,
            src: AtmCard,
            cardType: "PiggyVest",
            acctName: "Afolabi Yusuf",
            acctNumber: "0225519845",
            acctBalance: "# 200,000",
            type: "Investment"
        }
    ]

    const accountSrc = [
        {
            id: 1,
            src: Bell,
            alt: "Bell icon"
        },
        {
            id: 2,
            src: Mail,
            alt: "Mail icon"
        },
        {
            id: 3,
            src: ProfilePic,
            alt: "Profile pic"
        }
    ]

    function ReuseableHeader() {

        return (
            <>
                <header>
                    <div className="header-title">
                        <h1>Good Evening , Enwono</h1>
                        <p>Welcome back, nice to see you again!</p>
                    </div>
                    <div className="header-image">
                        <a href="#account">
                            <img src={accountSrc[0].src} alt={accountSrc[0].alt} />
                        </a>
                        <a href="#account">
                            <img src={accountSrc[1].src} alt={accountSrc[1].alt} />
                        </a>
                        <a href="#account">
                            <img src={accountSrc[2].src} alt={accountSrc[2].alt} className="profile-pic" />
                        </a>
                    </div>
                </header>
            </>
        )
    }

    return (
        <div className="account">
            <ReuseableHeader />

            <main>
                <section className="main-heading">
                    <div>
                        <h1>Accounts Linked</h1>
                        <img src={PlusIcon} alt="plus icon" />
                    </div>
                    <div>
                        <h2>Manage</h2>
                        <img src={ArrowIcon} alt="arrow icon" />
                    </div>
                </section>

                <section class='account-card-section'>
                    {
                        accountsDetails.map((account => {
                            const{acctBalance,acctName,acctNumber,cardType,type,id} = account
                            return(
                            <div keys={id} className="account-container">
                                <div>
                                <ATMCard
              year={22}
              month={3}
              cvv='000'
              number={acctNumber}
              holderName={acctName}
              lifted ={true}
              dark ={true}
              bankLogo={
                <h1 style={{ 
                  fontFamily: 'Arial', 
                  fontSize: 16, 
                  fontWeight: 700,
                  color: 'white' 
                }}>{cardType}</h1>
              }
              system='VISA'
              scale ={0.5}
       />


                                    {/* <img src={AtmCard} alt="atm card" /> */}
                                </div>
                                <div>
                                    <h5>{type}</h5>
                                    <p>{cardType}</p>
                                </div>
                                <div>
                                    <h5>Account Name</h5>
                                    <p>{acctName}</p>
                                </div>
                                <div>
                                    <h5>Account Number</h5>
                                    <p>{acctNumber}</p>
                                </div>
                                <div>
                                    <h5>Total Balance</h5>
                                    <p>{acctBalance}</p>
                                </div>
                            </div>
                         )}))
                    }
                </section>
            </main>
        </div>
    )
}

export default Accounts;