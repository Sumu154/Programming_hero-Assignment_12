import React, { useContext, useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


import { AuthContext } from '../../contexts/AuthProvider';
import axiosInstance from '../../config/axiosInstance';

const ProfileCard = () => {
  const { user, setUser } = useContext(AuthContext);
  const user_email = user.user_email;
 

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axiosInstance.get(`/users?user_email=${user_email}`);
      setUser(res.data);
    }
    fetchUser();
  }, [])

  const { user_name, user_image, user_role } = user;
  console.log(user);

  return (
    <div className='text-center text-dark border-dark/10 border-[1px] py-8 rounded-sm '>
      <div className='h-32 w-32 mx-auto object-fit rounded-full overflow-hidden mb-4'> <img src={user_image} alt="" /> </div>
      <p className='opacity-95 text-2xl font-semibold mb-1'> {user_name} </p>
      <p className='opacity-85 text-lg font-semibold mb-6'> {user_role} </p>
      <div className='mx-auto inline-block text-dark/70'>
        <p className='flex items-center gap-2'> <MdEmail className='text-[22px]' /> <span> Email:  {user_email} </span> </p>
        <p className='flex items-center gap-2 '> <FaPhoneAlt /> <span> Phone:  Not provided </span> </p>
      </div>
    </div>
  );
};

export default ProfileCard;