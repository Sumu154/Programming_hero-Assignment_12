import React, { useContext, useEffect, useState } from 'react';
import TeacherClassCard from '../allCards/TeacherClassCard';
import { getCourses } from '../../apis/courseApi';
import Pagination from '../shared/Pagination';

const ITEMS_PER_PAGE = 8; // Set items per page

const TeacherClasses = () => {
  const [ courses, setCourses ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);  // Track page number
  const [ pageCount, setPageCount ] = useState(0);  // Total pages
  const [ searchQuery, setSearchQuery] = useState("");
  

  const fetchCourses = async () => {
    //console.log('all classes here');
    const data = await getCourses();
    setCourses(data);
    setPageCount(data.totalPages);
  }

  useEffect(() => {
    fetchCourses();
  }, [ currentPage, searchQuery  ])



  return (
    <div>
      <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
        { courses.map((it, index) => {
          return <TeacherClassCard key={index} course={it}></TeacherClassCard>
        })}
        
      </div>

      <div className='mt-12 flex justify-center'>
        <Pagination pageCount={pageCount} onPageChange={(data) => setCurrentPage(data.selected)} ></Pagination>
      </div>
    </div>
  );
};

export default TeacherClasses;