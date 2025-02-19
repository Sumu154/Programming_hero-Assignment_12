import loading from '../../assets/Animations/loading.json'
import Lottie from 'lottie-react';
import React from 'react';


const Loading = () => {
  return (
    <div className='max-w-[300px] mx-auto '>
      <Lottie animationData={loading} loop={true} ></Lottie>
    </div>
  );
};

export default Loading;