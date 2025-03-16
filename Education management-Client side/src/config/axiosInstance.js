import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});


// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    //console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    //console.log("Response Received:", response);
    return response;
  },
  (error) => {
    console.error("Error Response:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
