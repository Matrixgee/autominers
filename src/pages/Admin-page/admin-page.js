import React from "react";
import "./admin-page.css";
import AdminComponent from "../../component/AdminComponent/admin-component";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DottedIcon from "../../component/DottedIcon/dotted-icon";

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
      action: <DottedIcon />,
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
      action: <DottedIcon />,
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
      action: <DottedIcon />,
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
      action: <DottedIcon />,
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
      action: <DottedIcon />,
    },
    {
      id: 267,
      firstname: "John",
      emailaddress: "mail@mail.com",
      cointype: "BTC",
      amount: 0.000563,
      walletaddress: "jhhbgf759hmahga;",
      country: "Ghana",
      action: <DottedIcon />,
    },
  ];
  return (
    <div className="table-container">
      <div className="table-header">
        <p>ID</p>
        <p>First Name</p>
        <p>Email Address</p>
        <p>Coin Type</p>
        <p>0.000563</p>
        <p>Wallet Address</p>
        <p>Country</p>
        <p>Action</p>
      </div>
      {adminData.map(
        ({
          id,
          firstname,
          emailaddress,
          cointype,
          amount,
          walletaddress,
          country,
          action,
        }) => (
          <AdminComponent
            id={id}
            firstname={firstname}
            emailaddress={emailaddress}
            cointype={cointype}
            amount={amount}
            walletaddress={walletaddress}
            country={country}
            action={action}
          />
        )
      )}
    </div>
  );
};

export default AdminPage;
