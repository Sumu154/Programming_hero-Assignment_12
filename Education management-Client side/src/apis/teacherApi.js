import axiosInstance from "../config/axiosInstance";


// create user in database
export const createTeacher = async (teacher) => {
  const res = await axiosInstance.post("/teachers", teacher);
  return res.data;
}

// get all the users
export const getTeachers = async () => {
  const res = await axiosInstance.get('/teachers');
  return res.data;
}


export const getTeacherByStatus = async (teacher_status) => {
  const res = await axiosInstance.get(`/teachers/teacher_status/${teacher_status}`)
  return res.data;
}