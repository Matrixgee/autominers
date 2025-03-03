import React from "react";
import SideNav from "./SideNav";
import DashboardHeader from "./header";

import Advance from './img/advance.png';
import starter from './img/starter.png';
import professional from './img/professional.png';

const Deposit = () => {
   return(
    <div className="Dashboard">
     <div className="sidebar">
        <SideNav />
    </div>

    <div className="dashboardNav">
        <DashboardHeader title="OverView"  LoginUser="Cyber User" />
    </div>
    
     <div className="MiddleContent">

      <div className="TopContainer">

            <div className="TopContainerList">
                 <h3>Your Plans</h3>
                 <span><p>See All </p></span>
            </div>
            <div className="BottomContainerList">
                <div className="plansItem">
                    <div className="PlanCoinAmount"> <h3>0.50BTC</h3></div>
                    <div className="planFooter">
                        <h3>Professional Plans</h3>
                    </div>
                </div>

                <div className="plansItem">
                    <div className="PlanCoinAmount"> <h3>0.60BTC</h3></div>
                    <div className="planFooter">
                        <h3>Professional Plans</h3>
                    </div>
                </div>
                

                <div className="plansItem">
                    <div className="PlanCoinAmount"> <h3>0.70BTC</h3></div>
                    <div className="planFooter">
                        <h3>Professional Plans</h3>
                    </div>
                </div>
                
            </div>
      </div>
      
      <div className="">
<h3>Mining Plans</h3>
    <div className="MiningPlan">
        <div className="MiningPlanCnt">
             <div className="">
                    <img src={starter} alt='Starter Plan'/>
             </div>
             <div className="">
                <h3>Starter Plan</h3>
             </div>
        </div>
        <div className="MiningPlanCnt">
        <div className="">
                    <img src={professional} alt='Starter Plan'/>
             </div>
             <div className="">
                <h3>Professional Plan</h3>
             </div>
        </div>
        <div className="MiningPlanCnt">
        <div className="">
                    <img src={Advance} alt='Starter Plan'/>
             </div>
             <div className="">
                <h3>Advance Plan</h3>
             </div>
        </div>
    </div>
</div>
      <div className="alert-showcase">
          <p>Choose your preferable plan!</p>
        </div>
     </div>

 


     </div>
   )
}


export default Deposit;