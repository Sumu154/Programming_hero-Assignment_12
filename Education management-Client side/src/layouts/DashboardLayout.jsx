import React from 'react';
import Navbar from '../components/headers/Navbar';
import Sidebar from '../components/dashboardComponents/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footers/Footer';
import { Helmet } from 'react-helmet';

const DashboardLayout = () => {
  return (
    <div className=''>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Navbar></Navbar>
      <div className='flex flex-col md:flex-row  '>
        <div className=''> <Sidebar></Sidebar> </div>
        <div className='w-full md:pt-28 pb-12 px-4 sm:px-8 md:px-4 lg:px-12 md:h-screen md:overflow-y-scroll '>
          <div className=''> <Outlet ></Outlet> </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;