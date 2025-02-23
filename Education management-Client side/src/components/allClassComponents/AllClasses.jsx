import React from 'react';
import HomeClassCard from '../allCards/HomeClassCard';
import  Pagination  from '../shared/Pagination';

const AllClasses = () => {
  return (
    <div className='w-[90%] mx-auto   '>
      <h3 className='font-Montserrat text-4xl text-dark/90 font-semibold border-b-[2px] border-b-orchid inline-block  mt-20 mb-8' > All Courses </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        <HomeClassCard></HomeClassCard>
        <HomeClassCard></HomeClassCard>
        <HomeClassCard></HomeClassCard>
        <HomeClassCard></HomeClassCard>
        <HomeClassCard></HomeClassCard>
        <HomeClassCard></HomeClassCard>
        <HomeClassCard></HomeClassCard>
        <HomeClassCard></HomeClassCard>
      </div>

      <div>
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default AllClasses;