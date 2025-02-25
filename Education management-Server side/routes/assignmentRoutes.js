const express = require('express');
const router = express.Router();
const { createAssignment, getAssignments, getAssignmentById } = require('../controllers/assignmentController');


// create a teacher -> post
router.post('/assignments', createAssignment);
// show all assignments -> get
router.get('/assignments', getAssignments);
// get teacher by id
router.get('/assignments/:assignment_id', getAssignmentById);


module.exports = router;