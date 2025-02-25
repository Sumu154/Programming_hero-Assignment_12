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
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold mb-8'> All users </h3>
        <AdminUserTable></AdminUserTable>
      </div>
    </div>
  );
};

export default AdminUsersPage;