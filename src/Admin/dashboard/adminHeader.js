import React, { useState } from "react";
import "./style.css";
import logo from "../../pages/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
    localStorage.removeItem("data");
    localStorage.removeItem("access_token");
    navigate("/admin/login");
    window.location.reload();
  };

  const admin = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="AdminHead">
      <div className="AdminHold">
        <div className="AdminImgLogo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="UserDropdown">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            {admin.username} ▾
          </button>
          {dropdownOpen && (
            <div className="DropdownMenu">
              <p>{admin.email}</p>
              <button onClick={handleLogout} className="LogoutButton">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="AdminNav">
        <div className="AdminNavLinks">
          <span>
            <Link to="/admin/users">All Users</Link>
          </span>
          <span>
            <Link to="/admin/transactions">All Transactions</Link>
          </span>
          <span>
            <Link to="/admin/create-plans">Create Plans</Link>
          </span>
          <span>
            <Link to="/admin/allplans">All Plans</Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
