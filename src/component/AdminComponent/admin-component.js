import React from "react";
import "./admin-component.css";

export default function AdminComponent({
  id,
  firstname,
  emailaddress,
  cointype,
  amount,
  walletaddress,
  country,
  action,
}) {
  return (
    <tr className="table-row">
      <td>{id}</td>
      <td>{firstname}</td>
      <td>{emailaddress}</td>
      <td>{cointype}</td>
      <td>{amount}</td>
      <td>{walletaddress}</td>
      <td>{country}</td>
      <td>{action}</td>
    </tr>
  );
}
