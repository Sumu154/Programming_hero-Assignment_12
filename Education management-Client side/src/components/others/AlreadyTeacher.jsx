import Lottie from 'lottie-react';
import React from 'react';

import conratulations from '../../assets/Animations/congratulations.json'

const AlreadyTeacher = () => {
  return (
    <div className='mb-16'>
      <Lottie className='w-[70%] md:w-[40%] mx-auto ' animationData={conratulations} loop={true} />
      <h3 className='text-3xl lg:text-4xl text-center font-bold text-orchid '> You have been promoted to teacher </h3>
    </div>
  );
};

export default AlreadyTeacher;