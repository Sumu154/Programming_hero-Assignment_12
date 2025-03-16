const mongoose = require('mongoose');
const connectDB = require('../config/db');

const SubmissionSchema = new mongoose.Schema({
  user_email: String,
  course_id: String,
  assignment_id: String,  // jei teacher add dibe assignmnent
  submission_link: String,
  submission_grade: String,
})

module.exports = mongoose.model('Submission', SubmissionSchema);
