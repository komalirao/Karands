import { useState } from 'react';
import './refcode.css';

function RefCode() {
  const [referralCode, setReferralCode] = useState(null);
  
  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const generateReferralCode = () => {
    
    // Check if referral code already exists in the file
    fetch('/referral-code/check', {
      method: 'POST',
      body: JSON.stringify({ userId: 123 }), // Replace with actual user ID
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        if (data.exists) {
          const nextAvailableDate = new Date(data.nextAvailableDate);
          alert(`You cannot generate a new referral code until ${nextAvailableDate.toLocaleString()}`);
        } else {
          // Generate a new referral code
          const newReferralCode = generateRandomString(8); // Replace with your own function to generate a random string
          setReferralCode(newReferralCode);
          // Save the referral code to the file
          fetch('/referral-code/save', {
            method: 'POST',
            body: JSON.stringify({ userId: 123, referralCode: newReferralCode }), // Replace with actual user ID
            headers: { 'Content-Type': 'application/json' }
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to save referral code');
              }
            })
            .catch(error => console.error(error));
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={generateReferralCode}>Generate Referral Code</button>
      {referralCode && (
        <p>Your referral code is: {referralCode}</p>
      )}
    </div>
  );
}

export default RefCode;