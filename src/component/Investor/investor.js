import React from 'react';
import "./investor.css";


export default function Investor({name,crypto, reward}){
    return(
        <div className='investor-container'>
            <p>{name}</p>
            <p>{crypto}</p>
            <p>{reward}</p>
        </div>
    )
}