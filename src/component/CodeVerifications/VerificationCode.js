import React, { useState, useRef } from "react";
import './VerificationCode.css';
import { useNavigate } from "react-router-dom";
const VerificationCode = ({ length, label, loading, onComplete }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const[incorrect,setIncorrect] = useState(false);
  const inputs = useRef([]);
  const navagation = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const otpString = code.join("");
      const otpNumber = parseInt(otpString, 10);

      const userDataWithOtp = { otp: otpNumber };
      console.log(`data sending is ${userDataWithOtp.otp}`)
      const response = fetch('http://localhost:5427/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDataWithOtp)
      })
      const dataResp = (await response).statusText;
      if ( (!response.status === 200) | (!response.status ===201))  {
          throw (dataResp);
      };
     const codeDir = '/account/deposit';
     setIncorrect(false);
      navagation(codeDir);
      if (response.status === 400) throw (dataResp);
    } catch (error) {
      setIncorrect(true);
    }
  }

  const processInput = (e, slot) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every(num => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };
  const handleVerify = () => {

  }

  return (
    <form className="code-input" onSubmit={(e) => handleSubmit(e)}>
      <label className="code-label">{label}</label>
      <div className="code-inputs">
        {code.map((num, idx) => {
          return (
            <input
              key={idx}
              type="text"
              style={{borderColor: incorrect? 'red': null}}
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              readOnly={loading}
              onChange={e => processInput(e, idx)}
              onKeyUp={e => onKeyUp(e, idx)}
              ref={ref => inputs.current.push(ref)}
              className={!true? 'error': 'success'} // success and error class
            />
          );
        })}
        
      </div>
      <button onClick={handleVerify} className="btn verify-btn"> Verify</button>
    </form>
  );
};

export default VerificationCode;
