import React, { useRef, useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import logo from './img/colorLogo.png';
import loginImg from './img/LoginBackground.png';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from "react-router-dom";
import cookies from 'js-cookie';




const Login = () => {
  const navagation = useNavigate();
  const pasRef = useRef();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [error,setError] = useState(false);
  const [message,setMessage] = useState('');
  const [loading,setLoading]  = useState(false);
  const [success , setSuccess] = useState(false);

  const [visible, setVisibility] = useState(false);
  const handleDetails = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }
  const showPassword = () => {
    setVisibility(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {

      const response = await fetch('http://localhost:5427/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const dataResp = await response.json();
      // if (!response.ok) throw new Error(dataResp.message)
      cookies.set('access_token',dataResp.accessToken)
     setSuccess(true);
     setError(false)
     navagation('/account/dashboard')
   
    } catch (error) {
      console.log(error)
      setSuccess(false);
      setError(true);
      setMessage('Invalid login details')
     
    } finally{

      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className='login-logo'>
        <img src={logo} className='' alt='' />
      </div>
      <div className='form_container'>      
        <div className='first_cont'>
          <div className='loginForm'>
             <div className={error?'ErrorMsg': ''}> 
           {   error && (<p className='Msg'>{message}</p>)}
              { 
                success && (
                  <p className='Msg'> Logging...in </p>
                )
              }
            </div> 
             <form>
              <h5 className='heading2'>Welcome Palito</h5>
              <p>Let's begin your journey to being an extraordinary crypto investor!</p>
              <div className='inputContainer'>
                  <div className="emailCont">
                    <label htmlFor='email'>
                      Email Address
                    </label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      value={data.email}
                      placeholder='example@gmail.com'
                      onChange={(e) => handleDetails(e)} 
                    />
                  </div>
                  <div className='passwordCnt' >
                    <label htmlFor='password'>Password</label>
                    <input
                      type={visible ? 'text':'password'}
                      name='password'
                      id='password'
                      placeholder='********'
                      value={data.password}
                      onChange={(e) => handleDetails(e)} 
                    />
                      <span
                          className='showpass'
                          onClick={showPassword}> {
                          visible ? <VisibilityIcon /> :<VisibilityOffIcon />
                        }
                      </span>
                  </div>
                  <p className='forgetPassword'><a>Forget Password</a></p>
                </div>
                <div className="buttonContainer">
                  <div className='btn-Container'>
                    <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Login</button>
                    <button className='btn btn-white'><i className="fa fa-google icon" aria-hidden="true"></i>Sign In with Google</button>
                    <button className='btn btn-white' ><i className="fa fa-apple icon" aria-hidden="true"></i>Sign In with Apple</button>
                  </div>
                  <p className='dontHaveAccount'>Don't have an account? <Link to='/sign-up' ><strong>Sign Up </strong></Link></p>
              </div>
            </form> 
          </div>
        </div>
        <div className='sec_cont'>
          <div className='loginImg'>
            <img src={loginImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
Login.prototypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
export default Login;