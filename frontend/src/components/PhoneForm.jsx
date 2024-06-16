import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneForm = ({ onNext, onPrevious }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h2 className="text-2xl mb-4">What is your phone number?</h2>
      <PhoneInput
        country={'us'}
        value={phoneNumber}
        onChange={(phone) => setPhoneNumber(phone)}
        containerStyle={{ marginBottom: '20px', width: '100%' }}
        inputStyle={{ width: '100%', padding: '10px', fontSize: '16px' }}
        buttonStyle={{ padding: '10px', fontSize: '16px' }}
      />
      <div className="flex space-x-4">
        <button onClick={onPrevious} className="p-2 bg-purple-500 text-white rounded">Previous</button>
        <button onClick={onNext} className="p-2 bg-purple-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default PhoneForm;
