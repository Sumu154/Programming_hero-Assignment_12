const express = require('express');
const router = express.Router();
const { createAssignment, getAssignments, getAssignmentById, getAssignmentsByCourse } = require('../controllers/assignmentController');


// create a teacher -> post
router.post('/assignments', createAssignment);
// show all assignments -> get
router.get('/assignments', getAssignments);
// get assignment by id
router.get('/assignments/:assignment_id', getAssignmentById);
// get assignments by course
router.get('/assignments/course_id/:course_id', getAssignmentsByCourse);

module.exports = router;