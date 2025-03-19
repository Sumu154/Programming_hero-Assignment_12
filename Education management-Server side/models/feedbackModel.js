const mongoose = require('mongoose');
const connectDB = require('../config/db');

const feedbackSchema = new mongoose.Schema({
  user_email: String,   //je feedback ta dibe 
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  feedback_rating: Number,
  feedback_description: String,
})

module.exports = mongoose.model('Feedback', feedbackSchema);
