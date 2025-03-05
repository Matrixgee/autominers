import React, { useState } from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";
import { ContentCopy } from "@mui/icons-material";

import Advance from "./img/advance.png";
import starter from "./img/starter.png";
import professional from "./img/professional.png";

const walletAddresses = {
  Bitcoin: "bc1qxyz...",
  Ethereum: "0xabc123...",
  Dogecoin: "Dxyz123...",
  Solana: "So123abc...",
};

const Deposit = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("Bitcoin");
  const [amount, setAmount] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddresses[selectedCrypto]);
  };

  return (
    <div className="Dashboard">
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView" LoginUser="" />
      </div>

      <div className="MiddleContent">
        <div className="TopContainer">
          <div className="TopContainerList">
            <h3>Your Plans</h3>
            <span>
              <p>See All </p>
            </span>
          </div>
          <div className="BottomContainerList">
            <div className="plansItem">
              <div className="PlanCoinAmount">
                <h3>0.50BTC</h3>
              </div>
              <div className="planFooter">
                <h3>Professional Plans</h3>
              </div>
            </div>
            <div className="plansItem">
              <div className="PlanCoinAmount">
                <h3>0.60BTC</h3>
              </div>
              <div className="planFooter">
                <h3>Professional Plans</h3>
              </div>
            </div>
            <div className="plansItem">
              <div className="PlanCoinAmount">
                <h3>0.70BTC</h3>
              </div>
              <div className="planFooter">
                <h3>Professional Plans</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>Mining Plans</h3>
          <div className="MiningPlan">
            <div className="MiningPlanCnt">
              <img src={starter} alt="Starter Plan" />
              <h3>Starter Plan</h3>
            </div>
            <div className="MiningPlanCnt">
              <img src={professional} alt="Professional Plan" />
              <h3>Professional Plan</h3>
            </div>
            <div className="MiningPlanCnt">
              <img src={Advance} alt="Advance Plan" />
              <h3>Advance Plan</h3>
            </div>
          </div>
        </div>

        <div className="DepositForm">
          <div className="DepositFormHeader">
            <h3>Deposit Funds</h3>
          </div>

          <label>Select Cryptocurrency:</label>
          <select
            value={selectedCrypto}
            onChange={(e) => setSelectedCrypto(e.target.value)}
          >
            {Object.keys(walletAddresses).map((crypto) => (
              <option key={crypto} value={crypto}>
                {crypto}
              </option>
            ))}
          </select>

          <label>Enter Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />

          <div className="WalletAddress">
            <p>Wallet Address for {selectedCrypto}:</p>
            <span>{walletAddresses[selectedCrypto]}</span>
            <button className="CopyButton" onClick={copyToClipboard}>
              <ContentCopy fontSize="small" /> Copy
            </button>
          </div>

          <div className='DepositformBtn'>
            <button>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
