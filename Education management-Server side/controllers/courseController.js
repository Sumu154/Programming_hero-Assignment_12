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


// update a course by id
const getCourseById = async (req, res) => {
  try{
    const id = req.params.course_id;
    // console.log(id);
    const course = await courseModel.findOne( {_id: id} );
    res.status(200).json(course);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

// update a course by course_id -> but status and enrollment same thakbe -> patch
const updateCourse = async (req, res) => {
  try{
    const course_id = req.params.course_id;
    const updateFields = { ...req.body };

     // Prevent user_enrollment and course_status from being updated
     delete updateFields.user_enrollment;
     delete updateFields.course_status;

     console.log(updateFields);

    const updatedCourse = await courseModel.findOneAndUpdate(
      { _id:course_id },
      { $set: updateFields },  // Only update provided fields
      { new: true },
    )
    console.log(updatedCourse);
    res.status(200).json(updatedCourse);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// update a course status only
const updateCourseStatus = async (req, res) => {
  try{
    const course_id = req.params.course_id;
    const course_status = req.body.course_status;

    const course = await courseModel.findOne({ _id:course_id })
    
    course.course_status = course_status;
    await course.save();
    res.status(200).json(course);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// delete a marathon by id
const deleteCourse = async (req, res) => {
  try{
    const id = req.params.course_id;
    // console.log(id);

    const deletedCourse = await courseModel.findByIdAndDelete(id);
    res.status(200).json(deletedCourse);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


module.exports = { createCourse, getCourses, getCourseById, updateCourse, updateCourseStatus, deleteCourse };
