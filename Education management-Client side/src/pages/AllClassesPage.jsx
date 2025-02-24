import React from 'react';
import ClassesBanner from '../components/headers/ClassesBanner';
import AllClasses from '../components/allClassComponents/AllClasses';
import { Helmet } from 'react-helmet';

const AllClassesPage = () => {
  return (
    <div className='mb-16'>
      <Helmet>
        <title> All classes </title>
      </Helmet>

      <ClassesBanner></ClassesBanner>
      <AllClasses></AllClasses>
    </div>
  );
};

export default AllClassesPage;