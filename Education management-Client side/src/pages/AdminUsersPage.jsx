import React from 'react';
import { Helmet } from 'react-helmet';
import AdminUserTable from '../components/AdminDashboard/AdminUserTable';

const AdminUsersPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | All users </title>
      </Helmet>

      <div className=''>
        <AdminUserTable></AdminUserTable>
      </div>
    </div>
  );
};

export default AdminUsersPage;