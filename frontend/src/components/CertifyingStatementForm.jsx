import React, { useState } from 'react';

const CertifyingStatementForm = ({ onPrevious }) => {
  const [acceptance, setAcceptance] = useState('');

  const handleChange = (e) => {
    setAcceptance(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <p className="mb-4 text-center">
        I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.
      </p>
      <div className="flex flex-col mb-4">
        <label className="mb-2">
          <input
            type="radio"
            value="I accept"
            checked={acceptance === 'I accept'}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-purple-500">I accept</span>
        </label>
        <label>
          <input
            type="radio"
            value="I don't accept"
            checked={acceptance === "I don't accept"}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-purple-500">I don't accept</span>
        </label>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onPrevious}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Previous
        </button>
        <button
          disabled={!acceptance}
          className={`p-2 rounded ${acceptance ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CertifyingStatementForm;
