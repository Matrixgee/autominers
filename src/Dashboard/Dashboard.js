import React from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";
import useFetchHook from "../hooks/useFetchHook";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AccountDashboard from "./Plugins/AccountDashboard";
import useFetchAccount from "../hooks/useFetchAccount";
import UserTransactions from "./component/userTransactions";
import useFetchTransaction from "../hooks/useFetchTransaction";

//transaction={transaction}

const Dashboard = () => {
  const { user } = useFetchHook();
  const { account } = useFetchAccount();
  const { transactions } = useFetchTransaction();

  return (
    <div className="Dashboard">
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView" LoginUser={user.Username ?? ""} />
      </div>

      <div className="MiddleContent">
        <AccountDashboard account={account} transactions={transactions} />

        <div className="Assets">
          <h2>Assets</h2>
          <div className="AssetsLists">
            <div className="assetItem">
              <span className="assetItemName">
                <h4>Bitcoin</h4>
              </span>
              <div className="groupTwo">
                <NorthEastIcon />
                <h3>2.35BTC</h3>
              </div>
            </div>

            <div className="assetItem">
              <span className="assetItemName">
                <h4>Ethereum</h4>
              </span>
              <div className="groupTwo">
                <NorthEastIcon />
                <h3>2.35ETH</h3>
              </div>
            </div>

            <div className="assetItem">
              <span className="assetItemName">
                <h4>Litcoin</h4>
              </span>
              <div className="groupTwo">
                <NorthEastIcon />
                <h3>2.35LTC</h3>
              </div>
            </div>

            <div className="assetItem">
              <span className="assetItemName">
                <h4>Dogecoin</h4>
              </span>
              <div className="groupTwo">
                <NorthEastIcon />
                <h3>2.35DGE</h3>
              </div>
            </div>
          </div>
        </div>
        <UserTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
