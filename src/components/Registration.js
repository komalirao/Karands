import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
import { signupApi } from '../services/UserService';

const Registration = () => {

 

  const [signupobj, setSignupObj] = useState({ name: "", email: "", mobilenumber: "", location: "", password: "" })

  const takeName = (event) => {

    setSignupObj((prevState) => ({ ...prevState, name: event.target.value }))
  }
  const takeEmail = (event) => {

    setSignupObj((prevState) => ({ ...prevState, email: event.target.value }))
  }
  const takeMobile = (event) => {

    setSignupObj((prevState) => ({ ...prevState, mobilenumber: event.target.value }))
  }
  const takeLocation = (event) => {

    setSignupObj((prevState) => ({ ...prevState, location: event.target.value }))
  }
  const takePassword = (event) => {

    setSignupObj((prevState) => ({ ...prevState, password: event.target.value }))
  }

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();



 

    signupApi(signupobj)


  };


  return (
    <div className="registration-container">
      <form className="registration-form-container" onSubmit={handleRegistration}>
        <h2 className="registration-title">Registration</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={takeName}
          className="registration-input"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={takeEmail}
          className="registration-input"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          onChange={takeMobile}
          className="registration-input"
        />
        <input
          type="text"
          placeholder="Location"
          onChange={takeLocation}
          className="registration-input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={takePassword}
          className="registration-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"

          className="registration-input"
        />
        <div className="registration-checkbox-container">
          <input
            type="checkbox"


            className="registration-checkbox"
          />
          <label className="registration-checkbox-label">I accept the terms and conditions</label>
        </div>
        <button type="submit" className="registration-button">Sign Up</button>
        <Link to="/signin" className="registration-login-link">Already a user? Sign In</Link>
      </form>
    </div>
  );
};

export default Registration;