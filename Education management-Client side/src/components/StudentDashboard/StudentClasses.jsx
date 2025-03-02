import React, { useState } from 'react';
import StudentClassCard from '../allCards/StudentClassCard';

const StudentClasses = () => {

  const [ courses, setCourses ] = useState([]);

  // const fetchCourses = async () => {
  //   const res = await 
  // }

  return (
    <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
      <StudentClassCard></StudentClassCard>
      <StudentClassCard></StudentClassCard>
      <StudentClassCard></StudentClassCard>
      <StudentClassCard></StudentClassCard>
      <StudentClassCard></StudentClassCard>
      <StudentClassCard></StudentClassCard>
    </div>
  );
};

export default StudentClasses;