import React from 'react';
import { Helmet } from 'react-helmet';
import FeedbackAndContinue from '../components/StudentDashboard/FeedbackAndContinue';
import StudentAssignmentTable from '../components/StudentDashboard/StudentAssignmentTable';
import { useLoaderData } from 'react-router-dom';

const StudentClassDetailsPage = () => {
  const course_id = useLoaderData();

  
  return (
    <div>
      <Helmet>
        <title> Dashboard | Class assignments </title>
      </Helmet>

      <FeedbackAndContinue></FeedbackAndContinue>
      <StudentAssignmentTable></StudentAssignmentTable>
    </div>
  );
};

export default StudentClassDetailsPage;