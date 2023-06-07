import React, { useState } from "react";
//import { Navigate, useNavigate } from "react-router-dom";
import Header from "../objSurvey/Header";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate;

  function handleChange(e) {
    setEmail(e.target.value);
  }
  const handleCheck = (e) => {
    e.preventDefault();
    const regExp = /^[a-zA-Z0-9]+@[a-z]+\.[com]{2,6}$/;
    if (regExp.exec(email)) {
      navigate(`/verifyEmail`);
    } else if (email === "") {
      setMessage("Please Enter Email");
    } else if (!regExp.exec(email)) {
      setMessage("Email is not valid");
    }
  };

  return (
    <div>
      <Header />
      <h3 className="text-dark mt-4">Reset your password</h3>
      <p>Enter a valid Email to Reset Your password </p>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="w-50">
          <form onSubmit={handleCheck}>
            <lable htmlFor="email"></lable>
            <div className="mt-2">
              <input
                className="w-50"
                type="email"
                value={email}
                placeholder="Type your Email ID"
                onChange={handleChange}
              />
              <p className="text-danger mt-0">{message}</p>
            </div>
           <div> <button className="btn btn-primary mt-2 w-50"> Check</button></div>
          </form>
        </div>
      </div>
    </div>
  );
}
