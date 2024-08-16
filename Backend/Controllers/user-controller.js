import User from '../Models/User.js';
import jwt from 'jsonwebtoken';
import configs from '../configs.js';

// Get all users
export const getMyUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(404).json({ message: "Users not found" });
  }
};

// Sign up a new user
export const signup = async (req, res, next) => {
  try {
    const { name, email, password, highQualification, collegeType, phoneNumber } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const user = new User({ name, email, password, highQualification, collegeType, phoneNumber });
    await user.save();

    const token = jwt.sign({ _id: user._id }, configs.jwtSecret);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Log in a user
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ _id: user._id }, configs.jwtSecret);
    res.status(200).json({ token, user, message:"login success" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
