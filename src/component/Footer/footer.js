import React from "react";
import "./footer.css";
import FooterLogo from "../../pages/img/footerLogo.png";
import blockchain from "./blockchain.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <section className="myfooter">
        <div className="FooterCnt">
          <div className="FooterFirstCnt">
            <div className="footer-logo-container">
              <img
                src={FooterLogo}
                style={{ height: "100px", width: "200px" }}
                alt="Footer Logo"
              />

              <p className="">
                We provide the best mining
                <br /> system among other mining <br />
                platforms!
              </p>
            </div>

            <div className="contact-us-container">
              <h2>Contact Us</h2>
              <div className="contact-us-text">
                <p className="">
                  <i className="fa-solid fa-address-book fa-lg icon"></i>{" "}
                  Contact@autominer.com
                </p>
                <p className="">
                  <i className="fa-solid fa-phone fa-lg icon"></i> +1(318)
                  406-9020
                </p>
                <p className="">
                  <i className="fa-solid fa-location-dot fa-lg icon"></i>{" "}
                  Toronto, Canada
                </p>
              </div>
              <div className="contact-us-socials">
                <a href="/" target="_blank" className="">
                  <i className="fa-brands fa-square-facebook fa-lg icon"></i>
                </a>
                <a href="/" target="_blank" className="">
                  <i className="fa-brands fa-square-twitter fa-lg icon"></i>
                </a>
                <a href="/" target="_blank" className="">
                  <i className="fa-brands fa-linkedin fa-lg icon"></i>
                </a>
                <a href="/" target="_blank" className="">
                  <i className="fa-brands fa-google fa-lg icon"></i>
                </a>
              </div>
            </div>

            <div className="lstFirstFooter">
              <h2 className="">Our Numbers Speak For Us</h2>

              <div className="FooterSplit">
                <span>
                  <h2 className="">$1198.76B</h2>
                  <p className="">Market Cap</p>
                </span>
                <span>
                  <h2 className="">369k</h2>
                  <p className="">Active Accounts</p>
                </span>
              </div>

              <div className="FooterSplit">
                <span>
                  <h2 className="">234k</h2>
                  <p className="">Daily Transactions</p>
                </span>
                <span>
                  <h2 className="">127</h2>
                  <p className="">Supported Countries</p>
                </span>
              </div>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:"center",color:'#accedb !important'}}> 
            <h3 style={{color:'#accedb',marginRight:'10px'}}>Supported by:  </h3>
            <a href="https://blockchain.com">
              <img src={blockchain} alt="Blockchain" />
            </a>
            </div>
            <hr/>
           
          <div className="FooterSecondCnt">
            <div className="bottom-footer">
              <p>© Copywright 2020 Autominer </p>
              
              <p>All Rights Reserved | Home for miners</p>
              <p className="">
                <Link className="footer-link" to="/privacy-policy">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
