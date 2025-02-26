import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniUsers } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import axiosInstance from '../../config/axiosInstance';
import { CourseContext } from '../../contexts/CourseProvider';
import { deleteCourse } from '../../apis/courseApi';


const TeacherClassCard = ( { course } ) => {
  const { _id:course_id, course_title, course_image, teacher_name, teacher_email, course_description, course_price, course_status, user_enrollment } = course;

  const { courses, setCourses } = useContext(CourseContext)

  const handleDeleteCourse = async () => {
    //console.log(id);

    const alert = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  
    if(alert.isConfirmed){
      // Add your delete logic here, if any
      const res1 = await deleteCourse(course_id);

      if(res1.status===200){
        console.log('its in');
        setCourses(prevCourses => prevCourses.filter(it => it._id !== course_id)); //react prev state course theke course_id er element ta remove
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } 
      else{
        Swal.fire({
          title: "Error",
          text: "Failed to delete the course.",
          icon: "error",
        });
      }
    }
  }


  const statusClass = course_status === 'approved' ? 'bg-green/20 text-green border-green' :
                      course_status === 'pending' ? 'bg-orange/20 text-orange border-orange' :
                      course_status === 'rejected' ? 'bg-redd/20 text-redd border-redd' : '';

  return (
    <div className='border-dark/15 border-[1px] hover:border-purple  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='h-[160px] w-full ' src={course_image} alt="" />
      </div>
      
      <div className='dark:text-white px-3 '>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-green font-bold flex items-center gap-1 '> <span className=''> <BsCurrencyDollar /> </span> {course_price} </p>
          <p className={`${statusClass} font-medium px-3 py-[2px] rounded-full border-[1.5px] `}> {course_status} </p>
        </div>
        <h3 className='text-dark/90 font-semibold text-lg  md:text-xl mb-1 '> {course_title} </h3>
        <p className='text-dark/80 font-semibold mb-1'> {teacher_name} </p>
        <p className='text-dark/70 flex items-center gap-1 my-1 '> <span className='flex items-center gap-2'> <MdEmail /> <span className='mb-[2px] '> {teacher_email} </span> </span>  </p>

        <p className='text-dark/70 flex items-center gap-1 '> <span className='flex items-center gap-2 mr-1'> <HiMiniUsers /> <span> Total Enrollment: </span> </span> {user_enrollment} </p>
        
      </div>
      {/* buttons */}
      <div className='px-3 mt-8 mb-3 '> <Link to={`/dashboard/teacherClasses/${course_id}`}> 
        <button className={`rounded-lg w-full  py-[6px]  text-white  
          ${course_status==='pending' || course_status==='rejected' ? 'bg-ash cursor-not-allowed' : 'bg-orchid/95  hover:bg-orchid'}`} 
          disabled={course_status === 'pending' || course_status === 'rejected'}> See details 
        </button> </Link> 
      </div>
      <div className='px-3 w-full mb-3 flex justify-between '>
        <Link className='w-[48%] ' to={`/dashboard/teacherUpdateClasses/${course_id}`}> <button className='rounded-lg w-full bg-darkyellow/90  hover:bg-darkyellow py-[4px]  text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Update </span> <MdOutlineUpdate className='text-xl' /> </button> </Link>
        <Link className='w-[48%] ' > <button onClick={handleDeleteCourse} className='rounded-lg w-full bg-redd  hover:bg-redd/95 py-[4px] text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Delete </span> <MdDelete className='text-xl' /> </button> </Link>
      </div>
    </div>
  );
};

export default TeacherClassCard;