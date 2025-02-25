import React from 'react';
import { FaUsers } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";


const ThreeCards = () => {
  const enrollment = 1670;
  const assignments = 45;
  return (
    <div className='text-white grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 justify-center gap-6 '>
      <div className='flex justify-center items-center gap-4 py-8 rounded-lg max-w-[280px] ' style={{background: 'linear-gradient(106deg, #D3A256 17.53%, rgba(211, 162, 86, 0.60) 96.42%)'}}>
        <FaUsers className='text-6xl lg:text-7xl' />
        <div className='text-center'>
          <p className='text-3xl md:text-4xl font-bold '> { enrollment } </p>
          <p className=''> Enrollment </p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 py-8 rounded-lg max-w-[280px] ' style={{background: 'linear-gradient(106deg, #FE4880 17.53%, rgba(254, 72, 128, 0.60) 96.42%)'}}>
        <MdOutlineAssignment className='text-5xl lg:text-6xl' height={100} />
        <div className='text-center'>
          <p className='text-3xl md:text-4xl font-bold '> { assignments } </p>
          <p className=''> Assignments </p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 py-8 rounded-lg max-w-[280px] ' style={{background: 'linear-gradient(106deg, #6AAEFF 17.53%, rgba(106, 174, 255, 0.60) 96.42%)'}}>
        <FaBookOpen className='text-5xl lg:text-6xl' />
        <div className='text-center'>
          <p className='text-3xl md:text-4xl font-bold '> { enrollment } </p>
          <p className=''> Submission </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;