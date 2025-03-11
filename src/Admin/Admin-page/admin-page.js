import React from "react";
import "./admin-page.css";
import AdminComponent from "../../component/AdminComponent/admin-component";
import AdminHeader from "../dashboard/adminHeader";
import DootedIcon from "../../component/DottedIcon/dotted-icon";
const AdminPage = () => {
  const adminData = [
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
    },
  ];
  return (
    <div className="AdminUserPage">
      <AdminHeader />
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>First Name</th>
              <th>Email Address</th>
              <th>Coin Type</th>
              <th>Amount</th>
              <th>Wallet Address</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminData.map((item, index) => (
              <AdminComponent
                key={index}
                id={item.id}
                firstname={item.firstname}
                emailaddress={item.emailaddress}
                cointype={item.cointype}
                amount={item.amount}
                walletaddress={item.walletaddress}
                country={item.country}
                action={<DootedIcon />}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
