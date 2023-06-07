import React, { useState } from 'react';

const OTPInput = ({ onSubmit }) => {
  const [otp, setOTP] = useState('');

  const handleChange = (event) => {
    setOTP(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="otp">Enter OTP:</label>
      <input
        type="text"
        id="otp"
        name="otp"
        value={otp}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default OTPInput;