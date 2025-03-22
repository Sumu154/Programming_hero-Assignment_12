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
        <TeacherClasses></TeacherClasses>
      </div>
    </div>
  );
};

export default TeacherClassPage;