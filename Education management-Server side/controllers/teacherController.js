const teacherModel = require('../models/teacherModel');


const createTeacher = async (req, res) => {
  try{
    // //console.log('post api hitting');
    const teacher = req.body;

    const createdTeacher = await teacherModel.create(teacher);
    res.status(200).json(createdTeacher);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the teachers
const getTeachers = async (req, res) => {
  // //console.log('get all teachers');
  try{
    const teachers = await teacherModel.find();
    res.status(200).json(teachers);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// get teachers with limit
const getTeachersWithLimit = async (req, res) => {
  // //console.log('get all teachers');
  try{
    const { page=0, limit=8, searchQuery="" } = req.query;
    console.log(page, limit, searchQuery)

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const searchFilter = {
      teacher_name: { $regex: searchQuery, $options: "i" }
    }
    const totalTeachers = await teacherModel.countDocuments(searchFilter);
    console.log(totalTeachers)

    // Fetch teachers with pagination
    const teachers = await teacherModel.find(searchFilter).skip(pageNumber*limitNumber).limit(limitNumber);
    //console.log(teachers)

    res.status(200).json({ 
      teachers, 
      totalPages: Math.ceil(totalTeachers/limitNumber) // Send total pages count
    });
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}

// get teacher jader status pending
const getTeacherByStatus = async (req, res) => {
  // //console.log('get all teachers');
  try{
    const { teacher_status } = req.params;
    // //console.log(teacher_status)
    const teachers = await teacherModel.find({teacher_status});
    res.status(200).json(teachers);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


const getTeacherByEmail = async (req, res) => {
  // //console.log('get all teachers');
  try{
    const { teacher_email } = req.params;
    const teacher = await teacherModel.find({teacher_email});
    res.status(200).json(teacher);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


const getTeacherById = async (req, res) => {
  try{
    const id = req.params.id;
    // //console.log(id);
    const teacher = await teacherModel.findOne( {_id: id} );
    res.status(200).json(teacher);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}




// update a teacher status only
const updateTeacherStatus = async (req, res) => {
  try{
    const teacher_id = req.params.teacher_id;
    const teacher_status = req.body.teacher_status;
    //console.log(teacher_id, teacher_status)

    const teacher = await teacherModel.findOne({ _id:teacher_id })
    
    teacher.teacher_status = teacher_status;
    await teacher.save();
    res.status(200).json(teacher);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


module.exports = { 
  createTeacher, 
  getTeachers, 
  getTeachersWithLimit,
  getTeacherById, 
  getTeacherByStatus, 
  getTeacherByEmail, 
  updateTeacherStatus 
};
