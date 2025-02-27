import axiosInstance from "../config/axiosInstance";


// create user in database
export const createTeacher = async (teacher) => {
  const res = await axiosInstance.post("/teachers", teacher);
  return res.data;
}

// get all the teachers
export const getTeachers = async () => {
  const res = await axiosInstance.get('/teachers');
  return res.data;
}

// get teacher by email
export const getTeacherByEmail = async (teacher_email) => {
  const res = await axiosInstance.get(`/teachers/teacher_email/${teacher_email}`);
  return res.data;
}


export const getTeacherByStatus = async (teacher_status) => {
  const res = await axiosInstance.get(`/teachers/teacher_status/${teacher_status}`)
  return res.data;
}

// update status -> approved / rejected
export const updateTeacherStatus = async (teacher_id, teacher_status) => {
  console.log('in api', teacher_id, teacher_status);
  const res = await axiosInstance.patch(`/teachers/${teacher_id}/status`, {teacher_status})
  return res.data;
}