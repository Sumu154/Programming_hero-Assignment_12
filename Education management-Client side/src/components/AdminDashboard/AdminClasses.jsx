import React, { useEffect, useState } from 'react';
import AdminClassCard from '../allCards/AdminClassCard';
import { getCourses } from '../../apis/courseApi';

const AdminClasses = () => {

  const [ courses, setCourses ] = useState([]);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  }

  useEffect(() => {
    fetchCourses();
  }, [])

  console.log(courses);


  return (
    <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
      { courses.map((it, index) => {
        return <AdminClassCard key={index} course={it} onStatusUpdate={fetchCourses} ></AdminClassCard>
      })}
    </div>
  );
};

export default AdminClasses;