const express = require('express');
const router = express.Router();
const { createTeacher, getTeachers, getTeacherById, getTeacherByStatus } = require('../controllers/teacherController');


// create a teacher -> post
router.post('/teachers', createTeacher);
// show all teachers -> get
router.get('/teachers', getTeachers);
// get teacher by id
router.get('/teachers/:teacher_id', getTeacherById);
// get teacher jader status pending
router.get('/teachers/teacher_status/:teacher_status', getTeacherByStatus)

module.exports = router;