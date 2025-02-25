const courseModel = require('../models/courseModel');


const createCourse = async (req, res) => {
  try{
    // console.log('post api hitting');
    const course = req.body;

    const createdCourse = await courseModel.create(course);
    res.status(200).json(createdCourse);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the courses
const getCourses = async (req, res) => {
  // console.log('get all courses');
  try{
    const courses = await courseModel.find();
    res.status(200).json(courses);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}

const getCourseById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const course = await courseModel.findOne( {_id: id} );
    res.status(200).json(course);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


module.exports = { createCourse, getCourses, getCourseById };
