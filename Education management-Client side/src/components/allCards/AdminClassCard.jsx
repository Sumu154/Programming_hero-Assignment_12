import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/web-dev.webp'
import { MdDelete, MdEmail, MdOutlineUpdate } from 'react-icons/md';
import { updateCourseStatus } from '../../apis/courseApi';
import Swal from 'sweetalert2';

const AdminClassCard = ( {course, onStatusUpdate} ) => {
  
  const { _id:course_id, course_title, course_image, teacher_name, teacher_email, course_description, course_price, course_status, user_enrollment } = course;

  const handleUpdateCourseStatus = async (input_status) => {
    // //console.log(course_id, input_status);
    const data = await updateCourseStatus(course_id, input_status);
    // //console.log(data);
    onStatusUpdate?.(); // Notify parent to refresh data


    if(input_status === 'approved'){
      Swal.fire({
        title: "This course is approved!",
        icon: "success",
        customClass: {
          popup: 'small-modal'
        }
      })
    }
    else{
      Swal.fire({
        title: "this course is rejected",
        text: "Failed to delete the course.",
        icon: "error",
        customClass: {
          popup: 'small-modal'
        }
      });
    }
   
    
  }

  return (
    <div className='border-dark/15 border-[1px] hover:border-purple  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='h-[160px] w-full ' src={course_image} alt="" />
      </div>
      <div className='dark:text-white px-3'>
        <h3 className='text-dark/90 font-semibold text-xl mb-1 '> {course_title} </h3>
        <p className='text-dark/80 flex items-center gap-2 mb-2'> <MdEmail className='text-xl' /> <span> {teacher_email} </span> </p>
        <p className='text-dark/70 text-[15px] '> {course_description} </p>
      </div>
      {/* buttons */}
      <div className='px-3 mt-8 mb-3 '> <Link to={`/dashboard/adminClasses/${course_id}`}> 
        <button className={`rounded-lg w-full  py-[6px]  text-white  
          ${course_status==='pending' || course_status==='rejected' ? 'bg-ash cursor-not-allowed' : 'bg-orchid/95  hover:bg-orchid'}`} 
          disabled={course_status==='pending' || course_status==='rejected'}> See progress 
        </button> </Link> 
      </div>
      <div className='px-3 w-full mb-3 flex justify-between '>
        <Link className='w-[48%] ' > <button onClick={()=>handleUpdateCourseStatus('approved')} className='rounded-lg w-full bg-green  hover:bg-green/95 py-[4px]  text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Approve </span> <MdOutlineUpdate className='text-xl' /> </button> </Link>
        <Link className='w-[48%] ' > <button onClick={()=>handleUpdateCourseStatus('rejected')} className='rounded-lg w-full bg-redd  hover:bg-redd/90 py-[4px] text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Reject </span> <MdDelete className='text-xl' /> </button> </Link>
      </div>
    </div>
  );
};

export default AdminClassCard;