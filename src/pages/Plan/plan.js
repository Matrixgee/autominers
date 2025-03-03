import React, { useState } from "react";
import "./plan.css";
import starterImg from "../../assets/starter-image.png";
import professionalImg from "../../assets/professional-img.png";
import advanceImg from "../../assets/advance-img.png";
import weeklyImg from "../../assets/Weekly webinar.png";
import Footer from "../../component/Footer/footer";
import Prompt from "../../component/Prompt/prompt";
import Navigation from "../../component/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import cookies from 'js-cookie';

const Plan = () => {
  const [isStarterPrompt, setisStarterPrompt] = useState(false);
  const [isProPrompt, setIsProPrompt] = useState(false);
  const [text, setText] = useState({});
  const [isAdvancePrompt, setIsAdvancePrompt] = useState(false);
  const navagation = useNavigate();
  const plans = {

    starter: {
      plan: 'Starter',
      machine: 'AntMiner S7',
      power: 'Power Efficiency: 0.25 W/GH',
      min: 0.01,
      max: 0.025,
      durations: 'Duration: Two (2) days of mining',
      imgSrc: starterImg
    },

    professional: {
      plan: 'Professional',
      machine: 'Avalon 6',
      power: 'Power Efficiency: 0.29 W/GH',
      min: '0.26',
      max: '0.90',
      durations: 'Duration: Fourteen (14) days of mining',
      imgSrc: professionalImg
    },

    advance: {
      plan: 'Advance',
      machine: 'AntMiner S9',
      power: 'Power Efficiency: 0.098 W/GH',
      min: '1 btc',
      max: '6 btc',
      durations: '70days of mining',
      imgSrc: advanceImg
    }

  }

  const handleClickStarter = () => {
    setText(
      {
        plan: {
          type: 'Starter',
          machine: 'AntMiner S7',
          power: 'Power Efficiency: 0.25 W/GH',
          min: 0.01,
          max: 0.025,
          durations: 'Duration: Two (2) days of mining',
          imgSrc: starterImg
        },

        paragraphs: [
          "This plan uses the Antminer S7 pro 110 device to mine your cryptocurrency.",
          "It takes in a minimum of 0.01 BTC and a maximum of 0.25 BTC for this plan.",
          "The maturity turnaround time for this plan is two (2) days of mining with an automatic payout into your wallet address"
        ]
      }
    );
    setIsProPrompt(!isProPrompt);
  };
  const handleClickPro = () => {
    setText(
      {

        plan: {
          type: 'Professional',
          machine: 'Avalon 6',
          power: 'Power Efficiency: 0.29 W/GH',
          min: 0.26,
          max: 0.90,
          durations: 'Duration: Fourteen (14) days of mining',
          imgSrc: professionalImg
        },

        paragraphs: [
          "This plan uses the Avalon 6 device to mine your cryptocurrency.",
          "It takes in a minimum of 0.26 BTC and a maximum of 0.90 BTC for this plan.",
          "The maturity turnaround time for this plan is fourteen (14) days of mining with an automatic payout into your wallet address"
        ]
      }
    );
    setIsProPrompt(!isProPrompt)
  }
  const handleClickAdvance = () => {
    setText({
      plan:{
        type: 'Advance',
        machine: 'AntMiner S9',
        power: 'Power Efficiency: 0.098 W/GH',
        min: 1,
        max: 6,
        durations: '70days of mining',
        imgSrc: advanceImg
      },
      paragraphs: [
        "This plan uses the Antminer S9 device to mine your cryptocurrency.",
        "It takes in a minimum of 1 BTC and a maximum of 6 BTC for this plan.",
        "The maturity turnaround time for this plan is seventy (70) days of mining with an automatic payout into your wallet address"
      ]
    }
    );
    setIsProPrompt(!isProPrompt)
  }
  const closeModal = () => {
    setText([
    ]);
    setIsProPrompt(false);

  }

  const handleContinue = (pn) => {
   localStorage.setItem('plans',(pn))
    navagation('/plan-creation');
  }
  return (
    <main className="HomeMain">
      <Navigation />
      <div className="plan-hero-section">
        <div className="plan-text-div">
          <h2>
            Choose Your Mining Adventure: Unlock Your Wealth with Our Dynamic
            Plans!
          </h2>
          <p>
            Select a plan tailored to your investment goals and start mining
            your way to success today!
          </p>
          <button className="plan-section-btn">EXPLORE PLANS</button>
        </div>
      </div>
      <div className={isProPrompt ? 'popup' : 'popoff'} onClick={closeModal}>
        <div>
          {isProPrompt && (
            <Prompt

              text={text.paragraphs.map((results) => (
                <p> {results.p}</p>
              ))}
              handleContinue={handleContinue(JSON.stringify(text))}
            />
          )}
        </div>
      </div>

      <div className="select-plan">
        <h2>Please Select Your Preferred Plan</h2>
      </div>

      <div className="about-plans">
        <h2 style={{ textAlign: 'center', color: '#accedb' }}>Get to know our plans</h2>
        <div className="twoItem">
          <img src={starterImg} alt="starter" className="twoimg" />
          <div className="secondtwo">
            <h3>{plans.starter.plan}</h3>
            <p>{plans.starter.machine}</p>
            <p>{plans.starter.power}</p>
            <p>Minimum: {plans.starter.min}</p>
            <p>Maximum:{plans.starter.max}</p>
            <p>{plans.starter.durations}</p>
            <button className="start-mining-btn" onClick={handleClickStarter}>
              Start Mining
            </button>

          </div>
        </div>

        <div className="twoItem">
          <div className="secondtwo">
            <h3>{plans.professional.plan}</h3>
            <p>{plans.professional.machine}</p>
            <p>{plans.professional.power}</p>
            <p>Minimum: {plans.professional.min}</p>
            <p>Maximum:{plans.professional.max}</p>
            <p>{plans.professional.durations}</p>
            <button className="start-mining-btn" onClick={handleClickPro}>Start Mining</button>

          </div>
          <img src={professionalImg} alt="starter" className="twoimg" />
        </div>

        <div className="twoItem">
          <img src={advanceImg} alt="starter" className="twoimg" />
          <div className="secondtwo">
            <h3>{plans.advance.plan} </h3>
            <p>{plans.advance.machine}</p>
            <p>{plans.advance.power}</p>
            <p>Minimum: {plans.advance.min}</p>
            <p>Maximum:{plans.advance.max}</p>
            <p>{plans.advance.durations}</p>
            <button className="start-mining-btn" onClick={handleClickAdvance}>Start Mining </button>

          </div>
        </div>
      </div>

      <div className="know-about-btc">
        <div className="middleSession">
          <h2 className="heading">
            Want to get to Know better about Bitcoin Mining?
          </h2>
          <p>
            Subscribe to our weekly webinar series, and get undiluted tips from
            top investors on how they make their way to financial freedom.
          </p>
          <p>Tune in every Wednesday and Friday 18:00 WAT</p>
          <img src={weeklyImg} alt="webinar video" />
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Plan;
