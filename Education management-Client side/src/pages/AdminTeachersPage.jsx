import React from 'react';
import { Helmet } from 'react-helmet';
import AdminTeachersTable from '../components/AdminDashboard/AdminTeachersTable';

const AdminTeachersPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | My classes </title>
      </Helmet>

      <div className=''>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold mb-8'> Teacher request </h3>
        <AdminTeachersTable></AdminTeachersTable>
      </div>
    </div>
  );
};

export default AdminTeachersPage;