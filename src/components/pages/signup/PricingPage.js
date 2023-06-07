import React, { useState } from 'react';
import './PricingPage.css';

const PricingPage = () => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handlePayButtonClick = () => {
    setShowPaymentOptions(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'Google Pay') {
      window.location.href = 'https://www.qrcode-monkey.com/img/sample.png';
    }
  };

  return (
    <div className="pricing-container">
      <div className="pricing-item">
        <h2>Item Name</h2>
        <ul>
          <li>Unlimited Job Posts</li>
          <li>My Task dashboard</li>
          <li>Passive earning</li>
          <li>Affiliating</li>
        </ul>
        <button onClick={handlePayButtonClick}>Pay 1000/- INR</button>
        {showPaymentOptions && (
          <div className="payment-options">
            <h3>Select a payment option:</h3>
            <ul>
              <li onClick={() => handleOptionSelect('Google Pay')}>
                <img src="https://www.gstatic.com/pay/images/GooglePay_Logo_Horizontal_Color.svg" alt="Google Pay" />
              </li>
              <li onClick={() => handleOptionSelect('Paytm')}>
                <img src="https://cdn.freebiesupply.com/logos/large/2x/paytm-logo-png-transparent.png" alt="Paytm" />
              </li>
              <li onClick={() => handleOptionSelect('Credit Card')}>
                <img src="https://www.mastercard.us/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="Credit Card" />
              </li>
              <li onClick={() => handleOptionSelect('Debit Card')}>
                <img src="https://www.visa.co.in/dam/VCOM/regional/ap/IN/global-elements/images/global-elements/visa-logo.svg" alt="Debit Card" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPage;