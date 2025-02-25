const mongoose = require('mongoose');
const connectDB = require('../config/db');

const userSchema = new mongoose.Schema({
  user_email: String,
  user_name: String,
  user_image: String,
  user_role: String,
  user_enrollment: String,  //ekjon koyta course enroll korece
})

module.exports = mongoose.model('User', userSchema);
