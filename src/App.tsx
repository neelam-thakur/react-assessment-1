// src/App.tsx
import React from 'react';
import { OTPProvider, useOTPContext } from './context/OTPContext';
import PhoneForm from './components/PhoneForm';
import OTPForm from './components/OTPForm';
import './styles/App.scss';

const MainContent = () => {
  const { isOTPStage } = useOTPContext();

  return (
    <div className="App">
      {!isOTPStage && <PhoneForm />}
      {isOTPStage && <OTPForm />} {/* ✅ Always render Step 2 when it becomes active */}
    </div>
  );
};

const App: React.FC = () => (
  <OTPProvider>
    <MainContent />
  </OTPProvider>
);

export default App;
