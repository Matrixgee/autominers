import VerificationCode from "../component/CodeVerifications/VerificationCode";
import { useState } from "react";
import logo from './img/full-logo.png';
const SignUpVerification = () => {
    const [loading, setLoading] = useState(false);

    
    return(
      <div className="verifyCont">
      <div className="logoSession">
      <img src={logo} alt="logo" />
      </div>
        <div className="codeInput">
        <h1>One more step to go.......</h1>
        <p>Kindly input the six digit verification code sent to your registered email below</p>
<VerificationCode
  length={6}
        label="Code Label"
        loading={loading}
        onComplete={code => {
          setLoading(true);
          setTimeout(() => setLoading(false), 10000);
        }}
 />
<p className="resend">No code yet? <a href="#" >Resend code</a></p>
        </div>
        </div>
    )

}
export default SignUpVerification;