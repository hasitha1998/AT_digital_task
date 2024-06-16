import React from 'react';

const StartPage = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-2xl font-bold">Welcome! Let's begin the form process.</h1>
      <button onClick={onStart} className="p-2 bg-blue-500 text-white rounded ml-4 mt-4">Start</button>
    </div>
  );
};

export default StartPage;
