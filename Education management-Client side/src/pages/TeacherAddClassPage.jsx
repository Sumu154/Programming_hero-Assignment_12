import React from 'react';
import TeacherAddClassForm from '../components/TeacherDashboard/TeacherAddClassForm';
import { div } from 'motion/react-client';
import { Helmet } from 'react-helmet';

const TeacherAddClassPage = () => {
  
  return (
    <div>
      <Helmet>
        <title> Teach on Educair </title>
      </Helmet>

      <TeacherAddClassForm></TeacherAddClassForm>
    </div>
  );
};

export default TeacherAddClassPage;