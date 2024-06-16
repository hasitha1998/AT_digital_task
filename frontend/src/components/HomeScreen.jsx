import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/scroll');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Home</h1>
      <button onClick={handleStart} className="p-2 bg-blue-500 text-white rounded mt-4">Start</button>
    </div>
  );
};

export default HomeScreen;
