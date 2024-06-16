import React from 'react';

const StartPage = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center h-screen justify-center ">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Launch your Data Career in Weeks, not Years</h1>
        <p className="text-lg mb-2">What to expect:</p>
        <ul className="text-lg mb-4">
          <li>- <span className="font-bold">Short-answer</span> questions & <span className="font-bold">No</span> cover letter</li>
          <li>- Takes 4 mins on average</li>
        </ul>
        <button 
          onClick={onStart} 
          className="px-6 py-3 bg-purple-500 text-white font-bold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-4"
        >
          Start Your Journey
        </button>
        <p className="mt-2 text-sm text-gray-600">👥 125 people have filled this out</p>
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="flex items-center space-x-4">
          <img src="path/to/course-report-logo.png" alt="Course Report" className="w-16" />
          <p className="text-4xl font-bold text-green-600">4.8</p>
        </div>
        <p className="mt-1 text-gray-500">Rated on Course Report</p>
      </div>
      <div className="absolute bottom-8 left-8 flex space-x-8">
        <img src="path/to/google-logo.png" alt="Google" className="h-8" />
        <img src="path/to/ibm-logo.png" alt="IBM" className="h-8" />
        <img src="path/to/nike-logo.png" alt="Nike" className="h-8" />
        <img src="path/to/ebay-logo.png" alt="eBay" className="h-8" />
      </div>
    </div>
  );
};

export default StartPage;
