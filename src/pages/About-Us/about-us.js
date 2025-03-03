import React from "react";
import "./about-us.css";
import miningSolution from "../../assets/mining-solution.png";
import visionIcon from "../../assets/Vision-icon.png";
import missionIcon from "../../assets/mission-icon.png";
import coreValuesIcon from "../../assets/core-value-icon.png";
// import missionBg from "../../assets/mission-bg.png";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/Footer/footer";
import Ceo from "./ceo.jpeg";

const AboutUs = () => {
  return (
<>
<Navigation />
    <div className="about-us-container">

      <div className="who-we-are">
        <img src={Ceo} alt="hero-frame" />
        <div className="who-we-are-text-container">
          <h1 className="who-we-are-text">Who We Are</h1>
          <p className="who-we-are-subtext">
          Autominer is a global cloud mining platform  in partnership with blockchain.com ,
           that offers hash power. Since 2018 and founded by  <strong> Jace Cohen (ceo)</strong>, our experienced team has
            been at the forefront of the cryptocurrency mining field. Our
            platform specializes in providing comprehensive solutions for
            mining, including equipment supply, service and repair, warranty
            support, and the best mining equipment available. We offer Antminer
            S9, Antminer L3+, Whatsminer M3X, and Antminer D3, ensuring
            automatic bitcoin payouts directly to investors' wallet addresses.
          </p>
          <p className="who-we-are-subtext">
            Driven by our vision to acquire and host our mining equipment
            operations, we have established our primary site in Toronto, Canada,
            and Australia, complete with all necessary mining infrastructure. A
            dedicated team of professional miners oversees equipment operations
            and provides exceptional service maintenance.
          </p>
        </div>
      </div>
      <div className="middle-text">
        <p>
          With over 500,000 satisfied users worldwide, Autominer has earned the
          trust of investors through our expertise and technological services.
          Our track record speaks for itself, and we are proud to have garnered
          a reputation as a trusted partner in the mining industry. Become a
          member today and experience the simplicity, reliability, and
          profitability of our mining solutions. Trust in our expertise and let
          us guide you towards success in the world of Bitcoin mining!
        </p>
      </div>

      <div className="vision-statement">
        <div className="vision">
          <img src={visionIcon} alt="vision-icon" />
          <div>
            <h2>Vision</h2>
            <p>
              To help you enter and better understand the world of #1
              cryptocurrency and avoid any issues you may encounter.
            </p>
          </div>
        </div>

        <div className="mission">
          <div>
            <h2>Mission</h2>
            <p>
              To make crypto investing accessible to all, providing a
              user-friendly platform that empowers individuals to grow their
              wealth through cryptocurrencies and achieve financial
              independence.
            </p>
          </div>
          <img src={missionIcon} alt="mission-icon" />
        </div>

        <div className="core-value">
          <img src={coreValuesIcon} alt="core-value-icon" />
          <div>
            <h2>Core Values</h2>
            <p>
              Open and transparent markets, commitment to widespread adoption,
              and pioneering spirit for the investment in bitcoin.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};


export default AboutUs;