import React, { useState } from 'react';

const NameForm = ({ onNext, onPrevious }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Before we start, what is your name?
        </h1>
        <div className="mb-4">
          <label className="block text-purple-500 text-sm font-bold mb-2" htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-purple-500 text-sm font-bold mb-2" htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex justify-between">
          <button 
            onClick={onPrevious} 
            className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-2"
          >
            Previous
          </button>
          <button 
            onClick={onNext} 
            className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameForm;
