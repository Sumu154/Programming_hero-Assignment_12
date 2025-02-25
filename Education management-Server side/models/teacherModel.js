const mongoose = require('mongoose');
const connectDB = require('../config/db');

const teacherSchema = new mongoose.Schema({
  teacher_email: String,
  teacher_name: String,
  teacher_image: String,
  teacher_title: String,
  teacher_category: String,
  teacher_experience: String,
  teacher_status: String,    //teacher approved or not
})

module.exports = mongoose.model('Teacher', teacherSchema);
