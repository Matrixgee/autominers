import React from "react";
import create from '../img/main.jpg';
const Showcase = (prop) => {
    return(
        <section className="section overflow-hidden showcase" style={{backgroundImage: 'url( '+ create +') ',textAlign:'center'}}>
        <div className="showcaseCnt">
            <div className="">
                <div className="">
                    <h3 className="text-giga text-center" style={{fontFamily: 'Goldman'}}>Cryptocurrency is Easy,<br /> we will help you take care of it!</h3>
                    <p className="text-lg text-center max-w-lg" style={{fontFamily: 'Poppins'}}>Leave the Complexity to Us and Enjoy Hassle-Free Cryptocurrency Management!</p>
                    <button type="button" className="outline main-outline">Get Started</button>
                </div>
            </div>
        </div>
    </section>
    );
}


export default Showcase;