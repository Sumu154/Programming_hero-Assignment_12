import axiosInstance from "../config/axiosInstance";


// create feedback in database
export const createFeedback = async (feedback) => {
  const res = await axiosInstance.post("/feedbacks", feedback);
  return res.data;
}

// get all the feedbacks
export const getFeedbacks = async () => {
  const res = await axiosInstance.get('/feedbacks');
  return res.data;
}

export const getFeedbackWithLimit = async () => {
  const res = await axiosInstance.get('/feedbacks/limited');
  return res.data;
}

