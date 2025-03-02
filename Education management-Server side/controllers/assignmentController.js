const assignmentModel = require('../models/assignmentModel');


const createAssignment = async (req, res) => {
  try{
    // console.log('post api hitting');
    const assignment = req.body;

    const createdAssignment = await assignmentModel.create(assignment);
    res.status(200).json(createdAssignment);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the assignments
const getAssignments = async (req, res) => {
  // console.log('get all assignments');
  try{
    const assignments = await assignmentModel.find();
    res.status(200).json(assignments);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}

const getAssignmentById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const assignment = await assignmentModel.findOne( {_id: id} );
    res.status(200).json(assignment);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


const getAssignmentsByCourse = async (req, res) => {
  try{
    const { course_id } = req.params;
    // console.log(id);
    const assignments = await assignmentModel.find( { course_id } );
    res.status(200).json(assignments);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// update assignment_submission
const updateAssignmentSubmission = async (req, res) => {
  // try{
  //   const {  }
  // }
  // catch(e){

  // }
}



module.exports = { createAssignment, getAssignments, getAssignmentById, getAssignmentsByCourse };
