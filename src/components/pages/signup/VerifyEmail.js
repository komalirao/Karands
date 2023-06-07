import React, {useState} from 'react';
import { MDBInput, MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { useNavigate} from "react-router-dom";
import Header from "../objSurvey/Header";
//import { onetimepass, userApi } from "../../../services/UserService";


export default function VerifyEmail() {
  // const location = useLocation();
 
  const [otpobj, setOtpObj] = React.useState({ otp: "", password: "", confirm: "" })
  
  const [otpConatStyle, setOtpConatStyle] = useState("")
  const [passwordConatStyle, setPasswordContaStyle] = useState("")
  const [confirmConatStyle, setConfirmContaStyle] = useState("")
  const [otpError, setOtpError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const takeOtp = (event) => {
    
    console.log(otpobj)
   
    setOtpObj((prevState) => ({ ...prevState, otp: event.target.value }))
  }

  const takePassword = (event) => {
   
    setOtpObj((prevState) => ({ ...prevState, password: event.target.value }))
  }
  const takeConfirm = (event) => {
    
    setOtpObj((prevState) => ({ ...prevState, confirm: event.target.value }))
  }
  const navigate = useNavigate();

  const validatePassword = (e) => {
   
    let password = otpobj.password;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
    } else {
      setPasswordError("");
    }
  }

    
    const btnClick = (e) => {
      e.preventDefault();
      if (otpobj.otp === "") {
        setOtpError("Please enter the OTP");
        setOtpConatStyle("border-danger");
      }
  
      if (otpobj.password === "") {
        setPasswordError("Please enter your password");
        setPasswordContaStyle("border-danger");
      }
      if (otpobj.confirm === "") {
        setConfirmError("Please enter your confirm password");
        setConfirmContaStyle("border-danger");
      }
  
      if (otpobj.password !== "" && otpobj.confirm !== "") {
  
        if (otpobj.password !== otpobj.confirm) {
          setConfirmError("Confirm password doesn't match");
          setConfirmContaStyle("border-danger");
        }
        else {
          // onetimepass(otpobj)
          // userApi(regUserObj)
          navigate("/regasiuichp");
        }
      }
    };
    console.log(otpobj.otp);

  return (
    <div>
    <Header/>
    <MDBContainer
        className="p-1 d-flex flex-column"
        style={{ width: "400px" }}
      >
        <form className=''>
          <span className="bi bi-envelope-fill"></span>
          <h2 className="mb-3 ">Verify it's you</h2>
          <p className="mb-3">
            We just sent a mail to your Email you entered. Please
            <b> enter the code </b>you received.
          </p>
          <MDBInput
            type="otp"
            id="form1Example1"
            placeholder="OTP"
            onChange={takeOtp}
            className={otpConatStyle}
          />
          <p style={{ color: "red", fontSize: "12px", textAlign: "left", marginTop: "0" }}>{otpError}</p>

          <MDBInput
            
            type="password"
            id="form1Example1"
            placeholder="Password"
            onChange={takePassword}
            className={passwordConatStyle}
          />
          <p style={{ color: "red", fontSize: "12px", textAlign: "left", marginTop: "0" }}>{passwordError}</p>

          <MDBInput
           
            type="password"
            id="form1Example2"
            placeholder="Re-enter Password"
            onChange={takeConfirm}
            className={confirmConatStyle}
            onKeyDown={validatePassword}
          />
          <p style={{ color: "red", fontSize: "12px", textAlign: "left", marginTop: "0" }}>{passwordError}</p>


          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center"></MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>

          <button
            className="mb-4 w-100 btn btn-primary"
            type="submit"
            onClick={btnClick}
          >
            Verify
          </button>
          <div className="d-flex justify-content-between">
            <a href="/" style={{ textDecoration: "none" }}>
              Resend OTP
            </a>
           
          </div>
        </form>
      </MDBContainer>
    
    </div>
  )
}
