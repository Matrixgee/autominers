import React from "react";
import "./transaction-page.css";

import DottedIcon from "../../component/DottedIcon/dotted-icon";
import AdminHeader from "../dashboard/adminHeader";
import TransactionComponent from "../../component/AdminComponent/transaction-component";

const TransactionsPage = () => {
  const transactionsData = [
    {
      id: 1001,
      username: "John Doe",
      emailaddress: "johndoe@example.com",
      transactionType: "Deposit",
      amount: 0.00245,
      coinType: "BTC",
      status: "Completed",
      date: "2023-05-12",
      action: <DottedIcon />,
    },
    {
      id: 1002,
      username: "Jane Smith",
      emailaddress: "janesmith@example.com",
      transactionType: "Withdrawal",
      amount: 0.00189,
      coinType: "ETH",
      status: "Pending",
      date: "2023-05-13",
      action: <DottedIcon />,
    },
    {
      id: 1003,
      username: "Robert Johnson",
      emailaddress: "rjohnson@example.com",
      transactionType: "Deposit",
      amount: 0.00562,
      coinType: "BTC",
      status: "Completed",
      date: "2023-05-14",
      action: <DottedIcon />,
    },
    {
      id: 1004,
      username: "Emily Williams",
      emailaddress: "emilyw@example.com",
      transactionType: "Withdrawal",
      amount: 0.00327,
      coinType: "ETH",
      status: "Failed",
      date: "2023-05-15",
      action: <DottedIcon />,
    },
    {
      id: 1005,
      username: "Michael Brown",
      emailaddress: "mbrown@example.com",
      transactionType: "Deposit",
      amount: 0.00118,
      coinType: "BTC",
      status: "Completed",
      date: "2023-05-16",
      action: <DottedIcon />,
    },
    {
      id: 1006,
      username: "Sarah Davis",
      emailaddress: "sdavis@example.com",
      transactionType: "Withdrawal",
      amount: 0.00493,
      coinType: "ETH",
      status: "Pending",
      date: "2023-05-17",
      action: <DottedIcon />,
    },
  ];

  return (
    <div className="TransactionsPage">
      <AdminHeader />
      <div className="table-container">
        <table className="transactions-table">
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>Username</th>
              <th>Email Address</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Coin</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((item, index) => (
              <TransactionComponent
                key={index}
                id={item.id}
                username={item.username}
                emailaddress={item.emailaddress}
                transactionType={item.transactionType}
                amount={item.amount}
                coinType={item.coinType}
                status={item.status}
                date={item.date}
                action={item.action}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
