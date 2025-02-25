import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdClass } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { PiSidebarDuotone } from "react-icons/pi";
import { MdRequestPage } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AuthContext } from '../../contexts/AuthProvider';



const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const user_role = user.user_role;
  console.log(user.user_email)

  const [isOpen, setIsOpen] = useState(false);


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }


  const studentLinks = <>
    <li> <NavLink to="/dashboard"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <CgProfile  className='text-lg' /> <span> Profile </span> </div> </NavLink> </li>
    <li> <NavLink to="/dashboard/studentClasses"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <MdClass  className='text-xl' /> <span> Classes </span> </div> </NavLink> </li>
    <li> <NavLink to="/dashboard/studentAssignments"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <MdOutlineAssignment className='text-xl'  /> <span> Assignments </span> </div> </NavLink> </li>
  </>

  const adminLinks = <>
  <li> <NavLink to="/dashboard"> <div className='flex gap-2 items-center text-[17px] mb-2'> <CgProfile className='text-lg' /> <span> Profile </span> </div> </NavLink> </li>
  <li> <NavLink to="/dashboard/adminUsers"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <HiUsers className='text-xl'/> <span> All Users </span> </div> </NavLink> </li>
  <li> <NavLink to="/dashboard/adminClasses"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <MdClass  className='text-xl'/> <span> All classes </span> </div> </NavLink> </li>
  <li> <NavLink to="/dashboard/adminTeachers"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <MdRequestPage className='text-xl' /> <span> Teacher request </span> </div> </NavLink> </li>
  </>

  const teacherLinks = <>
  <li> <NavLink to="/dashboard"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <CgProfile className='text-lg' /> <span> Profile </span> </div> </NavLink> </li>
  <li> <NavLink to="/dashboard/addClass"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <MdLibraryAdd className='text-xl' /> <span> Add class </span> </div> </NavLink> </li>
  <li> <NavLink to="/dashboard/teacherClasses"> <div className='flex gap-2 items-center  lg:text-[17px] mb-2 hover:font-semibold'> <MdClass className='text-xl' /><span> My classes </span> </div> </NavLink> </li>
  </>

  return (
    <div className=''>
      <div className='hidden md:block w-44 lg:w-52 bg-purple text-white  md:min-h-screen '>
        <ul className='list-none pt-28 ml-4 lg:ml-8  '>
        {user_role==='student' ? studentLinks 
        :user_role==='teacher' ? teacherLinks
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
        {user_role==='student' ? studentLinks 
        :user_role==='teacher' ? teacherLinks
        :adminLinks
        }
        </ul>
        </div>
      </Drawer>
      
    </div>
  );
};

export default Sidebar;