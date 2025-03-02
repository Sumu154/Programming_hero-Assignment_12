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

// get assignments by course
export const getAssignmentsByCourse = async (course_id) => {
  const res = await axiosInstance.get(`/assignments/course_id/${course_id}`);
  return res.data;
}