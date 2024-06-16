import React, { useState } from 'react';

const CertifyingStatementForm = ({ onPrevious }) => {
  const [statement, setStatement] = useState('');

  return (
    <div className="flex flex-col items-center">
      <textarea
        placeholder="Certifying Statement"
        value={statement}
        onChange={(e) => setStatement(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button onClick={onPrevious} className="p-2 bg-blue-500 text-white rounded ml-4">Previous</button>
    </div>
  );
};

export default CertifyingStatementForm;
