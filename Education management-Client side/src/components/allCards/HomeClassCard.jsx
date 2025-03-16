import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniUsers } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";



const HomeClassCard = ( {course} ) => {
  const { _id:course_id, course_title, course_image, teacher_name, course_price, user_enrollment } = course;
 

  return (
    <div className='border-dark/15 border-[1px] hover:border-purple  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='h-[160px] w-full ' src={course_image} alt="" />
      </div>
      <div className='dark:text-white px-3'>
        <p className='text-dollargreen font-bold flex items-center gap-1 mb-2 '> <span className=''> <BsCurrencyDollar /> </span> {course_price} </p>
        <h3 className='text-dark/90 font-semibold text-xl mb-1 '> {course_title} </h3>
        <p className='text-dark/80 font-semibold mb-3'> {teacher_name} </p>
        <p className='text-dark/70 font-medium flex items-center gap-1 '> <span className='flex items-center gap-1 mr-1'> <HiMiniUsers /> <span> Total Enrollment: </span> </span> {user_enrollment} </p>
        
      </div>
      <div className='my-3 mb-5 flex justify-center'> <Link to={`/classes/${course_id}`}> <button className='bg-purple/95  hover:bg-purple px-6 py-[6px] rounded-full text-white '> Enroll </button> </Link> </div>
    </div>
  );
};

export default HomeClassCard;