import React from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";


const Support = () => {
   return(
    <div className="Dashboard">
     <div className="sidebar">
        <SideNav />
    </div>

    <div className="dashboardNav">
    <DashboardHeader title="OverView"  LoginUser="Cyber User" />
    </div>

     <div className="MiddleContent"></div>
     </div>
     );

     }
     export default Support;