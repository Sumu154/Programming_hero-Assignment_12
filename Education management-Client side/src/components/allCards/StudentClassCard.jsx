import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniUsers } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";

import image from '../../assets/images/web-dev.webp'

const StudentClassCard = () => {
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
      </div>
      <div className='px-3 mt-8 mb-6 '> <Link to={`/classes/${id}`}> <button className='rounded-[2px] w-full bg-orchid/95  hover:bg-orchid py-[6px]  text-white '> Continue course </button> </Link> </div>
    </div>
  );
};

export default StudentClassCard;