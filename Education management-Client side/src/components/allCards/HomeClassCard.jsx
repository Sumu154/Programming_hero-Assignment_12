import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniUsers } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";

import image from '../../assets/images/web-dev.webp'


const HomeClassCard = () => {
  const title = 'Full-Stack Web Development';
  const instructor_name = 'Fatima Noor';
  const enrollment = 1657;
  const price = 200;
  const id = 1;

  return (
    <div className='border-dark/15 border-[1px] hover:border-purple  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='h-[160px] w-full ' src={image} alt="" />
      </div>
      <div className='dark:text-white px-3'>
        <h3 className='text-dark/90 font-semibold text-xl mb-1 '> {title} </h3>
        <p className='text-dark/80 font-semibold mb-3'> {instructor_name} </p>
        <p className='text-dark/70 font-medium flex items-center gap-1 '> <span className='flex items-center gap-1 mr-1'> <HiMiniUsers /> <span> Total Enrollment: </span> </span> {enrollment} </p>
        <p className='text-green font-bold flex items-center gap-1 '> <span className=''> <BsCurrencyDollar /> </span> {price} </p>
      </div>
      <div className='my-3 mb-5 flex justify-center'> <Link to={`/classes/${id}`}> <button className='bg-purple/95  hover:bg-purple px-6 py-[6px] rounded-full text-white '> Enroll </button> </Link> </div>
    </div>
  );
};

export default HomeClassCard;