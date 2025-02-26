import React, { useContext, useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


import { AuthContext } from '../../contexts/AuthProvider';
import axiosInstance from '../../config/axiosInstance';
import { getUserByEmail } from '../../apis/userApi';

const ProfileCard = () => {
  const { user } = useContext(AuthContext);    //ei user jeta firebase e save hoye ace
  const user_email = user.email;
  // console.log(user_email)

  const [ userInfo, setUserInfo ] = useState({});   //so databse theke nite gele amar new variable e set korte hbe..setUser ekhane korte parbo na
 

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getUserByEmail(user_email);
      setUserInfo(data);
    }
    fetchUserInfo();
  }, [user_email])

  console.log(userInfo);

  const { user_name, user_image, user_role } = userInfo;

  
  return (
    <div className='text-center text-dark border-dark/10 border-[1px] py-8 rounded-sm '>
      <div className='h-40 w-40 mx-auto object-fit rounded-full overflow-hidden mb-4'> <img src={user_image} alt="" /> </div>
      <p className='opacity-95 text-2xl font-semibold mb-1'> {user_name} </p>
      <p className='opacity-85 text-lg font-semibold mb-6'> {user_role} </p>
      <div className='mx-auto inline-block text-dark/70'>
        <p className='flex items-center gap-2 mb-1'> <MdEmail className='text-[22px]' /> <span> Email:  {user_email} </span> </p>
        <p className='flex items-center gap-2 '> <FaPhoneAlt className='text-lg' /> <span className='ml-1'> Phone:  Not provided </span> </p>
      </div>
    </div>
  );
};

export default ProfileCard;