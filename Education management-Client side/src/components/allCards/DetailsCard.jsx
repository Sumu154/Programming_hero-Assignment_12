import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniUsers } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";

import image from '../../assets/images/web-dev.webp'

const DetailsCard = ( {price, enrollment } ) => {
  
  return (
    <div className='bg-white border-dark/15 border-[1px] hover:border-purple p-2 sm:max-w-[320px] sm:mx-auto -mt-10 sm:-mt-12 lg:-mt-[166px]  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='h-[160px] w-full ' src={image} alt="" />
      </div>
      <div className='dark:text-white'>
        <p className='text-green text-xl font-bold flex items-center gap-1 '> <span className=''> <BsCurrencyDollar /> </span> {price} </p>
        <div className='my-3 mb-9'> <Link to={`/classes/}`}> <button className='w-full bg-orchid/95  hover:bg-orchid px-6 py-[6px] text-white '> Pay for this course </button> </Link> </div>
        <p className='text-dark/70 font-medium flex items-center gap-1 mb-5 '> <span className='flex items-center gap-1 mr-1'> <HiMiniUsers /> <span> Total Enrollment: </span> </span> {enrollment} </p>
      </div>
    </div>
  );
};

export default DetailsCard;