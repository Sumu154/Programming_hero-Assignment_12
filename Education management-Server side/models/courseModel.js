const mongoose = require('mongoose');
const connectDB = require('../config/db');

const courseSchema = new mongoose.Schema({
  course_name: String,
  course_title: String,
  course_image: String,
  instructor_name: String,
  instructor_email: String,
  course_description: String,
  course_price: String,
  course_status: String,
  course_enrollment: String, //ekta course kotojon enroll korece
})

module.exports = mongoose.model('Course', courseSchema);
