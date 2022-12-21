import React from "react";
import "./Invoices.css";
// import logo3 from './invoicesimages/ogo3.png'
// import vector from './invoicesimages/Vector.png'
// import vector2 from './invoicesimages/Vector2.svg'
// import vector3 from './invoicesimages/Vector3.svg'
// import vector4 from './invoicesimages/Vector4.svg'
// import vector5 from './invoicesimages/Vector5.svg'
// import vector6 from './invoicesimages/Vector6.svg'
// import vector7 from './invoicesimages/Vector7.svg'
// import vector8 from './invoicesimages/Vector8.svg'
import { RiArrowDownSLine, RiShoppingCart2Line } from "react-icons/ri";
import { TbArrowBarToDown } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import frame1 from "./invoicesimages/Frame1.svg";
const Invoices = () => {
  return (
    <div className="invoices">
      <div className="invoices2">
        <div className="invoices2-head">
          <div className="invoices2-head1">
            <h2>Invoices</h2>
          </div>
          <div className="invoices2-head2">
            <div className="invoices2-h5">
              <h5>Manage Invoices</h5>
            </div>
            <div className="invoices2-icon">
              <RiArrowDownSLine />
            </div>
          </div>
        </div>
        <div className="invoices2-content">
          <div className="invoices2-content1">
            <div className="invoices2-content1-box">
              <form>
                <input
                  name="search"
                  type="search"
                  placeholder=" Search for an invoice"
                ></input>
              </form>
              <div className="invoices2-box-details">
                <div className="invoices2-box-line first">
                  <div className="invoices2-box-right">
                    <div className="invoices2-box-icon">
                      <img src={frame1} alt="frame icon" />
                    </div>
                    <div className="invoices2-box-text">
                      <h5>Tesco Market</h5>
                    </div>
                  </div>
                  <div className="invoices2-box-left">
                    <span>$75.67</span>
                  </div>
                </div>
                <div className="invoices2-box-line second">
                  <div className="invoices2-line2-left ">
                    <h6>Shopping</h6>
                  </div>
                  <div className="invoices2-line2-right">
                    <h6>13 Dec 2020</h6>
                  </div>
                </div>
              </div>
              <div className="invoices2-box-details">
                <div className="invoices2-box-line first">
                  <div className="invoices2-box-right">
                    <div className="invoices2-box-icon">
                      <img src={frame1} alt="frame icon" />
                    </div>
                    <div className="invoices2-box-text">
                      <h5>Fiorgio Restaurant</h5>
                    </div>
                  </div>
                  <div className="invoices2-box-left">
                    <span>$19.50</span>
                  </div>
                </div>
                <div className="invoices2-box-line second">
                  <div className="invoices2-line2-left ">
                    <h6>food</h6>
                  </div>
                  <div className="invoices2-line2-right">
                    <h6>07 Dec 2020</h6>
                  </div>
                </div>
              </div>
              <div className="invoices2-box-details">
                <div className="invoices2-box-line first">
                  <div className="invoices2-box-right">
                    <div className="invoices2-box-icon">
                      <img src={frame1} alt="frame icon" />
                    </div>
                    <div className="invoices2-box-text">
                      <h5>ElectroMen Market</h5>
                    </div>
                  </div>
                  <div className="invoices2-box-left">
                    <span>$250.00</span>
                  </div>
                </div>
                <div className="invoices2-box-line second">
                  <div className="invoices2-line2-left ">
                    <h6>Shopping</h6>
                  </div>
                  <div className="invoices2-line2-right">
                    <h6>14 Dec 2020</h6>
                  </div>
                </div>
              </div>
              <div className="invoices2-box-details">
                <div className="invoices2-box-line first">
                  <div className="invoices2-box-right">
                    <div className="invoices2-box-icon">
                      <img src={frame1} alt="frame icon" />
                    </div>
                    <div className="invoices2-box-text">
                      <h5>ElectroMen Market</h5>
                    </div>
                  </div>
                  <div className="invoices2-box-left">
                    <span>$250.00</span>
                  </div>
                </div>
                <div className="invoices2-box-line second">
                  <div className="invoices2-line2-left ">
                    <h6>Shopping</h6>
                  </div>
                  <div className="invoices2-line2-right">
                    <h6>14 Dec 2020</h6>
                  </div>
                </div>
              </div>
              <div className="invoices2-box-details">
                <div className="invoices2-box-line first">
                  <div className="invoices2-box-right">
                    <div className="invoices2-box-icon">
                      <img src={frame1} alt="frame icon" />
                    </div>
                    <div className="invoices2-box-text">
                      <h5>Tesco Market</h5>
                    </div>
                  </div>
                  <div className="invoices2-box-left">
                    <span>$90.67</span>
                  </div>
                </div>
                <div className="invoices2-box-line second">
                  <div className="invoices2-line2-left ">
                    <h6>Shopping</h6>
                  </div>
                  <div className="invoices2-line2-right">
                    <h6>13 Dec 2020</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invoices2-content2">
            <div className="invoices2-content2-box">
              <div className="content2-box-h">
                <h3>Invoice Statistics</h3>
              </div>
              <div className="content2-box-details">
                <div className="box-details-1">
                  <div className="details-1-icon">
                    <RiShoppingCart2Line className="details-1-i" />
                  </div>
                  <div className="details-1-h">
                    <h4>Shopping</h4>
                  </div>
                </div>
                <div className="box-details-2">
                  <div className="details2-percentage-bar"></div>
                </div>
                <div className="details2-price-box">
                  <div className="details2-price">
                    <span>$520.67</span>
                  </div>
                  <div>
                    <span>57%</span>
                  </div>
                </div>
              </div>
              <div className="content2-box-details">
                <div className="box-details-1">
                  <div className="details-1-icon">
                    <RiShoppingCart2Line className="details-1-i" />
                  </div>
                  <div className="details-1-h">
                    <h4>Shopping</h4>
                  </div>
                </div>
                <div className="box-details-2">
                  <div className="details2-percentage-bar"></div>
                </div>
                <div className="details2-price-box">
                  <div className="details2-price">
                    <span>$230.89</span>
                  </div>
                  <div>
                    <span>43%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoice2-content-middle">
          <h5>Invoice/ Inv -1 -12/20</h5>
        </div>

        <div className="invoices2-content">
          <div className="invoices2-content1">
            <div className="invoices2-content1-box second-box">
              <div className="invoice-no-box">
                <div className="invoice-no-content">
                  <div className="invoice-no-details">
                    <div className="invoice-no-h1">
                      <h6>Invoice number</h6>
                    </div>
                    <div className="invoice-no-h2">
                      <div className="invoice-no-img">
                        <img src={frame1} alt="frame icon" />
                      </div>
                      <div className="invoice-no-h5">
                        <h5>Tesco Market</h5>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-no-details">
                    <div className="invoice-no-h1">
                      <h6>Inv -1-12/20</h6>
                    </div>
                    <div className="invoice-no-h2">
                      <div className="invoice-no-img"></div>
                      <div className="invoice-no-h5">
                        <h5>Shopping</h5>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-no-details">
                    <div className="invoice-no-h1">
                      <h6>Issued Date: 14 Dec, 2020</h6>
                    </div>
                    <div className="invoice-no-h2"></div>
                  </div>
                </div>
              </div>
              <div className="items-desc-box">
                <div className="items-desc-content">
                  <div className="items-desc-details">
                    <div className="items-desc-details1">
                      <div className="items-desc-details1-icon">
                        <FaBars />
                      </div>
                      <div className="items-desc-details1-p">
                        <p>Items Description</p>
                      </div>
                    </div>
                    <div className="items-desc-details1">
                      <p>Qty</p>
                    </div>
                    <div className="items-desc-details1">
                      <p>Rate</p>
                    </div>
                    <div className="items-desc-details1">
                      <p>Amount</p>
                    </div>
                  </div>

                  <div className="items-desc-details sub-details">
                    <div className="items-desc-details1">
                      <div className="items-desc-details1-p ">
                        <p>Scented Candle</p>
                      </div>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>2</p>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>$20</p>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>$40</p>
                    </div>
                  </div>
                  <div className="items-desc-details sub-details">
                    <div className="items-desc-details1">
                      <div className="items-desc-details1-p ">
                        <p>Heart Necklace</p>
                      </div>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>1</p>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>$25.2</p>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>$25.2</p>
                    </div>
                  </div>
                  <div className="items-desc-details sub-details">
                    <div className="items-desc-details1">
                      <div className="items-desc-details1-p ">
                        <p>Walnuts</p>
                      </div>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>1</p>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>$25.2</p>
                    </div>
                    <div className="items-desc-details1 shift">
                      <p>$25.2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total-amt-box">
                <div className="total-amt-h4">
                  <h4>Total Amount </h4>
                </div>
                <span>$75.67</span>
              </div>
            </div>
          </div>
          <div className="invoices2-content2">
            <div className="invoices2-content2-box second-box2">
              <div className="second-box2-items">
                <h5>Amount Spent (USD)</h5>
              </div>
              <div className="second-box2-items">
                <span>$75.67</span>
              </div>
              <div className="second-box2-items">
                <p>13, Dec, 2020</p>
              </div>
              <div className="second-box2-items">
                <div className="button-div">
                  <div className="box2-items-button">
                    <a href="/">
                      <button>
                        <TbArrowBarToDown />
                        <p>Preview</p>
                      </button>
                    </a>
                  </div>
                  <div className="box2-items-button">
                    <a href="/">
                      <button>
                        <TbArrowBarToDown />
                        <p>Download</p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="second-box2-items">
                <div className="send-invoice-btn">
                  <p>Send Invoice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
