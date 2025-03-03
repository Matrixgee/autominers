import React from "react";
import './atautominner.css';
import videoImg from './imgs/video.png';

const AtAutominner = () => {

return(
    <section className="section container-2 Atautominner">
        <div className="">
            <div className="atautominnerCnt"> 
               
                  <div className="">
                    <h2 className="heading" >At Autominer</h2>
                          <p className="">We are passionate about the world of cryptocurrencies particularly Bitcoin. we offer unique opportunity to capitalize on the incredible potential of Bitcoin mining! 
                    A place for everyone who wants to mine Bitcoin. Deposit funds through your wallet address/crypto exchange. Instant withdrawal of bitcoins to your registered wallet is guaranteed. Nothing extra.
                    Join our poll of over 700,000 users from all over the world satisfied with our services. Together, we will navigate the exciting world of cryptocurrencies and secure your dream future!</p>
                         <button className="outline" type="submit">Learn More</button>
                    <br/>
                
                    </div>



                <div className="">
                    <img className="" alt="image" src={videoImg} />
                    <br/>
                </div>
</div>
            </div>
      
    </section>
)

}

export default AtAutominner;