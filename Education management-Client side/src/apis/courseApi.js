import axiosInstance from "../config/axiosInstance";


// create course in database
export const createCourse = async (course) => {
  const res = await axiosInstance.post("/courses", course);
  return res.data;
}

// get all the courses
export const getCourses = async () => {
  const res = await axiosInstance.get('/courses');
  return res.data;
}

// get courses array of specific email
// export const getCourseByEmail = async (course_email) => {
//   const res = await axiosInstance.get(`/courses/email/${course_email}`);
//   return res.data;
// }

// get course object by specific course_id
export const getCourseById = async (course_id) => {
  const res = await axiosInstance.get(`/courses/${course_id}`);
  return res.data;
}

export const updateCourse = async (course_id, course) => {
  const res = await axiosInstance.patch(`/courses/${course_id}`, course);
  return res.data;
}

export const updateCourseStatus = async (course_id, course_status) => {
  console.log('in api', course_id, course_status);
  const res = await axiosInstance.patch(`/courses/${course_id}/status`, {course_status})
  return res.data;
}


export const deleteCourse = async (course_id) => {
  const res = await axiosInstance.delete(`/courses/${course_id}`)
  return res;
}