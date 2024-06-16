import React, { useState } from 'react';

const AnnualCompensationForm = ({ onNext, onPrevious }) => {
  const [compensation, setCompensation] = useState('');

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Annual Compensation (Optional)"
        value={compensation}
        onChange={(e) => setCompensation(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <p className="text-sm text-gray-500 mb-4">The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</p>
      <button onClick={onPrevious} className="p-2 bg-blue-500 text-white rounded ml-4">Previous</button>
      <button onClick={onNext} className="p-2 bg-blue-500 text-white rounded ml-4">Next</button>
    </div>
  );
};

export default AnnualCompensationForm;
