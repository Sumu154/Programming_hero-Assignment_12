const express = require('express');
const router = express.Router();
const { createEnrollment, getEnrollments, getEnrollmentByEmail } = require('../controllers/enrollmentController');


// create a enrollment -> post
router.post('/enrollments', createEnrollment);
// show all enrollments -> get
router.get('/enrollments', getEnrollments);
// get enrollments by email
router.get('/enrollments/email/:user_email', getEnrollmentByEmail);



module.exports = router;