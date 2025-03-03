import React from "react";
import "./plan-creation.css";
import autominerLogo from "../../assets/logos/AutoMiner/LogoFile/white.png";
import starterImage from "../../assets/starter-image.png";
import DiscreteSliderSteps from "./Slider";
import country from './country.json';

const PlanCreation = () => {
  const planData = JSON.parse(localStorage.getItem('plans'));
  // country.map( (data) => console.log(data.name))
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch data from form fields
    const formData = {
      address: event.target.wallet.value,
      coinType: event.target.coinType.value,
      amount: event.target.amount.value,
    };

    try {
      const response = await fetch('http://localhost:5427/api//payment/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        console.log(formData)
      } else {
        console.error('Failed to send data to the backend');
      }
    } catch (error) {
      console.error('Error during data submission:', error);
    }
  };
  return (
    <div className="plan-creation-container">
      <div className="first-side-container" >
        <img src={autominerLogo} alt="autominer logo" style={{ height: '50px' }} />
        <div className="form-container">
          <p className="fc-header-text">
            Let’s Get You Set Up for your Investment ....
          </p>
          <p className="subheader-text">
            Kindly fill in the fields below to fund your account for your
            investment
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="textInput" className="label">
                Referral Code
              </label>
              <input placeholder="0123456789" />
            </div>
            <div>
              <label htmlFor="textInput" className="label">
                Wallet Address
              </label>
              <input
                placeholder="Input your Wallet Address"
                name="wallet"
                required
              />
            </div>
            <div>
              <label htmlFor="selection" className="label">
                Country
              </label>
              <select id="country-selection" required>
                <option value=" Select Your Country" disabled>
                  Select Your Country
                </option>
                {country.map((data) => (
                  <option key={data.code} value={data.code}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="selection" className="label">
                Coin Type
              </label>
              <select id="coin-selection" name="coinType" required>
                <option value="Select coin Type" >
                  Select Coin Type
                </option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
                <option value="ltc">LITECOIN 3</option>
              </select>
              <label htmlFor="textInput" className="label">
                Amount
              </label>
              <input
                type="number"
                placeholder="0.001"
                min={planData.plan.min}
                max={planData.plan.max}
                step="0.001"
                name="amount"
                required
              />

            </div>
            <button className="continue-btn" type="submit"
            // onClick={ }
            >Continue</button>
          </form>
        </div>
      </div>
      <div className="second-side-container">
        <img src={planData.plan.imgSrc} alt="starter-image" />
        <div className="info-container">
          {
            planData.paragraphs.map((data) => (
              <p key={data}>{data}</p>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PlanCreation;
