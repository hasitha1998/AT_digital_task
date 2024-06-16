import React, { useState } from 'react';

const AnnualCompensationForm = ({ onNext, onPrevious }) => {
  const [selectedCompensation, setSelectedCompensation] = useState('');

  const compensationOptions = [
    { id: 'A', label: '<$30,000' },
    { id: 'B', label: '$30,000 - $50,000' },
    { id: 'C', label: '$50,000 - $80,000' },
    { id: 'D', label: '$80,000 - $120,000' },
    { id: 'E', label: '$120,000 - $250,000' },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h7 className="text-xl mb-4">What is your current annual compensation? (Optional)</h7>
      <p className="text-gray-500 mb-4">
        Disclaimer: The information provided regarding salary will be kept confidential and 
        <strong> will not be used </strong> as a determining factor for acceptance into the bootcamp. 
        It will be used exclusively for career advancement guidance.
      </p>
      <div className="w-full mb-4">
        {compensationOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedCompensation(option.id)}
            className={`w-full p-2 my-1 rounded border border-purple-300 text-left ${
              selectedCompensation === option.id ? 'bg-purple-200' : 'bg-transparent'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onPrevious}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Next
        </button>
      </div>
      <div className="mt-4 text-center text-blue-600">
        <p>+<span className="text-2xl text-black">$26,500</span></p>
        <p>Average <span className="text-green-500">salary increase</span></p>
        <p className="text-sm text-gray-500">Metana students who provided pre- and post-course salaries.</p>
      </div>
    </div>
  );
};

export default AnnualCompensationForm;
