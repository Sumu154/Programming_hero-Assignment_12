import axiosInstance from "../config/axiosInstance";

export const makePaymentIntents = async (course_price) => {
  console.log(course_price)
  const res = await axiosInstance.post('/create-payment-intent', { course_price });
  console.log(res.data);
  return res.data;
}