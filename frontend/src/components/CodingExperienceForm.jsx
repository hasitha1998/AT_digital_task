import React, { useState } from 'react';

const CodingExperienceForm = ({ onNext, onPrevious }) => {
  const [experience, setExperience] = useState('');

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Coding Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button onClick={onPrevious} className="p-2 bg-blue-500 text-white rounded ml-4">Previous</button>
      <button onClick={onNext} className="p-2 bg-blue-500 text-white rounded ml-4">Next</button>
    </div>
  );
};

export default CodingExperienceForm;
