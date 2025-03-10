import React from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";

const Settings = () => {
  return (
    <div className="Dashboard">
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView" LoginUser="" />
      </div>

      <div className="MiddleContent"></div>
    </div>
  );
};
export default Settings;
