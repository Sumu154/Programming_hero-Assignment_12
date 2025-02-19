import React from 'react';

import errorLottie from '../../assets/Animations/error.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <Lottie className='w-[600px] mx-auto ' animationData={errorLottie} />
      <Link to={'/'}> <p className='text-center underline'> Back to home </p> </Link>
    </div>
  );
};

export default Error;