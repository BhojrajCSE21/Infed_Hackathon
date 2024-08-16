import Teacher from '../Models/Teacher.js';
import jwt from 'jsonwebtoken';
import configs from '../configs.js';
import cloudinary from '../config/cloudinary.js';

// Register a new teacher
export const registerTeacher = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, highestQualification, totalExperience, currentProfile, currentCompanyName, domainExpertise, sectorExpertise, mentorType, instituteType, interests, availabilityDay, availabilityTime, commitmentTimePerWeek, linkedInProfile, profileSummary, password } = req.body;

    // Upload files to Cloudinary
    let photographUrl = '';
    let resumeUrl = '';

    if (req.files) {
      if (req.files.photograph && req.files.photograph.length > 0) {
        const photographUpload = await cloudinary.v2.uploader.upload(req.files.photograph[0].path, { folder: 'teachers/photographs' });
        photographUrl = photographUpload.secure_url;
      }

      if (req.files.resume && req.files.resume.length > 0) {
        const resumeUpload = await cloudinary.v2.uploader.upload(req.files.resume[0].path, { resource_type: 'raw', folder: 'teachers/resumes' });
        resumeUrl = resumeUpload.secure_url;
      }
    }

    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: "Teacher with this email already exists." });
    }

    const newTeacher = new Teacher({
      name,
      email,
      phoneNumber,
      highestQualification,
      totalExperience,
      currentProfile,
      currentCompanyName,
      domainExpertise,
      sectorExpertise,
      mentorType,
      instituteType,
      interests,
      availabilityDay,
      availabilityTime,
      commitmentTimePerWeek,
      linkedInProfile,
      photograph: photographUrl,
      resume: resumeUrl,
      profileSummary,
      password
    });

    await newTeacher.save();
    res.status(201).json({ message: "Teacher registered successfully.", newTeacher });

  } catch (error) {
    console.error("Error registering teacher:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Log in a teacher
export const loginTeacher = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email });

    if (!teacher || !(await teacher.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ _id: teacher._id }, configs.jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token, teacher });

  } catch (error) {
    console.error("Error logging in teacher:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all teachers
export const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({ teachers });
  } catch (error) {
    console.error("Error fetching teachers:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
