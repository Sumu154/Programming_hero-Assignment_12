import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/web-dev.webp'
import { MdDelete, MdEmail, MdOutlineUpdate } from 'react-icons/md';

const AdminClassCard = () => {
  const course = {
    id: 1,
    title: "Web Development Basics",
    name: "John Doe",
    email: "johndoe@example.com",
    instructor_name: "Fatima Noor",
    instructor_email: "fatima@gmail.com",
    price: 50,
    description: "An introductory course on web development covering HTML, CSS, and JavaScript.",
    image: "https://i.ibb.co.com/CpC4X10P/blog-visuals-12.webp",
    enrollment: "1670",
    status: "pending"
  }

  const { id, title, name, email, instructor_name, instructor_email, price, description, enrollment, status } = course;

  return (
    <div className='border-dark/15 border-[1px] hover:border-purple  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='h-[160px] w-full ' src={image} alt="" />
      </div>
      <div className='dark:text-white px-3'>
        <h3 className='text-dark/90 font-semibold text-xl mb-1 '> {title} </h3>
        <p className='text-dark/80 flex items-center gap-2 mb-2'> <MdEmail className='text-xl' /> <span> {instructor_email} </span> </p>
        <p className='text-dark/70 text-[15px] '> {description} </p>
      </div>
      {/* buttons */}
      <div className='px-3 mt-8 mb-3 '> <Link to={`/dashboard/teacherClasses/${id}`}> 
        <button className={`rounded-lg w-full  py-[6px]  text-white  
          ${status==='pending' || status==='Rejected' ? 'bg-ash cursor-not-allowed' : 'bg-orchid/95  hover:bg-orchid'}`} 
          disabled={status === 'pending' || status === 'rejected'}> See progress 
        </button> </Link> 
      </div>
      <div className='px-3 w-full mb-3 flex justify-between '>
        <Link className='w-[48%] ' to={`/classes/${id}`}> <button className='rounded-lg w-full bg-green  hover:bg-green/95 py-[4px]  text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Approve </span> <MdOutlineUpdate className='text-xl' /> </button> </Link>
        <Link className='w-[48%] ' to={`/classes/${id}`}> <button className='rounded-lg w-full bg-redd  hover:bg-redd/90 py-[4px] text-white flex justify-center items-center gap-1 '> <span className='mb-[2px] '> Reject </span> <MdDelete className='text-xl' /> </button> </Link>
      </div>
    </div>
  );
};

export default AdminClassCard;