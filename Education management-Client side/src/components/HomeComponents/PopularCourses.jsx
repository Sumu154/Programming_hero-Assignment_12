import React, { useEffect, useState } from 'react';
import HomeClassCard from '../allCards/HomeClassCard';
import { getPopularCourses } from '../../apis/courseApi';

const PopularCourses = () => {
  const [ courses, setCourses ] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getPopularCourses();
      //console.log(data);
      setCourses(data);
    }
    fetchCourses();
  }, [])

  return (
    <div className='w-[90%] mx-auto dark:text-white mt-10  '>
      <div className="mx-auto mt-20 ">
        <h3 className="font-Montserrat text-center font-semibold opacity-80 text-2xl md:text-3xl lg:text-4xl mb-1 "> Our Popular courses </h3>
        <p className="max-w-[750px] mx-auto text-center mb-6 px-4 opacity-80 text-[15px] lg:text-base"> Explore our most popular courses, designed to help you gain in-demand skills and expertise. </p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          { courses.map((it, index) => {
            return <HomeClassCard key={index} course={it}></HomeClassCard>
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;