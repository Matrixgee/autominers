import React from "react";
import "./contacts.css";
import phone from "../../assets/icons/phone-icon.png";
import mail from "../../assets/icons/mail-icon.png";
import facebook from "../../assets/icons/facebook-icon.png";
import twitter from "../../assets/icons/twitter-icon.png";
import instagram from "../../assets/icons/instagram-icon.png";
import SideNav from "../../Dashboard/SideNav";
import DashboardHeader from "../../Dashboard/header";

export default function Contact() {
  return (
    <div className="Dashboard">
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView"  LoginUser="Cyber User" />
      </div>

      <div className="MiddleContent">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Do you have any questions or enquiries? Reach out to us.</p>
        </div>

        <div className="contact-body">
          <h2 className="">Address</h2>
          <div className="address-details">
            <p>200 King St W, Toronto, ON M5H 4H2, Canada</p>
            <button className="contact-btn">Copy</button>
          </div>
          <div className="phone-details">
            <div>
              <img src={phone} alt="phone icon" />
            </div>
            <p>+1 (318) 406-9020</p>
          </div>

          <div className="mail-details">
            <div>
              <img src={mail} alt="mail icon" />
            </div>
            <span>
              <p>support@autominner.com,</p>
              <p>info@autominners.com</p>
            </span>
          </div>

          <div>
            <h2>We Socialize</h2>
            <div className="socials">
              <span>
                <img src={facebook} alt="facebook icon" />
              </span>
              <span>
                <img src={twitter} alt="instagram icon" />
              </span>
              <span>
                <img src={instagram} alt="instagram icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
