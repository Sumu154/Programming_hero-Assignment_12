const enrollmentModel = require('../models/enrollmentModel');
const courseModel = require('../models/courseModel')

// create or push a 
const createEnrollment = async (req, res) => {
  const { user_email, course_id, order_transaction_id } = req.body;  

  try{
    const existingEnrollment = await enrollmentModel.findOne({ user_email });

    if(existingEnrollment){
      const alreadyEnrolled = existingEnrollment.course_enrolled.some(
        (enrollment) => enrollment.course.toString() === course_id
      );

      if(!alreadyEnrolled){
        existingEnrollment.course_enrolled.push({ 
          course:course_id, 
          order_transaction_id 
        });
        await existingEnrollment.save();
        return res.status(200).json({ message: "Course added successfully", enrollment: existingEnrollment });
      } 
      else{
        return res.status(400).json({ message: "Already enrolled in this course" });
      }
    } 
    else {
      const newEnrollment = new enrollmentModel({
        user_email,
        course_enrolled: [{ 
          course:course_id, 
          order_transaction_id 
        }]
      });
      await newEnrollment.save();
      return res.status(201).json({ message: "Enrollment successful", enrollment: newEnrollment });
    }
  } 
  catch (e) {
    res.status(500).json({ message: "Server error", error: e.message });
  }
};



// 1 Get all enrollments
const getEnrollments = async (req, res) => {
  try{
    const enrollments = await enrollmentModel.find().populate('course_enrolled');
    res.status(200).json(enrollments);
  } 
  catch(e){
    res.status(500).json({ message: "Server error", e });
  }
};


// Get enrollments by user email
const getEnrollmentByEmail = async (req, res) => {
  const { user_email } = req.params;

  try {
    const enrollments = await enrollmentModel.findOne({ user_email }).populate('course_enrolled.course', 'course_title course_price course_image teacher_name teacher_email');
    if(!enrollments) {
      return res.status(404).json({ message: "No enrollments found for this user" });
    }

    res.status(200).json(enrollments);
  } 
  catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createEnrollment, getEnrollments, getEnrollmentByEmail };
