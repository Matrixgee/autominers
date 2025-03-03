import React from "react";
import "./referral.css";
import SideNav from "../../Dashboard/SideNav";
import DashboardHeader from "../../Dashboard/header";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';





export default function Referral() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="Dashboard">
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView"  LoginUser="Cyber User" />
      </div>

      <div className="MiddleContent">
        <div className="referral-section_body">
          <h2>REFERRAL CODE</h2>
          <p>
            Introduce fellow investors to autominer cryptocurrency investment
            platform and get 5%-10% of your referral profit to your wallet.
          </p>
          <div className="input-wrapper">
            <input type="text" placeholder="656bvbhhb36/yg" />
            <button type="submit">{isMobile?(<ContentCopyIcon/>):"copy to clipboard"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
