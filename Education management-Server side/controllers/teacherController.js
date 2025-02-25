const teacherModel = require('../models/teacherModel');


const createTeacher = async (req, res) => {
  try{
    // console.log('post api hitting');
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
  // console.log('get all teachers');
  try{
    const teachers = await teacherModel.find();
    res.status(200).json(teachers);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}

const getTeacherById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const teacher = await teacherModel.findOne( {_id: id} );
    res.status(200).json(teacher);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


module.exports = { createTeacher, getTeachers, getTeacherById };
