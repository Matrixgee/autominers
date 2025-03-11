import React from "react";
import "./transaction-component.css";

export default function TransactionComponent({
  id,
  username,
  emailaddress,
  transactionType,
  amount,
  coinType,
  status,
  date,
  action,
}) {
  // Function to determine status color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "status-completed";
      case "pending":
        return "status-pending";
      case "failed":
        return "status-failed";
      default:
        return "";
    }
  };

  return (
    <tr className="table-row">
      <td>{id}</td>
      <td>{username}</td>
      <td>{emailaddress}</td>
      <td>{transactionType}</td>
      <td>{amount}</td>
      <td>{coinType}</td>
      <td>
        <span className={`status-badge ${getStatusColor(status)}`}>
          {status}
        </span>
      </td>
      <td>{date}</td>
      <td>{action}</td>
    </tr>
  );
}
