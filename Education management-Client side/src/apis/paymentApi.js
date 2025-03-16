import axiosInstance from "../config/axiosInstance";

export const getPaymentIntent = async (course_price) => {
  const res = await axiosInstance.post('/create-payment-intent', { course_price });
  return res.data;
}