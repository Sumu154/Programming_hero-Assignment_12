import axiosInstance from "../config/axiosInstance";

export const createEnrollment = async (enrollment) => {
  const res = await axiosInstance.post("/enrollments", enrollment);
  return res;
}

export const getEnrollments = async () => {
  const res = await axiosInstance.post("/enrollments");
  return res.data;
}

export const getEnrollmentByEmail = async (user_email) => {
  const res = await axiosInstance.get(`/enrollments/user_email/${user_email}/course`);
  return res.data;
}