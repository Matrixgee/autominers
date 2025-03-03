import React from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";
import InDashboard from "../component/invesmentProfile";



const Withdrawal = () => {

    return(
    <div className="Dashboard">
     <div className="sidebar">
        <SideNav />
    </div>

    <div className="dashboardNav">
    <DashboardHeader title="OverView"  LoginUser="Cyber User" />
    </div>

     <div className="MiddleContent">
         <div className="InvesmentProfiles">
             <div className="MainShowcase">
                     <div className="Mainshowgrp">
                <div className="">
                    <h2>Kindly fill the boxes below with your correct information.</h2>
                    <p>Ensure you fill the boxes with address you are familiar with.</p>
                </div>

                <form >
                <label htmlFor="">
                    Wallet Address
                   
                </label>
                <div>
                <input type="text" name="walletAddress" placeholder="Input your wallet address" />
                </div>
                <label htmlFor="">
                    Coin Type
                    
                </label>
                <div>
                <select name="" >
                    <option value=''>BTC</option>
                    <option value=''>ETH</option>
                    <option value=''>LTC</option>
                    <option value=''>DOGE</option>
                    <option value=''>SOL</option>
                    </select>
                </div>
                    <div className="btn-form"> 
                    <button className="cBtn">Withdral Profit</button>
                  </div>

                </form>
                </div>
             </div>
          
             <InDashboard IsActive='Active' DepositAmount='$10,000.00' currentAmount='$1000' repeatSub='3' totalWithdrawal='$5000' />
         </div>
     </div>

     </div>
    )

}

export default Withdrawal;