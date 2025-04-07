// src/context/OTPContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface OTPContextType {
  phone: string;
  setPhone: (phone: string) => void;
  isOTPStage: boolean;
  setIsOTPStage: (value: boolean) => void;
  otpValidated: boolean;
  setOtpValidated: (value: boolean) => void;
}

const OTPContext = createContext<OTPContextType | undefined>(undefined);

export const OTPProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phone, setPhone] = useState<string>('');
  const [isOTPStage, setIsOTPStage] = useState<boolean>(false);
  const [otpValidated, setOtpValidated] = useState<boolean>(false);

  return (
    <OTPContext.Provider
      value={{ phone, setPhone, isOTPStage, setIsOTPStage, otpValidated, setOtpValidated }}
    >
      {children}
    </OTPContext.Provider>
  );
};

export const useOTPContext = () => {
  const context = useContext(OTPContext);
  if (!context) throw new Error('useOTPContext must be used within OTPProvider');
  return context;
};
