import React, { useContext, useEffect, useState } from 'react';
import StudentClassCard from '../allCards/StudentClassCard';
import { AuthContext } from '../../contexts/AuthProvider';
import { getEnrollmentByEmail } from '../../apis/enrollmentApi';

const StudentClasses = () => {
  const { user } = useContext(AuthContext);
  const user_email = user.email;

  const [ courses, setCourses ] = useState([]);

  const fetchCourses = async () => {
    const data = await getEnrollmentByEmail(user_email);
    //console.log(data);  //ei data te shb enrolled-course ace,,amk course extract kore array banate hbe
    const fetchedCourses = data.course_enrolled.map((it) => {
      return it.course;
    })
    setCourses(fetchedCourses);
  }

  useEffect(() => {
    fetchCourses();
    //console.log('courses', courses);
  }, [])

  return (
    <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
      { courses.map((it, index) => {
        return <StudentClassCard key={index} course={it} ></StudentClassCard>
      })}
    </div>
  );
};

export default StudentClasses;