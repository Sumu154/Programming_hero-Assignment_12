const feedbackModel = require('../models/feedbackModel');


const createFeedback = async (req, res) => {
  try{
    // console.log('post api hitting');
    const feedback = req.body;

    const createdFeedback = await feedbackModel.create(feedback);
    res.status(200).json(createdFeedback);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the feedbacks
const getFeedbacks = async (req, res) => {
  // console.log('get all feedbacks');
  try{
    const feedbacks = await feedbackModel.find();
    res.status(200).json(feedbacks);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}

const getFeedbackById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const feedback = await feedbackModel.findOne( {_id: id} );
    res.status(200).json(feedback);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


module.exports = { createFeedback, getFeedbacks, getFeedbackById };
