import './signup.css'
import logo from './img/full-logo.png';
import signupImg from './img/signupbg.png';
import whiteLogo from '../assets/logos/AutoMiner/LogoFile/logoWhite.png';
import SignupForm from './SignupForm'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import md5  from "md5";
import cookies from 'js-cookie';

const Signup = () => {
  const [fname, setFName] = useState('');
  const [lname, setLastName] = useState('');
  const [Email, setEmail] = useState('');

  const [userN, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [Error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [success,setSuccess] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChecked = () => {
    setChecked(!checked);
  }

  const data = {
    firstname: fname,
    lastname: lname,
    email: Email,
    username: userN,
    password: password
}
const navagation = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
try{
        const response =  await fetch('http://localhost:5427/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }); 
        const dataResp = await response.json();
        if ( (!response.status === 200) | (!response.status ===201))  {
            throw (`an error occured`);
        };
        if (!response.ok) throw new Error(dataResp.message)
        if (response.status === 400) throw (dataResp.message);
        const DataHash = md5(userN);
        const codeDir = `/account-verification/?'${DataHash}`;
        setSuccess(true)
      cookies.set('access_token',dataResp.accessToken)
        console.log(codeDir)
        navagation(codeDir);

      
    }catch(err)  {
        console.log(err);
        setError(err);
        setHasError(true);
        setSuccess(false)
    }
        
}
const PasswordMatch = () =>{
    if (password !== confirmPassword) {
        setHasError(true);
        setError('Password mismatched');
      }
      if (password === confirmPassword) {
        setError('')
        setHasError(false);
      }
}
  const handlecPassword = (pValue) => {
    //  if (!pValue)  return;
    setConfirmPassword(pValue);
  }

  const handleFirstName = (fValue) => {
    // if(!fValue) return;
    setFName(fValue)
  }
  const handleLastName = (LValue) => {
    //  if(!LValue) return;
    setLastName(LValue)
  }
  const handlePassword = (PsValue) => {
    // if (!PsValue) return
    setPassword(PsValue)
  }
  const handleUsername = (uValue) => {
    // if (!uValue) return
    setUsername(uValue)
  }
  const handleEmail = (eValue) => {
    // if (!eValue) return
    setEmail(eValue)
  }

  return (
    <div>
      <div className="signup_container">
        <div className='login-logo'>
          <img src={logo} className='' alt='' />
        </div>
        <div className="form_container">
          <div className="left">
            <div className="signupImg">
              <img src={signupImg} alt="" />
            </div>

            <div className="bottomItem">
              <div className="leftitem">
                <p>&copyright Autominner 2023</p>
              </div>

              <div className="rightitem">
                <p>help@autominner.com</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="main_items">
              <h3 className="heading2">Start Investing for free</h3>
              <p>
                Create your 100% free account and start mining your prefered
                cryptocurrency!
              </p>
              {hasError && (
                <ul className="Error_cnt">
                  <li>{Error}</li>  
                </ul>
              )  }
              
            {success && (
                <ul className="Success_cnt">
                  <li>Success</li>
                </ul>
              )}
              <SignupForm
                logo={logo}
                fname={fname}
                lname={lname}
                Email={Email}
                userN={userN}
                password={password}
                confirmPassword={confirmPassword}
                hasError={hasError}
                handleFirstName={handleFirstName}
                handleLastName={handleLastName}
                handleEmail={handleEmail}
                handleUsername={handleUsername}
                handlePassword={handlePassword}
                handlecPassword={handlecPassword}
                checked={checked}
                handleChecked={handleChecked}
                handleSubmit={handleSubmit}
                PasswordMatch={PasswordMatch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup