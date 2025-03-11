import React, { useState } from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";
import InDashboard from "../component/invesmentProfile";
import useFetchHook from "../hooks/useFetchHook";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Withdrawal = () => {
  const { user } = useFetchHook();
  const username = user?.user?.Username || "";

  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  const token = Cookies.get("access_token");

  const HandleWithdrawal = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid withdrawal amount.");
      return;
    }
    if (!walletAddress) {
      toast.error("Please enter a valid wallet address.");
      return;
    }

    const toastloadingId = toast.loading("Processing Withdrawal...");

    try {
      const res = await axios.post(
        "https://autominner-backend.onrender.com/api/payment/withdraw",
        { amount, walletAddress },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Withdrawal successful!");
        setAmount(""); // Clear input fields
        setWalletAddress("");
      } else {
        toast.error("Withdrawal failed. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to process withdrawal. Please try again.");
      console.error("Withdrawal Error:", error);
    } finally {
      toast.dismiss(toastloadingId);
    }
  };

  return (
    <div className="Dashboard">
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView" LoginUser={username} />
      </div>

      <div className="MiddleContent">
        <div className="InvesmentProfiles">
          <div className="MainShowcase">
            <div className="Mainshowgrp">
              <div className="">
                <h2>
                  Kindly fill the boxes below with your correct information.
                </h2>
                <p>
                  Ensure you fill the boxes with address you are familiar with.
                </p>
              </div>

              <form onSubmit={HandleWithdrawal}>
                <label htmlFor="">Wallet Address</label>
                <div>
                  <input
                    type="text"
                    name="walletAddress"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="Input your wallet address"
                  />

                  <label>Withdrawal Amount</label>

                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <label htmlFor="">Coin Type</label>
                <div>
                  <select name="">
                    <option value="">BTC</option>
                    <option value="">ETH</option>
                    <option value="">LTC</option>
                    <option value="">DOGE</option>
                    <option value="">SOL</option>
                  </select>
                </div>
                <div className="btn-form">
                  <button className="cBtn" type="submit">
                    Withdral Profit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <InDashboard
            IsActive="Active"
            DepositAmount="$10,000.00"
            currentAmount="$1000"
            repeatSub="3"
            totalWithdrawal="$5000"
          />
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
