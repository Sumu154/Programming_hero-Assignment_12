import '../../assets/stylesheets/navbar.css'
import logo from '../../assets/logos/educair.png'

import React, { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../shared/ThemeToggle';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log('user', user.photoURL);

  const navigate = useNavigate();
  const path = useLocation().pathname;

  const handleSignOut = (e) => {
    e.preventDefault();

  }

  const links = <>
    <li> <NavLink to="/"> Home </NavLink> </li>
    <li> <NavLink to="/allClasses"> Classes</NavLink> </li>
    <li> <NavLink to="/teachEducair"> Teach on Educair </NavLink> </li>
  </>


  return (
    <div className='fixed top-0 left-0 z-50 w-full'>
      <div id='navbar' className='bg-dark/50 dark:bg-darkbackground shadow-lg   '>
      <div  className="navbar w-[90%] mx-auto  ">
      <div className="navbar-start">
        <div className="dropdown  ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}  className="menu menu-sm dropdown-content bg-dark/50 rounded-box z-[1] mt-3 w-40 p-2 shadow    dark:bg-cardbackground dark:text-white">
            {links}
          </ul>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='w-8 h-8 rounded-full' src={logo} alt="" />
          <p className='font-JotiOne text-white text-xl lg:text-2xl'> EduCair </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1   dark:text-white">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        {user ? <div className='flex gap-4 items-center'>
          <button className='text-orange font-medium px-4 py-[6px] rounded-lg border-orange border-[1px] '> <Link onClick={handleSignOut} to=''> Logout </Link> </button> 
          <div className='h-9 w-9'>  <img className='rounded-full' src={user.photoURL} alt="" /> </div> 
        </div> 
        :<div className='flex gap-4'>
          <button className={`font-medium px-4 py-[6px] rounded-lg     ${path==='/auth/login' ? 'bg-orange text-white' : 'text-orange border-orange border-[1px]'} `}> <Link to='/auth/login'> Login </Link> </button> 
          <button className={`font-medium px-4 py-[6px] rounded-lg     ${path==='/auth/register' ? 'bg-orange text-white' : 'text-orange border-orange border-[1px]' } `}> <Link to='/auth/register'> Register </Link> </button>
        </div>              
        } 
      </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;