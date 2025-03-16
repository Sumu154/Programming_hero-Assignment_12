const mongoose = require('mongoose');
const connectDB = require('../config/db');

const feedbackSchema = new mongoose.Schema({
  user_email: String,   //je feedback ta dibe 
  course_id: String,   // kon courser feedback
  feedback_rating: String,
  feedback_description: String,
})

module.exports = mongoose.model('Feedback', feedbackSchema);
