import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";
import { ContentCopy } from "@mui/icons-material";
import Cookies from "js-cookie";
import Advance from "./img/advance.png";
import starter from "./img/starter.png";
import professional from "./img/professional.png";
import axios from "axios";
import useFetchHook from "../hooks/useFetchHook";
import toast from "react-hot-toast";

const walletAddresses = {
  Bitcoin: "bc1qxc4earx32vkhg2ul0ep4tk94977v5r5j6h7u6a",
  Ethereum: "0x65b89562C0061bD8abf87D69eBf424a10609E54C",
  Litecoin: "ltc1q4ks6g7msudvv4z6y4k3gxhvvs76emngp6d267l",
};

const Deposit = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("Bitcoin");
  const [amount, setAmount] = useState("");
  const [loading, setloading] = useState(false);
  const [exchangeRates, setExchangeRates] = useState({
    Bitcoin: 0,
    Ethereum: 0,
    Litecoin: 0,
  });
  const { user } = useFetchHook();

  const username = user?.user?.Username || "";

  console.log(username);

  const data = {
    coinType: selectedCrypto,
    address: walletAddresses[selectedCrypto],
    amount,
  };

  const token = Cookies.get("access_token");

  const HandleDeposit = async () => {
    const toastloadingId = toast.loading("Processsing Deposit...");

    try {
      setloading(true);
      const res = await axios.post(
        "https://autominner-backend.onrender.com/api/payment/deposit",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Deposit successful!");
      } else {
        toast.error("Deposit failed. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to process deposit. Please try again.");
    } finally {
      toast.dismiss(toastloadingId);
      setloading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddresses[selectedCrypto]);
  };

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd"
        );
        setExchangeRates({
          Bitcoin: response.data.bitcoin.usd,
          Ethereum: response.data.ethereum.usd,
          Litecoin: response.data.litecoin.usd,
        });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
    const interval = setInterval(fetchExchangeRates, 30000); // Update every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Dashboard">
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView" LoginUser={username} />
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
                <h3>{exchangeRates.Bitcoin} USD</h3>
              </div>
              <div className="planFooter">
                <h3>Bitcoin Plan</h3>
              </div>
            </div>
            <div className="plansItem">
              <div className="PlanCoinAmount">
                <h3>{exchangeRates.Ethereum} USD</h3>
              </div>
              <div className="planFooter">
                <h3>Ethereum Plan</h3>
              </div>
            </div>
            <div className="plansItem">
              <div className="PlanCoinAmount">
                <h3>{exchangeRates.Litecoin} USD</h3>
              </div>
              <div className="planFooter">
                <h3>Litecoin Plan</h3>
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
            <span>{walletAddresses[selectedCrypto]}</span>
            <button className="CopyButton" onClick={copyToClipboard}>
              <ContentCopy fontSize="small" /> Copy
            </button>
          </div>

          <div className="DepositformBtn">
            <button onClick={HandleDeposit}>
              {loading ? "Processing...." : "Proceed to Deposit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
