import React, { useState } from 'react';

const PhoneNumberForm = ({ onNext, onPrevious }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="flex flex-col items-center">
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button onClick={onPrevious} className="p-2 bg-blue-500 text-white rounded ml-4">Previous</button>
      <button onClick={onNext} className="p-2 bg-blue-500 text-white rounded ml-4">Next</button>
    </div>
  );
};

export default PhoneNumberForm;
