const express = require('express');
const router = express.Router();
const { createCourse, getCourses, getCourseById } = require('../controllers/courseController');


// create a teacher -> post
router.post('/courses', createCourse);
// show all courses -> get
router.get('/courses', getCourses);
// get teacher by id
router.get('/courses/:id', getCourseById);


module.exports = router;