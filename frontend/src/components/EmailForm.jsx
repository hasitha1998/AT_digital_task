import React, { useState } from 'react';

const EmailForm = ({ onNext, onPrevious }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-2 text-purple-500">
          2 → What’s your email address?
        </h1>
        <p className="mb-4 text-gray-600">
          This is how we’ll contact you.
        </p>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-purple-200 rounded text-purple-500 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />
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
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
