import React from 'react';

import noFound from '../../assets/Animations/no-found.json'
import Lottie from 'lottie-react';

const NotFound = () => {
  return (
    <div>
      <Lottie animationData={noFound} loop={true} ></Lottie>
    </div>
  );
};

export default NotFound;