import React, { useState, useEffect } from "react";
import "./Accounts.css";
import { ATMCard } from "atm-card-react";
import axios from "axios";

// Import Images
import Bell from "../../../assets/bell.png";
import Mail from "../../../assets/mail.png";
import ProfilePic from "../../../assets/profile-pic.png";
import AtmCard from "../../../assets/atm-card.png";
import PlusIcon from "../../../assets/plus-icon.png";
import ArrowIcon from "../../../assets/arrow-down.png";

const url = "finall-app.herokuapp.com/api/v1/users/62b208fab5e09b628baa2429/accounts/totalBalance";


const Accounts = () => {

  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    async function getTotalBalance() {
      const response = await axios.get(url);
      console.log(response)
      setTotalBalance(response["totalBalance"]);

    }

    getTotalBalance()
  }, [])


  const accountsDetails = [
    {
      id: 1,
      src: AtmCard,
      cardType: "GTB",
      acctName: "Enowo Enowo",
      acctNumber: "0455845267",
      acctBalance: "# 350,000",
      type: "Bank",
    },
    {
      id: 2,
      src: AtmCard,
      cardType: "PayPal",
      acctName: "Onuha John",
      acctNumber: "0655674827",
      acctBalance: "# 850,000",
      type: "Wallet",
    },
    {
      id: 3,
      src: AtmCard,
      cardType: "Sterling",
      acctName: "Chidera okonkwo",
      acctNumber: "0156895615",
      acctBalance: "# 200,000",
      type: "Bank",
    },
    {
      id: 4,
      src: AtmCard,
      cardType: "Access",
      acctName: "Kunle Taiyo",
      acctNumber: "6561898615",
      acctBalance: "# 430,000",
      type: "Bank",
    },
    {
      id: 5,
      src: AtmCard,
      cardType: "PiggyVest",
      acctName: "Afolabi Yusuf",
      acctNumber: "0225519845",
      acctBalance: "# 200,000",
      type: "Investment",
    },
  ];

  const accountSrc = [
    {
      id: 1,
      src: Bell,
      alt: "Bell icon",
    },
    {
      id: 2,
      src: Mail,
      alt: "Mail icon",
    },
    {
      id: 3,
      src: ProfilePic,
      alt: "Profile pic",
    },
  ];

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
              <img
                src={accountSrc[2].src}
                alt={accountSrc[2].alt}
                className="profile-pic"
              />
            </a>
          </div>
        </header>
      </>
    );
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

        <div className="account-responsive-container">
          <section className="account-card-section">
            {accountsDetails.map((account) => {
              const { acctBalance, acctName, acctNumber, cardType, type, id } =
                account;
              return (
                <div key={id} className="account-container">
                  <div>
                    <ATMCard
                      year={22}
                      month={3}
                      cvv="000"
                      number={acctNumber}
                      holderName={acctName}
                      lifted={false}
                      dark={true}
                      bankLogo={
                        <h1
                          style={{
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: 700,
                            color: "#d9d9d9",
                          }}
                        >
                          {cardType}
                        </h1>
                      }
                      system="VISA"
                      scale={0.5}
                    />
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
                  <div className="account-balance">
                    <h5>Total Balance</h5>
                    <p>{acctBalance}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Accounts;
