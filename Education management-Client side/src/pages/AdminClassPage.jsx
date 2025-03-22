import React from 'react';
import { Helmet } from 'react-helmet';
import AdminClasses from '../components/AdminDashboard/AdminClasses';

const AdminClassPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | All classes </title>
      </Helmet>

      <div className=''>
        <AdminClasses></AdminClasses>
      </div>
    </div>
  );
};

export default AdminClassPage;