const mongoose = require('mongoose');
const connectDB = require('../config/db');

const enrollmentSchema = new mongoose.Schema({
  user_email: String,
  course_enrolled: [{                              //ekjon je koyta course enroll korece
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },  // Store course reference
    order_transaction_id: String  // Store transaction ID for that course
  }]  
})

module.exports = mongoose.model('Enrollment', enrollmentSchema);
