import React, { useState } from "react";
import "./fund-account.css";
import { Link } from "react-router-dom";



const FundAccount = () => {
  const [selection, setSelection] = useState("");
  const [textInput, setTextInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "selection") {
      setSelection(value);
    } else if (name === "textInput") {
      setTextInput(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selection:", selection);
    console.log("Text Input:", textInput);
  };
  return (
    <div className="fund-account_container">
      <div className="first-side">
        <div className="heading-text">
          <h1>Deposit</h1>
          <h1>&</h1>
          <h1>Withdraw</h1>
          <h1>Securely</h1>
        </div>
      </div>
      <div className="second-side">
        <div className="text-container">
          <h2>You're almost done setting up ......</h2>
          <p className="sub-head">
            Kindly select any of the account to fund your investment
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="selection" className="label">
                Coin Type
              </label>
              <select
                id="selection"
                name="selection"
                value={selection}
                onChange={handleInputChange}
              >
                <option value="">Select coin type</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="textInput" className="label">
                Wallet Address
              </label>
              <input
                type="text"
                id="textInput"
                name="textInput"
                value={textInput}
                onChange={handleInputChange}
                placeholder="Copy Wallet Address"
              />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="checkbox-label">
                I agree to the<Link to="/terms-and-conditions"> Terms of Use</Link> and
                <Link to="/privacy-policy"> Privacy Policy.</Link>
              </label>
            </div>

            <div className="btn-cont">
              <button id="btn" type="submit">
                Fund Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FundAccount;
