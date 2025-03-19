import React from 'react';
import { Helmet } from 'react-helmet';

import HomeBanner from '../components/headers/HomeBanner';
import Sponsors from '../components/homeComponents/Sponsors';
import PopularCourses from '../components/homeComponents/PopularCourses';
import FeedbackAssignments from '../components/homeComponents/FeedbackAssignments';
import BecomeInstructor from '../components/homeComponents/BecomeInstructor';
import Informations from '../components/homeComponents/Informations';

const HomePage = () => {
  return (
    <div className='mb-10'>
      <Helmet>
        <title> Home </title>
      </Helmet>

      <HomeBanner></HomeBanner>
      <PopularCourses></PopularCourses>
      <FeedbackAssignments></FeedbackAssignments> 
      <Informations></Informations>
      <BecomeInstructor></BecomeInstructor>
      <Sponsors></Sponsors>
    </div>
  );
};

export default HomePage;