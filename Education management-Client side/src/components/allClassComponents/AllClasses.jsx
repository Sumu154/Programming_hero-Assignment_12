import React, { useEffect, useState } from 'react';
import HomeClassCard from '../allCards/HomeClassCard';
import  Pagination  from '../shared/Pagination';
import { getCourseByStatus } from '../../apis/courseApi';

const AllClasses = () => {
  const [ courses, setCourses ] = useState([]);

  const fetchCourses = async () => {
    const data = await getCourseByStatus('approved');
    setCourses(data)
  }

  useEffect(() => {
    fetchCourses();
  }, [])


  return (
    <div className='w-[90%] mx-auto   '>
      <h3 className='font-Montserrat text-4xl text-dark/90 font-semibold border-b-[2px] border-b-orchid inline-block  mt-20 mb-8' > All Courses </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {courses.map((it, index) => {
          return <HomeClassCard key={index} course={it} ></HomeClassCard>
        })}
      </div>

      <div>
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default AllClasses;