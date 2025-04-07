// src/components/PhoneForm.tsx
import React, { useState } from 'react';
import { useOTPContext } from '../context/OTPContext';
import '../styles/PhoneForm.scss';

const PhoneForm: React.FC = () => {
  const { phone, setPhone, setIsOTPStage } = useOTPContext();
  const [error, setError] = useState('');

  const handleSendOTP = () => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setError('❌ Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setIsOTPStage(true);
  };

  return (
    <div className="phone-form-section">
      <h2>Step 1</h2>
      <div className="form-wrapper">
        <label htmlFor="phone">Enter Phone Number:</label>
        <input
          id="phone"
          type="tel"
          placeholder="e.g. 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSendOTP}>Send OTP</button>

        {error && <p className="status-message error">{error}</p>}
      </div>
    </div>
  );
};

export default PhoneForm;
