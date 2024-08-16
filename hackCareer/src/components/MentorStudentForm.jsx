import React, { useState } from 'react';

function MentorStudentForm() {
  const [activeTab, setActiveTab] = useState('mentor');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab('mentor')}
            className={`px-4 py-2 mx-2 rounded-t-lg ${activeTab === 'mentor' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Mentor
          </button>
          <button
            onClick={() => setActiveTab('student')}
            className={`px-4 py-2 mx-2 rounded-t-lg ${activeTab === 'student' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Student
          </button>
        </div>

        {/* Form Content */}
        {activeTab === 'mentor' ? (
          <MentorForm />
        ) : (
          <StudentForm />
        )}
      </div>
    </div>
  );
}

function MentorForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Your Name*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email*</label>
        <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Highest Qualification*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number*</label>
        <input type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Total Year of Experience*</label>
        <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Current Profile*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Current Company Name*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Your Domain Expertise*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Your Sector Expertise*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Who do you want to mentor?*</label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
          <option value="working-professional">Working Professional</option>
          <option value="b-school-grads">B-School Grads</option>
          <option value="engineering-students">Engineering Students</option>
          <option value="other-students">Other Students</option>
        </select>
      </div>
      {/* Additional fields go here following the same pattern */}
      <div>
        <label className="block text-sm font-medium">LinkedIn Profile</label>
        <input type="url" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">Attach Your Photograph (png, jpg, jpeg; Max: 10MB)*</label>
        <input type="file" accept="image/png, image/jpeg" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Attach Resume (pdf, doc, docx; Max: 5MB)</label>
        <input type="file" accept=".pdf,.doc,.docx" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">Profile Summary (Publicly Visible)</label>
        <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-md">
        Submit
      </button>
    </form>
  );
}

function StudentForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Your Name*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email*</label>
        <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Highest Qualification*</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number*</label>
        <input type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">College Type*</label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
          <option value="national-institute">National Institute</option>
          <option value="tier1">Tier 1</option>
          <option value="tier2-tier3">Tier 2 & Tier 3</option>
          <option value="all">All of the Above</option>
        </select>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-md">
        Submit
      </button>
    </form>
  );
}

export default MentorStudentForm;
