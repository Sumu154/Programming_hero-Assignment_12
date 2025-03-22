const express = require('express');
const router = express.Router();
const { 
  createTeacher, 
  getTeachers, 
  getTeachersWithLimit,
  getTeacherById, 
  getTeacherByStatus, 
  getTeacherByEmail, 
  updateTeacherStatus
} = require('../controllers/teacherController');


// create a teacher -> post
router.post('/teachers', createTeacher);
// show all teachers -> get
router.get('/teachers', getTeachers);
// get teacher with limit
router.get('/teachers/limited', getTeachersWithLimit)
// get teacher by id
router.get('/teachers/:teacher_id', getTeacherById);
// get teacher by email
router.get('/teachers/teacher_email/:teacher_email', getTeacherByEmail)
// get teacher jader status pending
router.get('/teachers/teacher_status/:teacher_status', getTeacherByStatus);

// update teacher status -> pending to approved/rejected
router.patch('/teachers/:teacher_id/status', updateTeacherStatus)

module.exports = router;