const express = require('express');
const router = express.Router();
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');


// create a course -> post
router.post('/courses', createCourse);
// show all courses -> get
router.get('/courses', getCourses);
// get course by id
router.get('/courses/:course_id', getCourseById);
// update a course -> put
router.patch('/courses/:course_id', updateCourse);
// delete a course
router.delete('/courses/:course_id', deleteCourse);


module.exports = router;