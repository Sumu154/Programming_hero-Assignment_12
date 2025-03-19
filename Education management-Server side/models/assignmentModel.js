const mongoose = require('mongoose');
const connectDB = require('../config/db');

const AssignmentSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  teacher_email: String,  // jei teacher add dibe assignmnent
  assignment_title: String,
  assignment_description: String,
  assignment_deadline: Date,
  assignment_submission: Number,   // kotojon assignment submit korece 
})

module.exports = mongoose.model('Assignment', AssignmentSchema);
