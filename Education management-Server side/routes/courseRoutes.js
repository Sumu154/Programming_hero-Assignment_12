const express = require('express');
const router = express.Router();
const { 
  createCourse, 
  getCourses, 
  getCoursesWithLimit,
  getCourseById, 
  getCourseByEmailWithLimit,
  getCourseByStatus,
  getCourseByStatusWithLimit, 
  getPopularCourses, 
  getUserEnrollment, 
  getCourseTitle, 
  updateCourseStatus, 
  updateCourseAssignment,
  getTeacherName,
  updateCourse,  
  deleteCourse, 
  updateUserEnrollment,
  getCourseAssignment, 
  getCoursePrice,
  getTotalCourses
} = require('../controllers/courseController');


// create a course -> post
router.post('/courses', createCourse);
// show all courses -> get
router.get('/courses', getCourses);
// get courses with limit
router.get('/courses/limited', getCoursesWithLimit)

// get popular courses
router.get('/courses/popularCourses', getPopularCourses)
// get course by id
router.get('/courses/:course_id', getCourseById);
// get course with limit 
router.get('/courses/teacher_email/:teacher_email/limited', getCourseByEmailWithLimit)
//get course by status
router.get('/courses/course_status/:course_status', getCourseByStatus);
//get course by status
router.get('/courses/course_status/:course_status/limited', getCourseByStatusWithLimit);


// get user_enrollment form a course 
router.get('/courses/:course_id/user_enrollment', getUserEnrollment)
// get course_assignment from a course
router.get('/courses/:course_id/course_assignment', getCourseAssignment)
// get course_price from a course
router.get('/courses/:course_id/course_price', getCoursePrice);
// get course_title from a course
router.get('/courses/:course_id/course_title', getCourseTitle);
// get teacher_name from a course
router.get('/courses/:course_id/teacher_name', getTeacherName);


// update a course -> put
router.patch('/courses/:course_id', updateCourse);
// update course state -> pending to approve/reject
router.patch('/courses/:course_id/course_status', updateCourseStatus)   // input_status -> approved/rejected 
// update user enrollment
router.patch('/courses/:course_id/user_enrollment', updateUserEnrollment);
// update course_assignment 
router.patch('/courses/:course_id/course_assignment', updateCourseAssignment)


// delete a course
router.delete('/courses/:course_id', deleteCourse);
// get total users
router.get('/totalCourses', getTotalCourses)



module.exports = router;