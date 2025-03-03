import React from 'react';
import "./admin-component.css";


export default function AdminComponent({id,firstname,emailaddress,cointype,amount, walletaddress,country,action}){
    return(
        <div className='container'>
            <p>{id}</p>
            <p>{firstname}</p>
            <p>{emailaddress}</p>
            <p>{cointype}</p>
            <p>{amount}</p>
            <p>{walletaddress}</p>
            <p>{country}</p>
            <p>{action}</p>
        </div>
    )
}