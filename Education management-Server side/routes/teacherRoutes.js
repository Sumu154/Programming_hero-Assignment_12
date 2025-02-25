const express = require('express');
const router = express.Router();
const { createTeacher, getTeachers, getTeacherById } = require('../controllers/teacherController');


// create a teacher -> post
router.post('/teachers', createTeacher);
// show all teachers -> get
router.get('/teachers', getTeachers);
// get teacher by id
router.get('/teachers/:teacher_id', getTeacherById);


module.exports = router;