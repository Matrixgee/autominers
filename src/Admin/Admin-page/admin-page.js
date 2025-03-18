import React, { useEffect, useState } from "react";
import "./admin-page.css";
import AdminComponent from "../../component/AdminComponent/admin-component";
import AdminHeader from "../dashboard/adminHeader";
import DottedIcon from "../../component/DottedIcon/dotted-icon";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const AdminPage = () => {
  const [allUsers, setAllUsers] = useState([]);

  const token = Cookies.get("access_token");

  const getAllUsers = async () => {
    const toastLoadingId = toast.loading("Fetching users...");

    try {
      const res = await axios.get(
        "https://autominner-backend.onrender.com/api/admin/users",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Users fetched successfully.");
      setAllUsers(res.data);
    } catch (error) {
      toast.error("Failed to fetch users. Please try again.");
      console.error(error);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="AdminUserPage">
      <AdminHeader />
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>UserName</th>
              <th>Coin Type</th>
              <th>Balance</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <AdminComponent
                key={index}
                id={user.user_id}
                firstname={user.first_name}
                lastname={user.Last_name}
                emailaddress={user.Email}
                username={user.Username}
                cointype={user.account[0]?.Account_Type || "N/A"}
                balance={user.account[0]?.Account_Balance || "0"}
                date={new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }).format(new Date(user.reg_date))}
                action={
                  <DottedIcon
                    userId={user.user_id}
                    onDeleteSuccess={getAllUsers}
                  />
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
