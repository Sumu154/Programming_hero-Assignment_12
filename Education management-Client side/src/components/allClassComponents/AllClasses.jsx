import React, { useEffect, useState } from 'react';
import HomeClassCard from '../allCards/HomeClassCard';
import  Pagination  from '../shared/Pagination';
import { getCourseByStatusWithLimit } from '../../apis/courseApi';
import { IoIosSearch } from "react-icons/io";


const ITEMS_PER_PAGE = 8; // Set items per page


const AllClasses = () => {
  const [ courses, setCourses ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);  // Track page number
  const [ pageCount, setPageCount ] = useState(0);  // Total pages
  const [ searchQuery, setSearchQuery] = useState("");



  const fetchCourses = async () => {
    console.log(currentPage, ITEMS_PER_PAGE)
    const data = await getCourseByStatusWithLimit('approved', currentPage, ITEMS_PER_PAGE, searchQuery);
    setCourses(data.courses);
    setPageCount(data.totalPages);
  }

  useEffect(() => {
    fetchCourses();
  }, [ currentPage, searchQuery ]); 


  const handleSearchChange = async (query) => {
    console.log(query);
    setSearchQuery(query)
  }


  return (
    <div className='w-[90%] mx-auto   '>
      <div className='flex flex-col sm:flex-row sm:justify-between  sm:items-center  mt-20 mb-8'>
        <h3 className='font-Montserrat text-2xl md:text-3xl lg:text-4xl text-dark/90 font-semibold underline underline-offset-8  decoration-orchid inline-block mb-4 sm:mb-0 ' > All Courses </h3>
        <div className='flex gap-3 items-center'>
          <span className='text-2xl text-dark/70 hidden sm:block '> <IoIosSearch /> </span>
          <input onChange={(e) => handleSearchChange(e.target.value)} value={searchQuery} name='search-bar' type="text" placeholder="Search courses..." className='px-3 md:min-w-[380px] border-[1px] border-dark/20 h-8 rounded-md ' />
          <span className='text-2xl text-dark/70 sm:hidden'> <IoIosSearch /> </span>
        </div>
      </div>

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