const enrollmentModel = require('../models/enrollmentModel');
const courseModel = require('../models/courseModel')

// create or push a 
const createEnrollment = async (req, res) => {
  const { user_email, course_id } = req.body;  

  try {
    const existingEnrollment = await enrollmentModel.findOne({ user_email });

    if(existingEnrollment) {
      if(!existingEnrollment.course_enrolled.includes(course_id)){
        existingEnrollment.course_enrolled.push(course_id);
        await existingEnrollment.save();
        return res.status(200).json({ message: "Course added successfully", enrollment: existingEnrollment });
      } 
      else {
        return res.status(400).json({ message: "Already enrolled in this course" });
      }
    } 
    else{
      const newEnrollment = new enrollmentModel({
        user_email,
        course_enrolled: [course_id] 
      });
      await newEnrollment.save();
      return res.status(201).json({ message: "Enrollment successful", enrollment: newEnrollment });
    }
  } 
  catch (e) {
    res.status(500).json({ message: "Server error", e });
  }
};


// 1 Get all enrollments
const getEnrollments = async (req, res) => {
  try {
    const enrollments = await enrollmentModel.find();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// Get enrollments by user email
const getEnrollmentByEmail = async (req, res) => {
  const { user_email } = req.params;

  try {
    const enrollment = await enrollmentModel.findOne({ user_email });
    if(!enrollment) {
      return res.status(404).json({ message: "No enrollments found for this user" });
    }

    const enrolledCourses = await courseModel.find({ _id: { $in: enrollment.course_enrolled } });

    res.status(200).json({ user_email, enrolledCourses });
  } 
  catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createEnrollment, getEnrollments, getEnrollmentByEmail };
