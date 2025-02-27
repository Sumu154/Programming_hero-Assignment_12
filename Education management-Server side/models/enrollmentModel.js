const mongoose = require('mongoose');
const connectDB = require('../config/db');

const enrollmentSchema = new mongoose.Schema({
  user_email: String,
  course_enrolled: [String]  //ekjon koyta course enroll korece
})

module.exports = mongoose.model('Enrollment', enrollmentSchema);
