import React from 'react';
import { useParams } from 'react-router-dom';
import ThreeCards from '../TeacherDashboard/ThreeCards';

const AdminClassDetailsPage = () => {
  const { id }= useParams();
  //console.log(id);

  return (
    <div>
      <ThreeCards course_id={id}></ThreeCards>
    </div>
  );
};

export default AdminClassDetailsPage;