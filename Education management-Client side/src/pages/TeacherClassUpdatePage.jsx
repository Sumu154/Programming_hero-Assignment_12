import React from 'react';
import { Helmet } from 'react-helmet';
import TeacherUpdateClassForm from '../components/TeacherDashboard/TeacherUpdateClassForm';
import { useLoaderData } from 'react-router-dom';

const TeacherClassUpdatePage = () => {
  const course_id = useLoaderData();

  return (
    <div>
      <Helmet>
        <title> Dashboard | Update classes </title>
      </Helmet>

      <TeacherUpdateClassForm course_id={course_id}></TeacherUpdateClassForm>
    </div>
  );
};

export default TeacherClassUpdatePage;