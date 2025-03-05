import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect } from "react";
import Cookies from "js-cookie";

const DashboardHeader = (props) => {
  console.log(props);

  const getUserDetails = async () => {};
  // useEffect(
  //     getUserDetails() ,[]
  // )

  return (
    <div>
      <div className="staticHeader">
        <div className="TitleCnt">
          <h2 className="Title">{props.title}</h2>
        </div>

        <div className="GroupSearchLoginUser">
          <div className="Search">
            <SearchIcon className="searchIcon" />
            <input type="text" name="search" id="Search" placeholder="Search" />
          </div>
          <Badge
            badgeContent={4}
            color="primary"
            className="staticHeaderJustifyItems"
          >
            <NotificationsIcon color="action" />
          </Badge>
          <div className="LoginUser">
            <p className="staticHeaderJustifyItems">{props.LoginUser}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
