import React from "react";
import "./edit-info.css";
import SideNav from "../../Dashboard/SideNav";
import DashboardHeader from "../../Dashboard/header";

export default function EditInfo() {
  return (
    <div className="Dashboard">
      <div className="sidebar">
          <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView"  LoginUser="Cyber User" />
      </div>

      <div className="MiddleContent">
        <div className="edit-info_body">
          <h2 className="section-header">Edit Information</h2>
          <p>
            Kindly, input the username you want to be addressed by with no space
            in between and we will do well to address you that on our mining
            platform.
          </p>
          <form>
            <input type="text" placeholder="Username" />
          </form>

          <p>
            Kindly, input the email address you want to be notified with of your
            transactions and payouts on our mining platform.
          </p>
          <form>
            <input type="text" placeholder="youremail@email.com" />
          </form>
          <button className="btn">Update Changes</button>
        </div>
      </div>
    </div>
  );
}
