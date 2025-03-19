import axiosInstance from "../config/axiosInstance";


// create user in database
export const createUser = async (user) => {
  const res = await axiosInstance.post("/users", user);
  return res.data;
}

// get all the users
export const getUsers = async () => {
  const res = await axiosInstance.get('/users');
  return res.data;
}

// get user object of specific email
export const getUserByEmail = async (user_email) => {
  const res = await axiosInstance.get(`/users/user_email/${user_email}`);
  return res.data;
}

export const getUserRole = async (user_email) => {
  const res = await axiosInstance.get(`/users/${user_email}/user_role`);
  return res.data;
}

export const getUserImage = async (user_email) => {
  const res = await axiosInstance.get(`/users/${user_email}/user_image`);
  return res.data;
}


//make a specific email user admin -> patch update of user 
export const updateUserRole = async (user_email, user_role) => {
  //console.log(user_role, user_email)
  const res = await axiosInstance.patch(`/users/${user_email}/user_role`, {user_role})
  return res.data;
}


// get all the users
export const getTotalUsers = async () => {
  const res = await axiosInstance.get('/totalUsers');
  return res.data;
}



