import axiosInstance from "../config/axiosInstance";



// Login and get JWT token
export const CreateToken = async ( user_email ) => {
  console.log(user_email);
  const res = await axiosInstance.post("/jwt/login",  {user_email}, {withCredentials: true} );
  return res.data;  // Assuming the response contains the JWT token
}


export const clearToken = async ( ) => {
  const res = await axiosInstance.post("/jwt/logout", {}, {withCredentials: true} );
  return res.data;  // Assuming the response contains the JWT token
}

