import React from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRef,useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = ({
    fname,
    lname,
    Email,
    userN,
    password,
    confirmPassword,
    handleSubmit,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleUsername,
    handlePassword,
    handlecPassword,
    checked,
    handleChecked,
    PasswordMatch,
  
}) => {
    
    const [show, showPassword] = useState(false);
    const passRef = useRef('');

const handleShowPassword = () => {
  showPassword(!show);
}

return (
  <form className="Register-form" onSubmit={(e)=> handleSubmit(e)}>
  
    <div className="twoRows" >
      <div className="firstnameCont">
        <label htmlFor="fname">First Name</label>
        <input
          className="input"
          type="text"
          name="fname"
          id="fname"
          placeholder="Input first Name"
          onChange={(e)=> handleFirstName(e.target.value)}
          value={fname}
          required
        />
      </div>
        
      <div className="lastnameCont">
        <label htmlFor="lname">Last Name</label>
        <input
          className="input"
          type="text"
          name="lname" 
          id="lname"
          placeholder="Input Last Name"
          value={lname}
          onChange={(e)=>handleLastName((e.target.value))}
          required
        />
      </div>
    </div>


    <div className="twoRows" >
      <div className="emailCont">
        <label htmlFor="email">Email Address</label>
        <input 
          type="email"
          className="input"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          value={Email}
          onChange={(e)=>handleEmail(e.target.value)} 
          required
        />
      </div>
        
      <div className="usernameCont">
        <label htmlFor="username">Username</label>
        <input 
          type="username"
          id="username"
          className="input"
          placeholder="input username"
          onChange={(e)=> handleUsername(e.target.value)} 
          value={userN}
          required
        />
      </div>
    </div>


    <div className="twoRows" >
      <div class="passwordCnt">
        <label htmlFor="password">Password</label>
        <input 
          type={ show ? 'text':'password'}
          name="password"
          className="input"
          placeholder="*********"
          value={password}
          onChange={(e) =>handlePassword(e.target.value)} 
          onBlur={PasswordMatch}
          required
        />
          <span class="showpass">
            {
              show ? (
                  <VisibilityIcon 
                  className="signupicon" 
                  style={{color: "rgb(5, 103, 141)"}} 
                  onClick={handleShowPassword}
                  />
              ) : ( <VisibilityOffIcon 
              onClick={handleShowPassword}
              className="signupicon" 
              style={{color: "rgb(5, 103, 141)"}}  

              />)
            }
          </span>
      </div>

      <div className="passwordCnt">
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          className="input"
          type={ show ? 'text':'password'}
          value={confirmPassword}
          name="cpassword"
          id="cpassword"
          placeholder="********"
          onChange={(e)=> handlecPassword(e.target.value)}
          onBlur={PasswordMatch}
          required
        />
        <span className="showpass"> 
          {show ? (
            <VisibilityIcon 
              className="signupicon"
              style={{color: "rgb(5, 103, 141)"}}
              onClick={handleShowPassword}
            />) : ( 
            <VisibilityOffIcon
              className="signupicon" 
              style={{color: "rgb(5, 103, 141)"}} 
              onClick={handleShowPassword}
            /> )
          }
        </span>
      </div>
    </div>
  
    <div className="FlexDisplay">
      <input
      type="checkbox" 
      className="checked" 
      onChange={handleChecked}
      checked={checked}
      required
      />
      <p>
        I agree to the <Link to="" className="policy">Terms of use</Link> and <Link to="/privacy-policy" className="policy">Privacy Policy</Link>
      </p>
    </div>

    <div className="btn-Container">
      <button className="btn btn-primary">Create an account</button>

      <button className="btn btn-white">
        <i className="fa fa-google" aria-hidden="true"></i>Sign Up with Google
      </button>
      <button className="btn btn-white">
        <i className="fa fa-apple" aria-hidden="true"></i>Sign Up with Apple
      </button>

      <p className="dontHaveAccount">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
    
  </form>
    );
}

export default SignupForm;
