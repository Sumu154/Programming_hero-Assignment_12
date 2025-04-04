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

// get all the courses
export const getCoursesWithLimit = async ( page, limit, searchQuery ) => {
  const res = await axiosInstance.get('/courses/limited',  { params: { page, limit, searchQuery } } );
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

export const getCourseByEmailWithLimit = async (teacher_email, page, limit, searchQuery) => {
  const res = await axiosInstance.get(`/courses/teacher_email/${teacher_email}/limited`, { params: { page, limit, searchQuery } });
  return res.data;
}

export const getCourseByStatus = async (course_status) => {
  //console.log(course_status)
  const res = await axiosInstance.get(`/courses/course_status/${course_status}`)
  return res.data;
}


export const getCourseByStatusWithLimit = async (course_status, page, limit, searchQuery) => {
  const res = await axiosInstance.get(`/courses/course_status/${course_status}/limited`, { params: { page, limit, searchQuery } });
  return res.data;
}

// get popular courses -> jar user_enrollment beshi shegula fetch korte hbe
export const getPopularCourses = async () => {
  const res = await axiosInstance.get('/courses/popularCourses');
  return res.data;
}

// get user_enrollment
export const getUserEnrollment = async (course_id) => {
  const res = await axiosInstance.get(`/courses/${course_id}/user_enrollment`);
  return res.data;
}

// get course_assignment
export const getCourseAssignment = async (course_id) => {
  const res = await axiosInstance.get(`/courses/${course_id}/course_assignment`);
  return res.data;
}

// get course_price
export const getCoursePrice = async (course_id) => {
  const res = await axiosInstance.get(`/courses/${course_id}/course_price`);
  return res.data;
}

// get course_title
export const getCourseTitle = async (course_id) => {
  const res = await axiosInstance.get(`/courses/${course_id}/course_title`);
  return res.data;
}

// get teacher_name by course_id
export const getTeacherName = async (course_id) => {
  const res = await axiosInstance.get(`/courses/${course_id}/teacher_name`)
  return res.data;
}

export const updateCourse = async (course_id, course) => {
  const res = await axiosInstance.patch(`/courses/${course_id}`, course);
  return res.data;
}

export const updateUserEnrollment = async (course_id) => {
  //console.log('in api', course_id, course_status);
  const res = await axiosInstance.patch(`/courses/${course_id}/user_enrollment`)
  return res.data;
}

export const updateCourseStatus = async (course_id, course_status) => {
  //console.log('in api', course_id, course_status);
  const res = await axiosInstance.patch(`/courses/${course_id}/course_status`, {course_status})
  return res.data;
}

// update course assignment
export const updateCourseAssignment = async (course_id, change) => {
  const res = await axiosInstance.patch(`/courses/${course_id}/course_assignment`, { change });
  return res.data;
}


export const deleteCourse = async (course_id) => {
  const res = await axiosInstance.delete(`/courses/${course_id}`)
  return res;
}


// get all the users
export const getTotalCourses = async () => {
  const res = await axiosInstance.get('/totalCourses');
  return res.data;
}