const express = require('express');
const router = express.Router();
const { createSubmission, getSubmissions, getSubmissionById, getSubmissionsByCourse } = require('../controllers/SubmissionController');


// create a submission -> post
router.post('/submissions', createSubmission);
// show all submissions -> get
router.get('/submissions', getSubmissions);
// get submission by id
router.get('/submissions/:submission_id', getSubmissionById);
// get submission ny user_email
router.get('/submissions/user_email/:user_email', getSubmissionsByCourse);


module.exports = router;