import React, { useState } from "react";
import "./transactionalmodal.css";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const TransactionModal = ({ user, onClose, onTransactionComplete }) => {
  console.log(onTransactionComplete);

  const [transactionType, setTransactionType] = useState("credit");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("access_token");

  const handleTransaction = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    toast.loading("Processing transaction...");

    try {
      const response = await axios.post(
        "https://autominner-backend.onrender.com/api/admin/transaction",
        {
          userId: user.user_id,
          type: transactionType,
          amount: Number(amount),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(
        `${transactionType === "credit" ? "Credited" : "Debited"} successfully!`
      );
      onTransactionComplete();
      onClose();
    } catch (error) {
      toast.error("Transaction failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Transaction for</h2>
        <div className="form-group">
          <label>Select Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div className="form-group">
          <label>Select Where to:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="credit">Total Deposit</option>
            <option value="debit">Total Withdrawal</option>
            <option value="debit">Current Balance</option>
          </select>
        </div>
        <div className="form-group">
          <label>Enter Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button
            className="pay-btn"
            onClick={handleTransaction}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
