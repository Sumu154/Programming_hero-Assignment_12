const express = require('express');
const router = express.Router();
const { 
  createAssignment, 
  getAssignments, 
  getAssignmentById, 
  getAssignmentsByCourse, 
  updateAssignmentSubmission, 
  getAssignmentSubmissionPerCourse,
  getTotalAssignmentsCount
} = require('../controllers/assignmentController');


// create a teacher -> post
router.post('/assignments', createAssignment);
// show all assignments -> get
router.get('/assignments', getAssignments);
// get assignment by id
router.get('/assignments/:assignment_id', getAssignmentById);
// get assignments by course
router.get('/assignments/course_id/:course_id', getAssignmentsByCourse);

// update assignment_submission
router.patch('/assignments/:assignment_id/assignment_submission', updateAssignmentSubmission)

// get total submission of a course
router.get('/assignments/course_id/:course_id/total_submissions', getAssignmentSubmissionPerCourse)


// get total assignments
router.get('/totalAssignments', getTotalAssignmentsCount)


module.exports = router;