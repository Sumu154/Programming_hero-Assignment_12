import React from 'react';
import { Helmet } from 'react-helmet';
import AdminTeachersTable from '../components/AdminDashboard/AdminTeachersTable';

const AdminTeachersPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | Teacher requests </title>
      </Helmet>

      <div className=''>
        <AdminTeachersTable></AdminTeachersTable>
      </div>
    </div>
  );
};

export default AdminTeachersPage;