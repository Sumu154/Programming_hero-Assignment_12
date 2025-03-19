const submissionModel = require('../models/submissionModel')

const createSubmission = async (req, res) => {
  try{
    // console.log('post api hitting');
    const submission = req.body;
    console.log(submission);

    const createdSubmission = await submissionModel.create(submission);
    res.status(200).json(createdSubmission);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the submissions
const getSubmissions = async (req, res) => {
  // console.log('get all submissions');
  try{
    const submissions = await submissionModel.find();
    res.status(200).json(submissions);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// submission_id diye pabo
const getSubmissionById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const submission = await submissionModel.findOne( {_id: id} );
    res.status(200).json(submission);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// course_id diye oi courser shb submission pabo
const getSubmissionsByCourse = async (req, res) => {
  try{
    const { course_id } = req.body;
    // console.log(id);
    const submissions = await submissionModel.find( { course_id } );
    res.status(200).json(submissions);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


module.exports = { 
  createSubmission, 
  getSubmissions, 
  getSubmissionById, 
  getSubmissionsByCourse 
};

