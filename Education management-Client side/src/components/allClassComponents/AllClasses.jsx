import React, { useEffect, useState } from 'react';
import HomeClassCard from '../allCards/HomeClassCard';
import  Pagination  from '../shared/Pagination';
import { getCourseByStatusWithLimit } from '../../apis/courseApi';


const ITEMS_PER_PAGE = 1; // Set items per page


const AllClasses = () => {
  const [ courses, setCourses ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0); // Track page number
  const [ pageCount, setPageCount ] = useState(0); // Total pages


  const fetchCourses = async () => {
    console.log(currentPage, ITEMS_PER_PAGE)
    const data = await getCourseByStatusWithLimit('approved', currentPage, ITEMS_PER_PAGE);
    setCourses(data.courses);
    setPageCount(data.totalPages);
  }

  useEffect(() => {
    fetchCourses();
  }, [currentPage]); 



  return (
    <div className='w-[90%] mx-auto   '>
      <h3 className='font-Montserrat text-4xl text-dark/90 font-semibold border-b-[2px] border-b-orchid inline-block  mt-20 mb-8' > All Courses </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        { courses.map((it, index) => {
          return <HomeClassCard key={index} course={it} ></HomeClassCard>
        })}
      </div>

      <div className='mt-12 flex justify-center'>
        <Pagination pageCount={pageCount} onPageChange={(data) => setCurrentPage(data.selected)} ></Pagination>
      </div>
    </div>
  );
};

export default AllClasses;