import React, { useState } from 'react';

const LanguagesForm = ({ onNext, onPrevious }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const languages = [
    { id: 'A', name: 'Solidity' },
    { id: 'B', name: 'Rust' },
    { id: 'C', name: 'Node.js' },
    { id: 'D', name: 'Typescript' },
    { id: 'E', name: 'Javascript' },
    { id: 'F', name: 'C' },
    { id: 'G', name: 'C++' },
    { id: 'H', name: 'C#' },
    { id: 'I', name: 'SQL' },
    { id: 'J', name: 'Python' },
    { id: 'K', name: 'Assembly Language' },
    { id: 'L', name: 'Haskell' },
    { id: 'M', name: 'R' },
    { id: 'N', name: '.NET' },
    { id: 'O', name: 'Other' },
  ];

  const toggleLanguage = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h5 className="text-xl mb-4">What languages and frameworks are you familiar with?</h5>
      <p className="mb-4">Select all the languages you know.</p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => toggleLanguage(language.name)}
            className={`p-2 rounded border ${
              selectedLanguages.includes(language.name)
                ? 'bg-purple-300'
                : 'bg-transparent'
            }`}
          >
            {language.name}
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

export default LanguagesForm;
