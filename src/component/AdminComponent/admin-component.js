import React from "react";
import "./admin-component.css";

export default function AdminComponent({
  id,
  firstname,
  lastname,
  emailaddress,
  username,
  cointype,
  balance,
  walletaddress,
  date,
  action,
}) {
  return (
    <tr className="table-row">
      <td>{id}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{emailaddress}</td>
      <td>{username}</td>
      <td>{cointype}</td>
      <td>{balance}</td>

      <td>{date}</td>
      <td>{action}</td>
    </tr>
  );
}
