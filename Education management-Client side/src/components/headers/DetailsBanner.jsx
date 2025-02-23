import React from 'react';

import image from '../../assets/images/classBanner.png'

const DetailsBanner = ( {title, description} ) => {
  return (
   <div className='w-full bg-cover bg-center ' style={{backgroundImage: `linear-gradient(278deg, rgba(46, 37, 83, 0.75) 5.44%, rgba(46, 37, 83, 0.85) 42.91%, rgba(46, 37, 83, 0.95) 74.63%), url(${image})`}}>
      <div className='w-[90%] mx-auto text-white px-4 pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-28 lg:pb-28   '>
        <h3 className='font-Montserrat text-4xl md:text-5xl lg:text-6xl  font-bold max-w-[700px] pb-4 '> {title} </h3>
        <p className='text-sm md:text-base max-w-[600px] '> {description} </p>
      </div>
    </div>
  );
};

export default DetailsBanner;