import axiosInstance from "../config/axiosInstance";

export const makePaymentIntents = async (price) => {
  const res = await axiosInstance.post('/create-payment-intent', { price });
  return res.data.clientSecret;
}