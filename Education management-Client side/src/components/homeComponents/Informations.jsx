import React, { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import { getTotalUsers } from '../../apis/userApi';
import { getTotalCourses } from '../../apis/courseApi';
import { getTotalAssignments } from '../../apis/assignmentApi';
import { getTotalEnrollments } from '../../apis/enrollmentApi';




const Informations = () => {
  const [ total_users, setTotal_users ] = useState(0);
  const [ total_courses, setTotal_courses ] = useState(0);
  const [ total_assignment, setTotal_assignment ] = useState(0);
  const [ total_enrollments, setTotal_enrollments ] = useState(0);

  const fetchTotalUsers = async () => {
    const data = await getTotalUsers();
    setTotal_users(data);
  }

  const fetchTotalCourses = async () => {
    const data = await getTotalCourses();
    setTotal_courses(data);
  }

  const fetchTotalAssignments = async () => {
    const data = await getTotalAssignments();
    setTotal_assignment(data);
  }

  const fetchTotalEnrollments = async () => {
    const data = await getTotalEnrollments();
    setTotal_enrollments(data);
  }

  useEffect(() => {
    fetchTotalUsers();
    fetchTotalCourses();
    fetchTotalAssignments();
    fetchTotalEnrollments();
  }, [])


  return (
    <div className=' bg-purple text-white py-6 mt-32 '>
      <div className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 items-center gap-6 '>
        <div className='text-center'>
          <div className='text-5xl md:text-6xl flex justify-center'> <FaUsers /> </div>
          <p className='text-3xl font-bold'> {total_users} </p>
          <p className='text-lg'> Total Users </p>
        </div>
        <div className='text-center'>
          <div className='text-4xl md:text-5xl flex justify-center mb-2 '> <MdOutlineClass /> </div>
          <p className='text-3xl font-bold'> {total_courses} </p>
          <p className='text-lg'> Total classes </p>
        </div>
        <div className='text-center'>
          <div className='text-5xl md:text-6xl flex justify-center'> <IoPeople /> </div>
          <p className='text-3xl font-bold'> {total_enrollments} </p>
          <p className='text-lg'> Total enrollment </p>
        </div>
        <div className='text-center'>
          <div className='text-4xl md:text-5xl flex justify-center mb-2 '> <MdAssignment /> </div>
          <p className='text-3xl font-bold'> {total_assignment} </p>
          <p className='text-lg'> Total assignments </p>
        </div>
      </div>
    </div>
  );
};

export default Informations;