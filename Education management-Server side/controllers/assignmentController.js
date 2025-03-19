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

// assignment_id diye pabo
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


// course_id diye oi courser shb assignment pabo
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


// update assignment_submission -> increase one
const updateAssignmentSubmission = async (req, res) => {
  try{
    const { assignment_id } = req.params;
    console.log(assignment_id);

    const assignment = await assignmentModel.findOne({ _id:assignment_id });

    assignment.assignment_submission += 1;
    await assignment.save();
    res.status(200).json(assignment);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// aggregate related
const getAssignmentSubmissionPerCourse = async (req, res) => {
  try{
    const { course_id } = req.params;

    const totalSubmissions = await assignmentModel.aggregate([
      {
        $match: { course_id } // Filter assignments for the given course_id
      },
      {
        $group: {
          _id: null,  // kono kicur opor group bananor drkar nei
          total_submissions: { $sum: "$assignment_submission" }
        }
      }
    ]);
    console.log(totalSubmissions);

    // If no submissions found, return 0
    const total = totalSubmissions.length>0 ? totalSubmissions[0].total_submissions : 0;
    res.status(200).json(total);

  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// total user
const getTotalAssignments = async (req, res) => {
  try{
    const totalAssignments = await assignmentModel.countDocuments();
    res.status(200).json(totalAssignments);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}



module.exports = { 
  createAssignment, 
  getAssignments, 
  getAssignmentById, 
  getAssignmentsByCourse, 
  updateAssignmentSubmission, 
  getAssignmentSubmissionPerCourse,
  getTotalAssignments
};
