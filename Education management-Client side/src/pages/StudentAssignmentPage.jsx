import React from 'react';
import { Helmet } from 'react-helmet';
import FeedbackAndContinue from '../components/StudentDashboard.jsx/FeedbackAndContinue';
import StudentAssignmentTable from '../components/StudentDashboard.jsx/StudentAssignmentTable';


const StudentAssignmentPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | Assignments </title>
      </Helmet>

      <FeedbackAndContinue></FeedbackAndContinue>
      <StudentAssignmentTable></StudentAssignmentTable>

    </div>
  );
};

export default StudentAssignmentPage;