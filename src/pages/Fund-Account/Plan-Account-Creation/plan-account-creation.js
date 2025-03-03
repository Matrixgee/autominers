import React from 'react';
import './plan-account-creation.css';
import menshaking from "../../../assets/men-shaking.png";
import bitcoin from "../../../assets/bitcoin.png";
import { Link } from 'react-router-dom';

const PlanAccountCreation = () => {
 return(
<div className='account-creation-container'>
<div className='account-image-container'>
    <img src={menshaking} alt="two men giving high fives"/>
</div>
<div className='welcome-container'>
    <img src={bitcoin} alt="bitcoin" />
 <div className='welcome-text-container'>
     <h1>Welcome Miner!</h1>
     <p>We are glad to have you in our community of incredible crypto miners.</p>
     <h2>Do you have an account with us?</h2>
     <h2>I have an account</h2>
     <Link to="/login" id="log-in">Login</Link>
     <h2>I'm new here!</h2>
     <Link to="/sign-up" id="sign-up">Sign Up</Link>
 </div>
 <p className='copyright'>&copy; Copyright 2020 autominner</p>
</div>
</div>
 )
}

export default PlanAccountCreation;