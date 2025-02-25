const express = require('express');
const router = express.Router();
const { createFeedback, getFeedbacks, getFeedbackById } = require('../controllers/feedbackController');


// create a teacher -> post
router.post('/feedbacks', createFeedback);
// show all feedbacks -> get
router.get('/feedbacks', getFeedbacks);
// get teacher by id
router.get('/feedbacks/:id', getFeedbackById);


module.exports = router;