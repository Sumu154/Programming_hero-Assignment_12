import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniUsers } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";


import image from '../../assets/images/web-dev.webp'

const TeacherClassCard = () => {
  const title = 'Full-Stack Web Development';
  const instructor_name = 'Fatima Noor';
  const instructor_email = 'fatima@gmail.com';
  const enrollment = 1657;
  const price = 200;
  const status = 'approved'
  const id = 1;

  const statusClass = status === 'approved' ? 'bg-green/20 text-green border-green' :
                      status === 'pending' ? 'bg-orange/20 text-orange border-orange' :
                      status === 'rejected' ? 'bg-redd/20 text-redd border-redd' : '';

  return (
    <div className='border-dark/15 border-[1px] hover:border-purple  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='h-[160px] w-full ' src={image} alt="" />
      </div>
      
      <div className='dark:text-white px-3 '>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-green font-bold flex items-center gap-1 '> <span className=''> <BsCurrencyDollar /> </span> {price} </p>
          <p className={`${statusClass} font-medium px-3 py-[2px] rounded-full border-[1.5px] `}> {status} </p>
        </div>
        <h3 className='text-dark/90 font-semibold text-lg  md:text-xl mb-1 '> {title} </h3>
        <p className='text-dark/80 font-semibold mb-1'> {instructor_name} </p>
        <p className='text-dark/70 flex items-center gap-1 mb-2 '> <span className='flex items-center gap-2'> <MdEmail /> <span className='mb-[2px] '> {instructor_email} </span> </span>  </p>

        <p className='text-dark/70 flex items-center gap-1 '> <span className='flex items-center gap-2 mr-1'> <HiMiniUsers /> <span> Total Enrollment: </span> </span> {enrollment} </p>
        
      </div>
      {/* buttons */}
      <div className='px-3 mt-8 mb-3 '> <Link to={`/dashboard/teacherClasses/${id}`}> 
        <button className={`rounded-lg w-full  py-[6px]  text-white  
          ${status==='Pending' || status==='Rejected' ? 'bg-ash cursor-not-allowed' : 'bg-orchid/95  hover:bg-orchid'}`} 
          disabled={status === 'Pending' || status === 'Rejected'}> See details 
        </button> </Link> 
      </div>
      <div className='px-3 w-full mb-3 flex justify-between '>
        <Link className='w-[48%] ' to={`/classes/${id}`}> <button className='rounded-lg w-full bg-darkyellow/90  hover:bg-darkyellow py-[4px]  text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Update </span> <MdOutlineUpdate className='text-xl' /> </button> </Link>
        <Link className='w-[48%] ' to={`/classes/${id}`}> <button className='rounded-lg w-full bg-redd  hover:bg-redd/95 py-[4px] text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Delete </span> <MdDelete className='text-xl' /> </button> </Link>
      </div>
    </div>
  );
};

export default TeacherClassCard;