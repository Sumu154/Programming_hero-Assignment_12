import React from 'react';
import TeachBanner from '../components/headers/TeachBanner';
import TeachEducairForm from '../components/others/TeachEducairForm';
import { Helmet } from 'react-helmet';

const TeachEducairPage = () => {
  return (
    <div className='mb-8'>
      <Helmet>
        <title> Teach on Educair </title>
      </Helmet>

      <TeachBanner></TeachBanner>
      <TeachEducairForm></TeachEducairForm>
    </div>
  );
};

export default TeachEducairPage;