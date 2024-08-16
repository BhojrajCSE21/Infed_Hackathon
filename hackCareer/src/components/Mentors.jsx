import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    // Fetch mentors data from the API
    const fetchMentors = async () => {
      try {
        const response = await axios.get('http://localhost:5500/teacher/getTeacher'); // Replace with your API URL
        setMentors(response.data.teachers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading mentors: {error.message}</p>;

  return (
    <div className="h-fit w-screen flex flex-wrap justify-center gap-4 p-2">
      {mentors.map((mentor, index) => {
        const {
          photograph: image = 'https://via.placeholder.com/96',
          name = 'Unknown Name',
          email = 'No Email Provided',
          phoneNumber: phone = 'No Phone Provided',
          highestQualification: qualification = 'No Qualification Provided',
          profileSummary = 'No Summary Provided',
        } = mentor;

        const isExpanded = expandedIndex === index;

        return (
          <div key={mentor._id} className="border rounded-lg shadow-lg p-4 flex flex-col w-full max-w-md">
            <div className="flex">
              <img
                src={image}
                alt={name}
                className="h-24 w-24 rounded-full mr-4"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-700">{email}</p>
                <p className="text-gray-700">{phone}</p>
                <p className="text-gray-700">{qualification}</p>
              </div>
            </div>
            <div className={`mt-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
              <p className="text-gray-700">{profileSummary}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => toggleExpand(index)}
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
      })}
    </div>
  );
}

export default Mentors;
