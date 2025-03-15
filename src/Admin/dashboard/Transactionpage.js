import React, { useEffect, useState } from "react";
import "./transaction-page.css";
import DottedIcon from "../../component/DottedIcon/dotted-icon";
import AdminHeader from "../dashboard/adminHeader";
import TransactionComponent from "../../component/AdminComponent/transaction-component";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const TransactionsPage = () => {
  const [AllTransaction, setAllTransaction] = useState([]);

  const token = Cookies.get("access_token");

  console.log(token);

  const getAllTransaction = async () => {
    const toastLoadingId = toast.loading("Fetching transactions...");
    try {
      const res = await axios.get(
        "https://autominner-backend.onrender.com/api/admin/transactions",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (Array.isArray(res.data)) {
        setAllTransaction(res.data);
      } else {
        console.error("API response is not an array:", res.data);
        setAllTransaction([]); // Set empty array to prevent errors
      }

      // console.log("Transaction Response:", res.data);
      // setAllTransaction(res.data);
    } catch (error) {
      console.error("Error fetching transactions:", error.response || error);
      toast.error(
        error.response?.data?.message || "Failed to fetch transactions."
      );
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  useEffect(() => {
    getAllTransaction();
  }, []);

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
            {AllTransaction.map((item, index) => (
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
                action={<DottedIcon />}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
