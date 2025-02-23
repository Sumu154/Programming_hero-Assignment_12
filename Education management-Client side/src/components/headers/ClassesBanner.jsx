import React from 'react';

import image from '../../assets/images/online-class.webp'

const ClassesBanner = () => {
  return (
    <div className='w-full bg-cover bg-center ' style={{backgroundImage: `linear-gradient(259deg, rgba(21, 21, 21, 0.21) 11.86%, rgba(21, 21, 21, 0.70) 56.33%, rgba(21, 21, 21, 0.85) 96.32%), url(${image})`}}>
      <div className='w-[90%] mx-auto text-white px-4 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-28   '>
        <p className='font-Montserrat font-semibold text-lg md:text-xl pb-2  '> Skill Learning Made Simple </p>
        <h3 className='font-Montserrat text-4xl md:text-5xl lg:text-6xl  font-bold max-w-[850px] pb-4 '> Explore All Classes & Courses! </h3>
        <p className='text-sm md:text-base max-w-[600px] '> Empowering institutions, tutors, and students with a seamless learning experience. Manage classes, track progress, and enhance skills—all track progress, and enhance skills—all in one place. </p>
      </div>
    </div>
  );
};

export default ClassesBanner;