import React from 'react';
import { Helmet } from 'react-helmet';
import AdminClasses from '../components/AdminDashboard/AdminClasses';

const AdminClassPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | My classes </title>
      </Helmet>

      <div className=''>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold mb-8'> All Classes </h3>
        <AdminClasses></AdminClasses>
      </div>
    </div>
  );
};

export default AdminClassPage;