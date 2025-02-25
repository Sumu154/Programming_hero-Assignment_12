import React from 'react';
import AdminClassCard from '../allCards/AdminClassCard';

const AdminClasses = () => {
  return (
    <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
      <AdminClassCard></AdminClassCard>
      <AdminClassCard></AdminClassCard>
      <AdminClassCard></AdminClassCard>
      <AdminClassCard></AdminClassCard>
      <AdminClassCard></AdminClassCard>
      <AdminClassCard></AdminClassCard>
      <AdminClassCard></AdminClassCard>
      
    </div>
  );
};

export default AdminClasses;