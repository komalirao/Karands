import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBInput, MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Header from "../objSurvey/Header";
//import { onetimepass, userApi } from "../../../services/UserService";
import OTPInput from "../signup/OTPInput";
import ChangeNumber from "../signup/ChangeNumber";


export default function Verification() {

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOTPSubmit = (otp) => {
    // TODO: Verify OTP and update phone number
    setPhoneNumber('123-456-7890'); // Example phone number
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
 
  
  const [otpobj, setOtpObj] = React.useState({ otp: "", password: "", confirm: "" })
  
  const [otpConatinerStyle, setOtpConatinerStyle] = useState("")
  const [passwordConatinerStyle, setPasswordContainerStyle] = useState("")
  const [confirmConatinerStyle, setConfirmContainerStyle] = useState("")
  const [otpError, setOtpError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmError, setConfirmError] = useState("")


 

  
  
  const navigate = useNavigate();

  const validatePassword = () => {
    let password = otpobj.password;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
    } else {
      setPasswordError("");
    }
  }


  const btnClick = () => {

    if (otpobj.otp === "") {
      setOtpError("Please enter the OTP");
      setOtpConatinerStyle("border-danger");
    }

    if (otpobj.password === "") {
      setPasswordError("Please enter your password");
      setPasswordContainerStyle("border-danger");
    }
    if (otpobj.confirm === "") {
      setConfirmError("Please enter your confirm password");
      setConfirmContainerStyle("border-danger");
    }

    if (otpobj.password !== "" && otpobj.confirm !== "") {

      if (otpobj.password !== otpobj.confirm) {
        setConfirmError("Confirm password doesn't match");
        setConfirmContainerStyle("border-danger");
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
      <Header />
      <MDBContainer
        className="p-3 my-5 d-flex flex-column"
        style={{ width: "400px" }}
      >
        <div>
          <span className="bi bi-envelope-fill mb-3"></span>
          <h2 className="mb-3 ">Verify it's you</h2>
          <p className="mb-3">
            We just sent a message to the phone number you entered. Please{" "}
            <b> enter the code </b>you receive below.
          </p>
          <MDBInput
            wrapperName="mb-2"
            type="otp"
            id="form1Example1"
            placeholder="OTP"
            className={otpConatinerStyle}
          />
          <p style={{ color: "red", fontSize: "12px", textAlign: "left", marginTop: "0" }}>{otpError}</p>

          <MDBInput
            wrapperName="mb-2"
            type="password"
            id="form1Example1"
            placeholder="Password"
            className={passwordConatinerStyle}
          />
          <p style={{ color: "red", fontSize: "12px", textAlign: "left", marginTop: "0" }}>{passwordError}</p>
          <MDBInput
            wrapperName="mb-2"
            type="password"
            id="form1Example2"
            placeholder="Re-enter Password"
            className={confirmConatinerStyle}
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
            <Link  data-bs-toggle="modal" data-bs-target="#exampleModal"style={{ textDecoration: "none" }}>
              View Number
            </Link>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">your number</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div className="m-4 mt-2">
                <lable className="me-2" >Your number</lable>
                <input type="mobile" placeholder="You entered number"/>
                </div>
                <ChangeNumber/>
                </div>
                <div class="modal-footer">
                 {/* <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>*/}
                  <button type="button" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
