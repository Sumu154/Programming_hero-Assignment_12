import React from 'react';
import Navbar from '../components/headers/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footers/Footer';

const MainLayout = () => {
  return (
    <div className='font-OpenSans'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;