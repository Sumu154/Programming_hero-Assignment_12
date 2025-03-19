const express = require('express');
const router = express.Router();
const { 
  createFeedback, 
  getFeedbacks, 
  getFeedbackWithLimit,
  getFeedbackById
} = require('../controllers/feedbackController');


// create a teacher -> post
router.post('/feedbacks', createFeedback);
// show all feedbacks -> get
router.get('/feedbacks', getFeedbacks);
// get feedback with limit 
router.get('/feedbacks/limited', getFeedbackWithLimit)

// get teacher by id
router.get('/feedbacks/:feedback_id', getFeedbackById);


module.exports = router;