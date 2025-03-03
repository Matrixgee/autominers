import React from "react";
import "./change-password.css";
import SideNav from "../../Dashboard/SideNav";
import DashboardHeader from "../../Dashboard/header";

export default function ChangePassword() {
  return (
    <div className="Dashboard">
      <div className="sidebar">
          <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView"  LoginUser="Cyber User" />
      </div>
      <div className="MiddleContent">
        <div className="change-password_body">
          <h2>Change Password</h2>
          <p>Kindly fill the fields below with the correct password.</p>
          <input type="text" placeholder="Input old password" />
          <p>Kindly fill the fields below with your new password.</p>
          <input type="text" placeholder="Type new password" />
          <input type="text" placeholder="Retype new password" />
          <button className="btn">Update Changes</button>
        </div>
      </div>
    </div>
  );
}
