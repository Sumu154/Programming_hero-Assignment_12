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


// get a course by course_id
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

// get courses by user_email


// get a course by status
const getCourseByStatus = async (req, res) => {
  try{
    const course_status = req.params.course_status;

    const courses = await courseModel.find({ course_status })
    res.status(200).json(courses);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

const getCourseByStatusWithLimit = async (req, res) => {
  try{
    const { page, limit } = req.query;
    const course_status = req.params.course_status;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const totalCourses = await courseModel.countDocuments({ course_status });

    // Fetch courses with pagination
    const courses = await courseModel.find({ course_status }).skip(pageNumber*limitNumber).limit(limitNumber);
    res.status(200).json({ 
      courses, 
      totalPages: Math.ceil(totalCourses/limitNumber) // Send total pages count
    });
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

// get popular courses -> jar user_enrollment beshi shegula fetch korte hbe
// 1️⃣ Finds all courses
// 2️⃣ Sorts them in descending order
// 3️⃣ Returns only the top 3 results
const getPopularCourses = async (req, res) => {
  try{
    const popularCourses = await courseModel.find().sort({ user_enrollment: -1 }).limit(4); 
    res.status(200).json(popularCourses)            
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

// get course er ekta info -> user_enrollment chai
const getUserEnrollment = async (req, res) => {
  try{
      const { course_id } = req.params;
      const course = await courseModel.findOne( {_id:course_id} );
      res.status(200).json(course.user_enrollment);
    }
    catch(e){
      res.status(500).json({ message: 'Internal server error: ', error:e.message });
    }
}


const getCourseAssignment = async (req, res) => {
  try{
      const { course_id } = req.params;
      const course = await courseModel.findOne( {_id:course_id} );
      res.status(200).json(course.course_assignment);
    }
    catch(e){
      res.status(500).json({ message: 'Internal server error: ', error:e.message });
    }
}


// get course er ekta info -> course_price chai
const getCoursePrice = async (req, res) => {
  try{
      const { course_id } = req.params;
      const course = await courseModel.findOne( {_id:course_id} );
      res.status(200).json(course.course_price);
    }
    catch(e){
      res.status(500).json({ message: 'Internal server error: ', error:e.message });
    }
}


// get course er ekta info -> course_title chai
const getCourseTitle = async (req, res) => {
  try{
      const { course_id } = req.params;
      const course = await courseModel.findOne( {_id:course_id} );
      res.status(200).json(course.course_title);
    }
    catch(e){
      res.status(500).json({ message: 'Internal server error: ', error:e.message });
    }
}

// get teacher_name by course_id
const getTeacherName = async (req, res) => {
  try{
    const { course_id } = req.params;
    const course = await courseModel.findOne( {_id:course_id} );
      res.status(200).json(course.teacher_email);
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

// update course_assignment -> increment / decrement
const updateCourseAssignment = async (req, res) => {
  try{
    const { course_id } = req.params;
    const { change } = req.body;

    const course = await courseModel.findOne({ _id:course_id });
    
    if(change==='increment'){
      course.course_assignment += 1;
    } 
    else if(change==='decrement' && course.course_assignment>0) {
      course.course_assignment -= 1;
    }

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


module.exports = { 
  createCourse, 
  getCourses, 
  getCourseById, 
  getCourseByStatus, 
  getCourseByStatusWithLimit,
  getPopularCourses, 
  getUserEnrollment, 
  getCourseAssignment, 
  getCoursePrice, 
  getCourseTitle, 
  getTeacherName,
  updateCourse, 
  updateCourseStatus, 
  updateCourseAssignment, 
  deleteCourse
};
