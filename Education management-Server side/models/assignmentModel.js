const mongoose = require('mongoose');
const connectDB = require('../config/db');

const AssignmentSchema = new mongoose.Schema({
  feedback: String,
  rating: String,
  course_id: String,
  course_name: String,
  user_email: String,   //jake feedback dea hbe
  instructor_email: String,  // jei instructor dibe
})

module.exports = mongoose.model('Assignment', AssignmentSchema);
