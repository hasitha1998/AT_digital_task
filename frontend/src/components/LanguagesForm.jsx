import React, { useState } from 'react';

const LanguagesForm = ({ onNext, onPrevious }) => {
  const [languages, setLanguages] = useState('');

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Languages and Frameworks"
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button onClick={onPrevious} className="p-2 bg-blue-500 text-white rounded ml-4">Previous</button>
      <button onClick={onNext} className="p-2 bg-blue-500 text-white rounded ml-4">Next</button>
    </div>
  );
};

export default LanguagesForm;
