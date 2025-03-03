import React from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";

// import Advance from './img/advance.png';
// import starter from './img/starter.png';
// import professional from './img/professional.png';

const Monitor = () => {
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
     export default Monitor;