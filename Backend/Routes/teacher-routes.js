import express from 'express';
import { getTeachers, loginTeacher, registerTeacher } from '../Controllers/teacher-controller.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

// Route for teacher registration with file upload
router.post('/register', upload.fields([{ name: 'photograph', maxCount: 1 }, { name: 'resume', maxCount: 1 }]), registerTeacher);

// Route to fetch all teachers
router.get('/getTeacher', getTeachers);

// Route for teacher login
router.post('/login', loginTeacher);

export default router;
