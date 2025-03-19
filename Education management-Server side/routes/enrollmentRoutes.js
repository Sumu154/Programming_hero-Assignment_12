const express = require('express');
const router = express.Router();
const { 
  createEnrollment, 
  getEnrollments, 
  getEnrollmentByEmail,
  getTotalEnrollments 
} = require('../controllers/enrollmentController');


// create a enrollment -> post
router.post('/enrollments', createEnrollment);
// show all enrollments -> get
router.get('/enrollments', getEnrollments);
// get enrollments by email
router.get('/enrollments/user_email/:user_email/course', getEnrollmentByEmail);

// get total users
router.get('/totalEnrollments', getTotalEnrollments)


module.exports = router;