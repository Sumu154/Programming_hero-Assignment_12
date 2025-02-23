import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


import image from '../../assets/images/profile.jfif'

const ProfileCard = () => {
  const user = {
    name: "Sumaiya Tasnim",
    email: "sumu@gmail.com",
    photoURL: "https://i.ibb.co/bRqp28mp/images.jpg",
    status: "pending",
    phone: '015338787098',
    role: "student"
  };

  const { name, email, phone, role } = user;

  return (
    <div className='text-center text-dark border-dark/10 border-[1px] py-8 rounded-sm '>
      <div className='h-32 w-32 mx-auto object-fit rounded-full overflow-hidden mb-4'> <img src={image} alt="" /> </div>
      <p className='opacity-95 text-2xl font-semibold mb-1'> {name} </p>
      <p className='opacity-85 text-lg font-semibold mb-6'> {role} </p>
      <div className='mx-auto inline-block text-dark/70'>
        <p className='flex items-center gap-2'> <MdEmail className='text-[22px]' /> <span> Email:  {email} </span> </p>
        <p className='flex items-center gap-2 '> <FaPhoneAlt /> <span> Phone:  {phone} </span> </p>
      </div>
    </div>
  );
};

export default ProfileCard;