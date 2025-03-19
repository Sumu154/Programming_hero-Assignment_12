import axiosInstance from "../config/axiosInstance";


// create course in database
export const createAssignment = async (assignment) => {
  const res = await axiosInstance.post("/assignments", assignment);
  return res.data;
}

// get all the courses
export const getAssignments = async () => {
  const res = await axiosInstance.get('/assignments');
  return res.data;
}

// get assignments by course_id
export const getAssignmentsByCourse = async (course_id) => {
  const res = await axiosInstance.get(`/assignments/course_id/${course_id}`);
  return res.data;
}

// get assignment_submission
export const updateAssignmentSubmission = async (assignment_id) => {
  //console.log(assignment_id)
  const res = await axiosInstance.patch(`/assignments/${assignment_id}/assignment_submission`);
  return res.data;
}

// get assignment_submission by course_id -> jotogua assignment thakbe oi specific courser shber sum
export const getAssignmentSubmissionPerCourse = async (course_id) => {
  const res = await axiosInstance.get(`/assignments/course_id/${course_id}/total_submissions`);
  return res.data;
}


// get all the users
export const getTotalAssignments = async () => {
  const res = await axiosInstance.get('/totalAssignments');
  return res.data;
}