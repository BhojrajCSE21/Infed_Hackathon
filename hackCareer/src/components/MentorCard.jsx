import React, { useState } from 'react';

function MentorCard({ mentor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const {
    photograph = 'https://via.placeholder.com/96',
    name = 'Unknown Name',
    email = 'No Email Provided',
    phoneNumber = 'No Phone Provided',
    highestQualification = 'No Qualification Provided',
    profileSummary = 'No Summary Provided',
  } = mentor;

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col w-full max-w-md">
      <div className="flex">
        <img
          src={photograph}
          alt={name}
          className="h-24 w-24 rounded-full mr-4"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-700">{email}</p>
          <p className="text-gray-700">{phoneNumber}</p>
          <p className="text-gray-700">{highestQualification}</p>
        </div>
      </div>
      <div className={`mt-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
        <p className="text-gray-700">{profileSummary}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          className="text-gray-900 hover:text-gray-700 focus:outline-none"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
          Book
        </button>
      </div>
    </div>
  );
}

export default MentorCard;
