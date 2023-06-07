import React, { useState } from 'react'
import OTPInput from './OTPInput'

export default function ChangeNumber() {

    const [phoneNumber, setPhoneNumber] = useState('');

  const handleOTPSubmit = (otp) => {
    // TODO: Verify OTP and update phone number
    setPhoneNumber('123-456-7890'); // Example phone number
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div className=''>
    <form>
    <label htmlFor="phoneNumber">Enter new phone number:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button>Send OTP</button>
      <OTPInput onSubmit={handleOTPSubmit} />
      </form>
    </div>
  )
}
