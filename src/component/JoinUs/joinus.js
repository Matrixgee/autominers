import React from "react";
import create from './imgs/CreateAccount.png';
import mine from './imgs/letmine.png';

import pick from './imgs/pickplan.png';
import reward from './imgs/EarnReward.png';


const JoinUs = () => {

return(
    <section className="section section-2 JoinUs">
<br /><br />
    <div className="JoinSectionOne">
        <div className="">
            <div className="">
                <h1 className="">Want to join us at Autominer?</h1>
                <p className="">We simplify your whole mining process in four easy steps without complications.</p>
            </div>
        </div>
    </div>

    <div className="JoinSectionTwo">


        <div className="JoinSec joinReverse">
            <div className="joinSize">
            <h2 className="Heading" >Create an Account</h2>
                <p className="">Sign up by simply providing your full name, desired username, and earn daily rewards. It’s that easy!</p>
            </div>
            <div className="joinSize">
                <img className="" alt="image" src={create} />
            </div>
        </div>
        <br/>
        <br/>
        <div className="JoinSec">
            <div className="joinSize">
                <h2 className="Heading">Choose a Mining Plan</h2>
                <p className="">Choose your preferred mining plan with no membership rates. What is keeping you waiting? Let us get you started to the cryptocurrency mining world!</p>
                <button className="filled" type="submit">View Plans</button>
                <br/>
            </div>
            <div className="joinSize">
                <img className="" alt="image" src={pick} />
            </div>
        </div>
        <br/>
        <br/>
        <div className="JoinSec joinReverse">
            <div className="joinSize">
                <h2 className="" style={{fontFamily: 'Goldman', color: '#5A9CB6'}}>Let Us Mine Crypto for you!</h2>
                <p className="">Autominer will mine your cryptocurrency for you with our improved mining hardware at a global competitive rate, ensuring that you receive your 100% mining rewards without hassle!</p>
            </div>
            <div className="joinSize">
                <img className="" alt="image" src={mine} />
            </div>
        </div>
        <br/>
        <br/>
        <div className="JoinSec">
            <div className="joinSize">
                <h2 className="" style={{fontFamily: 'Goldman', color: '#5A9CB6'}}>Earn Crypto Automatically Build Your Future</h2>
                <p className="">We distribute mining rewards as well as referral rewards automatically into your wallet address. Check your mining potential based on your mining plan!</p>
            </div>
            <div className="joinSize">
                <img className="" alt="image" src={reward} />
            </div>
        </div>
        <br />
        <br />
    </div>


</section>


)

}

export default JoinUs;