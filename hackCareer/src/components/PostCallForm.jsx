import React, { useState } from 'react';

const MentorReviewForm = () => {
  const [formData, setFormData] = useState({
    mentorName: '',
    studentName: '',
    strengths: '',
    weaknesses: '',
    improvements: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or generate PDF
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="mentorName">
          Mentor Name
        </label>
        <input
          type="text"
          id="mentorName"
          name="mentorName"
          value={formData.mentorName}
          onChange={handleChange}
          className="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="studentName">
          Student Name
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          className="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="strengths">
          Strengths
        </label>
        <textarea
          id="strengths"
          name="strengths"
          value={formData.strengths}
          onChange={handleChange}
          className="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="weaknesses">
          Weaknesses
        </label>
        <textarea
          id="weaknesses"
          name="weaknesses"
          value={formData.weaknesses}
          onChange={handleChange}
          className="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="improvements">
          Areas for Improvement
        </label>
        <textarea
          id="improvements"
          name="improvements"
          value={formData.improvements}
          onChange={handleChange}
          className="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="additionalComments">
          Additional Comments
        </label>
        <textarea
          id="additionalComments"
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          className="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default MentorReviewForm;