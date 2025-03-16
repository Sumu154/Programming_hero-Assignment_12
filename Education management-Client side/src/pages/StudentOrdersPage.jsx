import React from 'react';
import { Helmet } from 'react-helmet';
import StudentOrdersTable from '../components/StudentDashboard/StudentOrdersTable';

const StudentOrdersPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | Orders </title>
      </Helmet>
      
      <div className=''>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold mb-8'> My orders history </h3>
        <StudentOrdersTable></StudentOrdersTable>
      </div>

    </div>
  );
};

export default StudentOrdersPage;