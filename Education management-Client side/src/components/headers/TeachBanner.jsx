import React from 'react';

import teachOnline from '../../assets/images/teach-online.jpeg'

const TeachBanner = () => {
  return (
    <div className='w-full bg-cover bg-center mb-12 ' style={{backgroundImage: `linear-gradient(259deg, rgba(21, 21, 21, 0.21) 11.86%, rgba(21, 21, 21, 0.70) 56.33%, rgba(21, 21, 21, 0.85) 96.32%), url(${teachOnline})`}}>
      <div className='w-[90%] mx-auto text-white px-4 pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-28 lg:pb-28   '>
        <h3 className='font-Montserrat text-4xl md:text-5xl lg:text-6xl  font-bold max-w-[700px] pb-4 '> Teach Online & Inspire Learners! </h3>
        <p className='text-sm md:text-base max-w-[600px] '> Share your knowledge, connect with students, and make an impact. Teach online with ease and help learners grow with your expertise! 🚀 </p>
      </div>
    </div>
  );
};

export default TeachBanner;