// src/components/OTPForm.tsx
import React, { useState } from 'react';
import { useOTPContext } from '../context/OTPContext';
import '../styles/OTPForm.scss';

const OTPForm: React.FC = () => {
  const { phone, setOtpValidated, otpValidated } = useOTPContext();
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleValidate = () => {
    if (otp === '123456') {
      setOtpValidated(true);
      setMessage({ type: 'success', text: '✅ OTP validated successfully!' });
    } else {
      setMessage({ type: 'error', text: '❌ Invalid OTP. Please try again.' });
    }
  };

  return (
    <div className="otp-form-section">
      <p className="step-info">
        Step 1: We have sent OTP to Phone number: <strong>{phone}</strong>
      </p>
      <h2>Step 2</h2>
      <div className="form-wrapper">
        <div className="otp-inline">
          <label htmlFor="otp">Enter OTP:</label>
          <input
            id="otp"
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className="button-wrapper">
            <button onClick={handleValidate} disabled={otpValidated}>
                Validate OTP
            </button>
        </div>
        {message && (
          <p className={`status-message ${message.type}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default OTPForm;
