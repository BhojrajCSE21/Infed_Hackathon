import React, { useState } from "react";

function MentorStudentForm() {
  const [activeTab, setActiveTab] = useState("mentor");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    highestQualification: "",
    totalExperience: "",
    currentProfile: "",
    currentCompanyName: "",
    domainExpertise: "",
    sectorExpertise: "",
    mentorType: "",
    instituteType: "",
    interests: [],
    availabilityDay: "",
    availabilityTime: "",
    commitmentTimePerWeek: "",
    linkedInProfile: "",
    profileSummary: "",
    password: "",
  });
  const [photograph, setPhotograph] = useState(null);
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "photograph") setPhotograph(files[0]);
    if (name === "resume") setResume(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    
    // Append text fields
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    
    // Append files
    if (photograph) form.append("photograph", photograph);
    if (resume) form.append("resume", resume);

    try {
      const response = await fetch("http://localhost:5500/teacher/register", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Clear form or handle success
      } else {
        alert(result.message);
        // Handle error
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("mentor")}
            className={`px-4 py-2 mx-2 rounded-t-lg ${
              activeTab === "mentor" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Mentor
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`px-4 py-2 mx-2 rounded-t-lg ${
              activeTab === "student" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Student
          </button>
        </div>

        {/* Form Content */}
        {activeTab === "mentor" ? <MentorForm 
          formData={formData}
          photograph={photograph}
          resume={resume}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
        /> : <StudentForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />}
      </div>
    </div>
  );
}

function MentorForm({ formData, photograph, resume, handleChange, handleFileChange, handleSubmit }) {
  return (
    <div className="p-2">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Your Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Highest Qualification*
          </label>
          <input
            type="text"
            name="highestQualification"
            value={formData.highestQualification}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number*</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Total Year of Experience*
          </label>
          <input
            type="number"
            name="totalExperience"
            value={formData.totalExperience}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Current Profile*</label>
          <input
            type="text"
            name="currentProfile"
            value={formData.currentProfile}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Current Company Name*
          </label>
          <input
            type="text"
            name="currentCompanyName"
            value={formData.currentCompanyName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Your Domain Expertise*
          </label>
          <input
            type="text"
            name="domainExpertise"
            value={formData.domainExpertise}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Your Sector Expertise*
          </label>
          <input
            type="text"
            name="sectorExpertise"
            value={formData.sectorExpertise}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Who do you want to mentor?*
          </label>
          <select
            name="mentorType"
            value={formData.mentorType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="working-professional">Working Professional</option>
            <option value="b-school-grads">B-School Grads</option>
            <option value="engineering-students">Engineering Students</option>
            <option value="other-students">Other Students</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">
            College Type*
          </label>
          <select
            name="instituteType"
            value={formData.instituteType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="national-institute">National Institute</option>
            <option value="tier1">Tier 1</option>
            <option value="tier2-tier3">Tier 2 & Tier 3</option>
            <option value="all">All of the Above</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Interests*</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Available Days*
          </label>
          <input
            type="text"
            name="availabilityDay"
            value={formData.availabilityDay}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Available Time Slot*
          </label>
          <input
            type="text"
            name="availabilityTime"
            value={formData.availabilityTime}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Commitment Time Per Week*
          </label>
          <input
            type="text"
            name="commitmentTimePerWeek"
            value={formData.commitmentTimePerWeek}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            LinkedIn Profile Link
          </label>
          <input
            type="url"
            name="linkedInProfile"
            value={formData.linkedInProfile}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Profile Summary*</label>
          <textarea
            name="profileSummary"
            value={formData.profileSummary}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Photograph</label>
          <input
            type="file"
            name="photograph"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function StudentForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="p-2">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Student-specific fields */}
        <div>
          <label className="block text-sm font-medium">Your Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Other student-specific fields */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MentorStudentForm;
