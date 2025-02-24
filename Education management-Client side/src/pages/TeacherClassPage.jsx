import React from 'react';
import { Helmet } from 'react-helmet';
import TeacherClasses from '../components/TeacherDashboard/TeacherClasses';

const TeacherClassPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | My classes </title>
      </Helmet>

      <div className=''>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold mb-8'> My added classes </h3>
        <TeacherClasses></TeacherClasses>
      </div>
    </div>
  );
};

export default TeacherClassPage;