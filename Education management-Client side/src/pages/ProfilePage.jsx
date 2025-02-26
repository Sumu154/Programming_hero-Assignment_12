import React from 'react';
import { Helmet } from 'react-helmet';
import ProfileCard from '../components/allCards/ProfileCard';
import ProfileSideInformations from '../components/dashboardComponents/ProfileSideInformations';

const ProfilePage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | Profile </title>
      </Helmet>

      <div className=''>
        <h3 className='font-Montserrat text-3xl text-redd font-semibold mb-6'> Hi, Welcome </h3>
        <div className='flex justify-center flex-col md:flex-row gap-4 mb-6'>
          <div className='max-w-[350px] w-[100%] md:w-[48%] lg:w-[38%] '><ProfileCard></ProfileCard> </div>
          <div className='max-w-[350px] w-[100%] md:w-[48%] lg:w-[38%] '> <ProfileSideInformations></ProfileSideInformations> </div>
        </div>
      </div>
      

    </div>
  );
};

export default ProfilePage;