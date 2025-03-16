import React from 'react';
import ThreeCards from '../components/TeacherDashboard/ThreeCards';
import CreateAssignment from '../components/TeacherDashboard/CreateAssignment';
import { useParams } from 'react-router-dom';

const TeacherClassDetailsPage = () => {
  const { id }= useParams();
  //console.log(id);


  return (
    <div>
      <ThreeCards course_id={id}></ThreeCards>
      <CreateAssignment course_id={id}></CreateAssignment>
    </div>
  );
};

export default TeacherClassDetailsPage;