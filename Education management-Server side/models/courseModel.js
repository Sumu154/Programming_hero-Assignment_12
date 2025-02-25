const mongoose = require('mongoose');
const connectDB = require('../config/db');

const courseSchema = new mongoose.Schema({
  course_title: String,
  course_image: String,
  teacher_name: String,
  teacher_email: String,
  course_description: String,
  course_price: Number,
  course_status: String,
  user_enrollment: Number, //ekta course kotojon enroll korece
})

module.exports = mongoose.model('Course', courseSchema);
