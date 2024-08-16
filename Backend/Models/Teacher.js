import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  highestQualification: {
    type: String,
    required: true,
  },
  totalExperience: {
    type: Number,
    required: true,
  },
  currentProfile: {
    type: String,
    required: true,
  },
  currentCompanyName: {
    type: String,
    required: true,
  },
  domainExpertise: {
    type: String,
    required: true,
  },
  sectorExpertise: {
    type: String,
    required: true,
  },
  mentorType: {
    type: String,
    required: true,
  },
  instituteType: {
    type: String,
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  availabilityDay: {
    type: String,
    required: true,
  },
  availabilityTime: {
    type: String,
    required: true,
  },
  commitmentTimePerWeek: {
    type: String,
    required: true,
  },
  linkedInProfile: {
    type: String,
  },
  photograph: {
    type: String,
  },
  resume: {
    type: String,
  },
  profileSummary: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving
teacherSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
teacherSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("Teacher", teacherSchema);
