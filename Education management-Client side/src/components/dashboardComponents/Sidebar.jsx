import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdClass } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { PiSidebarDuotone } from "react-icons/pi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const role = 'teacher';

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }


  const studentLinks = <>
    <li> <NavLink to="/dashboard"> <div className='flex gap-3 items-center text-base lg:text-lg mb-2 hover:font-semibold'> <CgProfile  className='text-[22px]' /> <span> Profile </span> </div> </NavLink> </li>
    <li> <NavLink to="/dashboard/studentClasses"> <div className='flex gap-3 items-center text-base lg:text-lg mb-2 hover:font-semibold'> <MdClass  className='text-2xl' /> <span> Classes </span> </div> </NavLink> </li>
    <li> <NavLink to="/dashboard/studentAssignments"> <div className='flex gap-3 items-center text-base lg:text-lg mb-2 hover:font-semibold'> <MdOutlineAssignment className='text-2xl'  /> <span> Assignments </span> </div> </NavLink> </li>
  </>

  const adminLinks = <>
  <li> <NavLink to="/"> <div className='flex gap-3 items-center text-xl mb-2'> <CgProfile /> <span> Profile </span> </div> </NavLink> </li>
  <li> <NavLink to="/"> <div className='flex gap-3 items-center text-xl mb-2'> <MdClass /> <span> Classes </span> </div> </NavLink> </li>
  <li> <NavLink to="/"> <div className='flex gap-3 items-center text-xl mb-2'> <MdOutlineAssignment /> <span> Assignments </span> </div> </NavLink> </li>
  </>

  const teacherLinks = <>
  <li> <NavLink to="/dashboard"> <div className='flex gap-3 items-center text-base lg:text-lg mb-2 hover:font-semibold'> <CgProfile className='text-[22px]' /> <span> Profile </span> </div> </NavLink> </li>
  <li> <NavLink to="/dashboard/addClass"> <div className='flex gap-3 items-center text-base lg:text-lg mb-2 hover:font-semibold'> <MdLibraryAdd className='text-2xl' /> <span> Add class </span> </div> </NavLink> </li>
  <li> <NavLink to="/dashboard/teacherClasses"> <div className='flex gap-3 items-center text-base lg:text-lg mb-2 hover:font-semibold'> <MdClass className='text-2xl' /><span> My classes </span> </div> </NavLink> </li>
  </>

  return (
    <div className=''>
      <div className='hidden md:block w-44 lg:w-52 bg-purple text-white  md:min-h-screen '>
        <ul className='list-none pt-28 ml-4 lg:ml-8  '>
        {role==='student' ? studentLinks 
        :role==='teacher' ? teacherLinks
        :adminLinks
        }
        </ul>
      </div>

      {/* drawer -> for mobile device */}
      {/* <div className='md:hidden'>
        <div className='bg-purple p-2 ml-3 rounded-full mt-20 '> <FaAngleRight className='text-2xl text-white' /> </div>
      </div> */}

      <div onClick={toggleDrawer} className='md:hidden text-purple  m-4 pl-4 mt-20 '> <PiSidebarDuotone className='text-3xl  ' /> </div>
      <Drawer style={{backgroundColor: '#433878', width: '176px'}} open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="text-white min-h-screen p-4">
        <ul className='list-none pt-28 ml-4 lg:ml-8  '>
        {role==='student' ? studentLinks 
        :role==='teacher' ? teacherLinks
        :adminLinks
        }
        </ul>
        </div>
      </Drawer>
      
    </div>
  );
};

export default Sidebar;