import axios from "axios";

// Determine the base URL with proper fallback logic
const getBaseURL = () => {
  if(import.meta.env.VITE_API_URL_1){
    return import.meta.env.VITE_API_URL_1;
  } 
  else if(import.meta.env.VITE_API_URL_2){
    return import.meta.env.VITE_API_URL_2;
  } 
  else {
    return "http://localhost:3000/api";
  }
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://education-management-server-side.vercel.app/api',
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
