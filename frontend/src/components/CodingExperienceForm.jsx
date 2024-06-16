import React, { useState } from 'react';

const CodingExperienceForm = ({ onNext, onPrevious }) => {
  const [selectedExperience, setSelectedExperience] = useState('');

  const experiences = [
    { id: 'A', label: 'No experience (I have never programmed before.)' },
    { id: 'B', label: 'Beginner (I have played with some introductory coding lessons and tutorials.)' },
    { id: 'C', label: 'Intermediate (I have completed some coding classes or tutorials.)' },
    { id: 'D', label: 'Advanced (I can build applications.)' },
    { id: 'E', label: 'Professional (I am an experienced software engineer.)' },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h6 className="text-xl mb-4">How would you describe your current level of coding experience?</h6>
      <div className="w-full mb-4">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setSelectedExperience(exp.id)}
            className={`w-full p-2 my-1 rounded border border-purple-300 text-left ${
              selectedExperience === exp.id ? 'bg-purple-200' : 'bg-transparent'
            }`}
          >
            {exp.label}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onPrevious}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CodingExperienceForm;
