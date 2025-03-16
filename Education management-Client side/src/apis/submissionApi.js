import axiosInstance from "../config/axiosInstance";


// create course in database
export const createSubmission = async (submission) => {
  const res = await axiosInstance.post("/submissions", submission);
  return res.data;
}

// get all the courses
export const getSubmissions = async () => {
  const res = await axiosInstance.get('/submissions');
  return res.data;
}

// get submissions by course_id
export const getSubmissionsByCourse = async (user_email) => {
  const res = await axiosInstance.get(`/submissions/user_email/${user_email}`);
  return res.data;
}

