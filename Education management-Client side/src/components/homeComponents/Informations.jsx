import React from 'react';
import { FaUsers } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";




const Informations = () => {
  const total_users = 7869;
  const total_classes = 843;
  const total_enroll = 8776;
  const total_assignment = 878;

  return (
    <div className=' bg-purple text-white py-6 mt-32 '>
      <div className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 items-center gap-6 '>
        <div className='text-center'>
          <div className='text-5xl md:text-6xl flex justify-center'> <FaUsers /> </div>
          <p className='text-3xl font-bold'> {total_users} </p>
          <p className='text-lg'> Total Users </p>
        </div>
        <div className='text-center'>
          <div className='text-4xl md:text-5xl flex justify-center mb-2 '> <MdOutlineClass /> </div>
          <p className='text-3xl font-bold'> {total_classes} </p>
          <p className='text-lg'> Total classes </p>
        </div>
        <div className='text-center'>
          <div className='text-5xl md:text-6xl flex justify-center'> <IoPeople /> </div>
          <p className='text-3xl font-bold'> {total_enroll} </p>
          <p className='text-lg'> Total enrollment </p>
        </div>
        <div className='text-center'>
          <div className='text-4xl md:text-5xl flex justify-center mb-2 '> <MdAssignment /> </div>
          <p className='text-3xl font-bold'> {total_assignment} </p>
          <p className='text-lg'> Total assignments </p>
        </div>
      </div>
    </div>
  );
};

export default Informations;