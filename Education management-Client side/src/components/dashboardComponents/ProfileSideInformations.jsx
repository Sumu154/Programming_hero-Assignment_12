import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";


const ProfileSideInformations = () => {
  const year = 0;
  const addedClass = 4;
  
  return (
    <div className='border-[1px] border-dark/10 px-3 py-4 text-dark/90 rounded-sm  '>
      <p className='flex items-center gap-2 mb-1'> <FaRegClock className='text-purple' /> <span> You have joined {year} years ago  </span></p>
      <p className='flex items-center gap-2'> < FaBookOpen className='text-purple'/> <span> You have enrolled {addedClass} classes </span> </p>
    </div>
  );
};

export default ProfileSideInformations;