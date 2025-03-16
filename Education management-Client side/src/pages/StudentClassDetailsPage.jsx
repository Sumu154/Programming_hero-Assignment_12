import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import FeedbackAndContinue from '../components/StudentDashboard/FeedbackAndContinue';
import StudentAssignmentTable from '../components/StudentDashboard/StudentAssignmentTable';
import { useLoaderData } from 'react-router-dom';
import NotFound from '../components/shared/NotFound';
import { getAssignmentsByCourse } from '../apis/assignmentApi';

const StudentClassDetailsPage = () => {
  const course_id = useLoaderData();

  const [ assignments, setAssignments ] = useState([]);

  const fetchAssignments = async () => {
    const data = await getAssignmentsByCourse(course_id);
    setAssignments(data);
  }

  useEffect(() => {
    fetchAssignments();
  }, [])

  
  return (
    <div>
      <Helmet>
        <title> Dashboard | Class assignments </title>
      </Helmet>

      { assignments.length===0 ? 
      <div className='max-w-[500px] mx-auto'>
        <h3 className='font-Montserrat text-center text-2xl text-redd font-semibold mb-8 '> No Assignment found in this course </h3>
        <NotFound></NotFound>
      </div> : 
      <div>
        <FeedbackAndContinue course_id={course_id}></FeedbackAndContinue>
        <StudentAssignmentTable course_id={course_id} assignments={assignments} ></StudentAssignmentTable>
      </div>
      }
    </div>
  );
};

export default StudentClassDetailsPage;