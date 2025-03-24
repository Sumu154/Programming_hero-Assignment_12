const mongoose = require('mongoose');
const enrollmentModel = require('../models/enrollmentModel');
const feedbackModel = require('../models/feedbackModel');
const submissionModel = require('../models/submissionModel');
const assignmentModel = require('../models/assignmentModel');

/**
 * Middleware to handle cascade deletion when a course is deleted
 * This will delete all related assignments and remove course references from enrollments
 */
function cascadeDelete(next) {
  const courseId = this.getQuery()._id;
  
  // Using async IIFE (Immediately Invoked Function Expression)
  (async () => {
    try {
      // Delete all assignments related to this course
      await assignmentModel.deleteMany({ course: courseId });
      await submissionModel.deleteMany({ course: courseId });
      await feedbackModel.deleteMany({ course: courseId });
      await enrollmentModel.updateMany(
        { "course_enrolled.course": courseId },
        { $pull: { course_enrolled: { course: courseId } } }
      );
      
      console.log(`Cascade delete successful for course: ${courseId}`);
      next();
    } 
    catch(e){
      console.error('Error in cascade delete middleware:', e);
      next(e);
    }
  })();
}

module.exports = cascadeDelete;