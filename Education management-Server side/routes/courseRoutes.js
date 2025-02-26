const express = require('express');
const router = express.Router();
const { createCourse, getCourses, getCourseById, getCourseByStatus, updateCourse, updateCourseStatus, deleteCourse } = require('../controllers/courseController');


// create a course -> post
router.post('/courses', createCourse);
// show all courses -> get
router.get('/courses', getCourses);
// get course by id
router.get('/courses/:course_id', getCourseById);
//get course by status
router.get('/courses/course_status/:course_status', getCourseByStatus)
// update a course -> put
router.patch('/courses/:course_id', updateCourse);
// update course state -> pending to approve/reject
router.patch('/courses/:course_id/status', updateCourseStatus)   // input_status -> approved/rejected 
// delete a course
router.delete('/courses/:course_id', deleteCourse);


module.exports = router;