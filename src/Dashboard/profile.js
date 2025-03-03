import React from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";


// import Advance from './img/advance.png';
// import starter from './img/starter.png';
// import professional from './img/professional.png';


import ProfileDetails from "../pages/Profile/profile-details";
import useFetchHook from "../hooks/useFetchHook";


const Profile = () => {
   const { user } = useFetchHook();
   console.log(user)
   return (
      <div className="Dashboard">
         <div className="sidebar">
            <SideNav />
         </div>

         <div className="dashboardNav">
            <DashboardHeader title="OverView" LoginUser="Cyber User" />
         </div>

         <div className="MiddleContent">

            <ProfileDetails user={user} />

         </div>
      </div>
   );

}
export default Profile;