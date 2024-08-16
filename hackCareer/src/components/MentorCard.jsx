import React, { useState } from 'react';

function MentorCard({ mentor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col w-full max-w-md">
      <div className="flex">
        <img src={mentor.image} alt={mentor.name} className="h-24 w-24 rounded-full mr-4" />
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-bold">{mentor.name}</h2>
          <p className="text-gray-700">{mentor.email}</p>
          <p className="text-gray-700">{mentor.phone}</p>
          <p className="text-gray-700">{mentor.qualification}</p>
        </div>
      </div>
      <div className={`mt-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
        <p className="text-gray-700">{mentor.profileSummary}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={toggleExpand}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Book
        </button>
      </div>
    </div>
  );
}

export default MentorCard;