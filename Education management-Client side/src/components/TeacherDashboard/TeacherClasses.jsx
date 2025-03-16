import React, { useContext, useEffect } from 'react';
import TeacherClassCard from '../allCards/TeacherClassCard';
import { CourseContext } from '../../contexts/CourseProvider';
import axiosInstance from '../../config/axiosInstance';
import { getCourses } from '../../apis/courseApi';

const TeacherClasses = () => {
  const { courses, setCourses } = useContext(CourseContext);

  useEffect(() => {
    const fetchCourses = async () => {
      //console.log('all classes here');
      const data = await getCourses();
      setCourses(data);
    }
    fetchCourses();
  }, [setCourses])



  return (
    <div>
      <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
        { courses.map((it, index) => {
          return <TeacherClassCard key={index} course={it}></TeacherClassCard>
        })}
        
      </div>
    </div>
  );
};

export default TeacherClasses;