const express = require('express');
const router = express.Router();
const { createCourse, getCourses, getCourseById, getCourseByStatus, getPopularCourses, getUserEnrollment, updateCourse, updateCourseStatus, updateCourseAssignment, deleteCourse, getCourseAssignment, getCoursePrice } = require('../controllers/courseController');


// create a course -> post
router.post('/courses', createCourse);
// show all courses -> get
router.get('/courses', getCourses);

// get popular courses
router.get('/courses/popularCourses', getPopularCourses)
// get course by id
router.get('/courses/:course_id', getCourseById);
//get course by status
router.get('/courses/course_status/:course_status', getCourseByStatus);

// get user_enrollment form a course 
router.get('/courses/:course_id/user_enrollment', getUserEnrollment)
// get course_assignment from a course
router.get('/courses/:course_id/course_assignment', getCourseAssignment)
// get course_price from a course
router.get('/courses/:course_id/course_price', getCoursePrice);
// update a course -> put
router.patch('/courses/:course_id', updateCourse);
// update course state -> pending to approve/reject
router.patch('/courses/:course_id/course_status', updateCourseStatus)   // input_status -> approved/rejected 
// update course_assignment 
router.patch('/courses/:course_id/course_assignment', updateCourseAssignment)
// delete a course
router.delete('/courses/:course_id', deleteCourse);


module.exports = router;