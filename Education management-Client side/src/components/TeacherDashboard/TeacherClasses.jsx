import React, { useContext, useEffect, useState } from 'react';
import TeacherClassCard from '../allCards/TeacherClassCard';
import { getCourseByEmailWithLimit } from '../../apis/courseApi';
import Pagination from '../shared/Pagination';
import { IoIosSearch } from "react-icons/io";
import { AuthContext } from '../../contexts/AuthProvider';

const ITEMS_PER_PAGE = 6; // Set items per page

const TeacherClasses = () => {
  const [ courses, setCourses ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);  // Track page number
  const [ pageCount, setPageCount ] = useState(0);  // Total pages
  const [ searchQuery, setSearchQuery] = useState("");

  const { user } = useContext(AuthContext);
  const user_email = user.email;
  

  const fetchCourses = async () => {
    //console.log('all classes here');
    const data = await getCourseByEmailWithLimit(user_email, currentPage, ITEMS_PER_PAGE, searchQuery);
    setCourses(data.courses);
    setPageCount(data.totalPages);
  }

  useEffect(() => {
    fetchCourses();
  }, [ currentPage, searchQuery  ])

  const handleSearchChange = async (query) => {
    setSearchQuery(query)
  }



  return (
    <div>
      {/* header and search */}
      <div className='flex flex-col sm:flex-row sm:justify-between  sm:items-center  mt-20 mb-8'>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold'> My added classes </h3>
        <div className='flex gap-3 items-center'>
          <span className='text-2xl text-dark/70 hidden sm:block '> <IoIosSearch /> </span>
          <input onChange={(e) => handleSearchChange(e.target.value)} value={searchQuery} name='search-bar' type="text" placeholder="Search courses..." className='px-3 md:min-w-[380px] border-[1px] border-dark/20 h-8 rounded-md ' />
          <span className='text-2xl text-dark/70 sm:hidden'> <IoIosSearch /> </span>
        </div>
      </div>

      {/* courses */}
      <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
        { courses.map((it, index) => {
          return <TeacherClassCard key={index} course={it} setCourses={setCourses} ></TeacherClassCard>
        })}
        
      </div>

      <div className='mt-12 flex justify-center'>
        <Pagination pageCount={pageCount} onPageChange={(data) => setCurrentPage(data.selected)} ></Pagination>
      </div>
    </div>
  );
};

export default TeacherClasses;