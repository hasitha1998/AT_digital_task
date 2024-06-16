// PageOne.js
import React from "react";

function PageOne({ onNext }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Page One: Enter First Name and Last Name</h2>
      <input type="text" placeholder="First Name" className="border p-2 mb-4 w-full" />
      <input type="text" placeholder="Last Name" className="border p-2 mb-4 w-full" />
      <button
        onClick={onNext}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
      >
        Next
      </button>
    </div>
  );
}

export default PageOne;
