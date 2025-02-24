import React from 'react';
import StudentClasses from '../components/StudentDashboard/StudentClasses';
import { Helmet } from 'react-helmet';

const StudentClassPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | Classes </title>
      </Helmet>

      <div className=''>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold mb-8'> My enrolled classes </h3>
        <StudentClasses></StudentClasses>
      </div>
    </div>
  );
};

export default StudentClassPage;