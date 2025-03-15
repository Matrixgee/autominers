import React, { useEffect, useState } from "react";
import "./admin-page.css";
import AdminComponent from "../../component/AdminComponent/admin-component";
import AdminHeader from "../dashboard/adminHeader";
import DootedIcon from "../../component/DottedIcon/dotted-icon";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
const AdminPage = () => {
  const [allUsers, setallUsers] = useState([]);

  console.log(allUsers);

  const token = Cookies.get("access_token");

  console.log(token);

  const getAllusers = async () => {
    const toastLoadingId = toast.loading("Please wait....");

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
      setallUsers(res.data);
    } catch (error) {
      toast.error("Failed to fetch users, please try again later.");
      console.error(error);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  useEffect(() => {
    getAllusers();
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
              <th>Amount</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((item, index) => (
              <AdminComponent
                key={index}
                id={item.user_id}
                firstname={item.first_name}
                lastname={item.Last_name}
                emailaddress={item.Email}
                username={item.Username}
                cointype={item.account[0]?.Account_Type || "N/A"}
                balance={item.account[0]?.Account_Balance || "0"}
                date={new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }).format(new Date(item.reg_date))}
                action={<DootedIcon userId={item.user_id} />}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
