import React, { useState } from 'react';

const FAQ = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4">
      <h3
        className="text-2xl font-bold mb-2 text-gray-800 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {question}
      </h3>
      {isExpanded && (
        <p className="text-xl font-light mb-4 text-white bg-black p-4">{answer}</p>
      )}
    </div>
  );
};

export default FAQ;
