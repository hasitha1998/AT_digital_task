import React, { useState } from 'react';
import Select from 'react-select';
import { countries } from './countries'; // Adjust the import path as needed

const CountryForm = ({ onNext, onPrevious }) => {
  const [country, setCountry] = useState(null);

  const handleChange = value => {
    setCountry(value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-2 text-purple-500">
          3 → Which country you are from? <span role="img" aria-label="houses">🏡🏡🏡</span>
        </h1>
        <div className="mb-4">
          <Select 
            options={countries} 
            value={country} 
            onChange={handleChange} 
            placeholder="Type or select an option"
            className="text-purple-500"
            classNamePrefix="react-select"
          />
        </div>
        <div className="flex justify-center">
          <button 
            onClick={onPrevious} 
            className="w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-2"
          >
            Previous
          </button>
          <button 
            onClick={onNext} 
            className="w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryForm;
