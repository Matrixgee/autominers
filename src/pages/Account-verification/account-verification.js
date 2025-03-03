import React, { useState } from "react";
import "./account-verification.css";
import Logo from "../../assets/full-logo.png";


const AccountVerification = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const otpString = inputValues.join("");
      const otpNumber = parseInt(otpString, 10);

      const userDataWithOtp = { otp: otpNumber };
      const response = fetch('http://localhost:5427/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDataWithOtp)
      })
      if (response.ok) {
        return;
      }
    } catch (error) {
      console.error(`Error during registration: ${error}`)
    }
  }
  return (
    <div className="otp-container">
      <img src={Logo} alt="autominer-logo" />
      <div className="inner-container">
        <h1>One more step to go.....</h1>
        <p className="otp-subtext">
          Kindly input the six digit verification code sent to your registered
          email below
        </p>
        <form>

          <div id="inputs" class="input-container">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                class="input-field"
                type="text"
                inputmode="numeric"
                maxlength="1"
                tabIndex={index}
                name={`input${index}`}
                id={`input${index}`}
                onChange={handleInputChange}
              />
            ))}
          </div>

          {/* <button onClick={handleSubmit()}>
        verify otp
        </button> */}
        </form>
        <p className="resend">
          No code yet?<span>Resend code</span>
        </p>
      </div>
    </div>
  );
};

export default AccountVerification;
