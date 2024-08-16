import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  highQualification: {
    type: String,
    required: true, // Make it required or optional based on your needs
  },
  collegeType: {
    type: String,
    required: true, // Make it required or optional based on your needs
  },
  phoneNumber: {
    type: String,
    required: true, // Make it required or optional based on your needs
  }
});

export default mongoose.model('User', userSchema);
