import React from 'react';

import instructor_image from '../../assets/images/profile-teacher1.jpg'
 
const FeedbackCard = () => {
  const feedback = '“Well-structured database with proper normalization. Good job, Well-structured”';
  const course = 'Machine Learning Model';
  const instructor_name = 'Fatima Noor';


  return (
    <div className='text-dark bg-orchid/10 shadow-lg px-8 py-3' >
      <p className='opacity-85 text-lg text-center font-semibold mb-2'> {feedback} </p>
      <p className='opacity-90 text-center font-bold mb-4 '> {course} </p>
      <div className='flex items-center justify-center gap-6'>
        <div className='w-12 h-12 rounded-full overflow-hidden'> <img className='w-full h-full object-cover' src={instructor_image} alt="" />  </div>
        <div>
          <p className='opacity-90 font-semibold'> {instructor_name} </p>
          <p className='opacity-70'> Teacher </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;