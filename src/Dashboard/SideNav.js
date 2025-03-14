import React from "react";
import DashLogo from "./dashboardLogo.png";
import "./style.css";

// import monitor from "./sidnavicons/monitor.png";
// import Logout from "./sidnavicons/logout.png";
// import profile from "./sidnavicons/profile.png";
// import support from "./sidnavicons/support.png";
// import settings from "./sidnavicons/settings.png";
// import slip from "./sidnavicons/slip.png";
// import cookies from "js-cookie";

// import withdraw from "./sidnavicons/withdraw.png";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WidgetsIcon from "@mui/icons-material/Widgets";
import WalletIcon from "@mui/icons-material/Wallet";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
// import { IoMdMenu } from "react-icons/io";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SideNav = () => {
  const handleLogOut = () => {
    Cookies.remove("access_token");
    Cookies.remove("authToken");
    localStorage.removeItem("access_token"); // Optional: Also clear from localStorage
    window.location.href = "/login";
  };

  return (
    <div className="DashboardSideNav">
      <div className="DashboardLogo">
        <img src={DashLogo} alt="Dashboard Logo" />
      </div>

      <div className="DashboardFirstListcnt">
        <ul>
          <li>
            <Link to="/account/dashboard">
              <WidgetsIcon className="sidebarIcon" />
              <span>Dashboard </span>
            </Link>
          </li>
          <li>
            <Link to="/account/deposit">
              {" "}
              <AccountBalanceWalletIcon className="sidebarIcon" />
              <span>Deposit</span>
            </Link>
          </li>
          <li>
            <Link to="/account/withdrawal">
              <WalletIcon className="sidebarIcon" />
              <span>Withdrawal</span>
            </Link>
          </li>
          <li>
            <Link to="/account/monitor">
              <span>
                <ReceiptLongIcon className="sidebarIcon" />
                Monitor
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <HomeIcon className="sidebarIcon" />
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="DashboardBottomlist">
        <ul>
          <li>
            <PersonIcon className="sidebarIcon" />
            <Link to="/account/profile">
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="sidebarIcon" />
            <Link to="/login">
              <span onClick={handleLogOut}>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
