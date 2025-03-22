import React, { useEffect, useState } from 'react';
import { getUsers, getUsersWithLimit, updateUserRole } from '../../apis/userApi';
import Swal from 'sweetalert2';
import { IoIosSearch } from "react-icons/io";

import '../../assets/stylesheets/alert.css'
import '../../assets/stylesheets/table.css'
import Pagination from '../shared/Pagination';


const ITEMS_PER_PAGE = 8; // Set items per page

const AdminUserTable = () => {

  const [ users, setUsers ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);  // Track page number
  const [ pageCount, setPageCount ] = useState(0);  // Total pages
  const [ searchQuery, setSearchQuery] = useState("");


  const fetchUsers = async () => {
    const data = await getUsersWithLimit(currentPage, ITEMS_PER_PAGE, searchQuery);
    setUsers(data.users); 
    setPageCount(data.totalPages);
  } 

  useEffect(() => {
    fetchUsers();
  }, [ currentPage, searchQuery ])

  const handleSearchChange = async (query) => {
    console.log(query);
    setSearchQuery(query)
  }



  const handleMakeAdmin = async (user_email, user_name) => {
    const data1 = await updateUserRole(user_email, 'admin');
    const data2 = await getUsersWithLimit(currentPage, ITEMS_PER_PAGE, searchQuery);
    setUsers(data2.users);
    // //console.log(data1, data2);

    Swal.fire({
      title: `${user_name}  has been promoted to admin!`,
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });
  }


  return (
    <div>
      {/* headers */}
      <div className='flex flex-col sm:flex-row sm:justify-between  sm:items-center  mt-20 mb-8'>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold'> ALl users </h3>
        <div className='flex gap-3 items-center'>
          <span className='text-2xl text-dark/70 hidden sm:block '> <IoIosSearch /> </span>
          <input onChange={(e) => handleSearchChange(e.target.value)} value={searchQuery} name='search-bar' type="text" placeholder="Search courses..." className='px-3 md:min-w-[380px] border-[1px] border-dark/20 h-8 rounded-md ' />
          <span className='text-2xl text-dark/70 sm:hidden'> <IoIosSearch /> </span>
        </div>
      </div>

      {/* users */}
      <div className="overflow-y-hidden overflow-x-auto rounded-t-2xl ">
        <table className="table table-zebra text-[12px] md:text-sm ">
          {/* head */}
          <thead className='bg-purple text-white'>
            <tr className=''>
              <th></th>
              <th> Image </th>
              <th> Name </th>
              <th> Email </th>
              <th> Submit </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            { users.map((it, index) => { 
              const { user_name, user_email, user_image, user_role } = it;

              return (
                <tr key={index}>
                  <th> {index+1} </th>
                  <td> <img className='h-10 w-10 rounded-full' src={user_image} alt="" /> </td>
                  <td> {user_name} </td>
                  <td> {user_email} </td>
                  <td> <button onClick={() => handleMakeAdmin(user_email, user_name)} className={`min-w-[112px] font-medium px-3 lg:px-4 py-1 rounded-sm  ${ user_role === 'admin' ? 'bg-ash cursor-not-allowed' : '' }`} disabled={it.user_role === "admin"} > Make admin </button> </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className='mt-12 flex justify-center'>
        <Pagination pageCount={pageCount} onPageChange={(data) => setCurrentPage(data.selected)} ></Pagination>
      </div>
    </div>
  );
};

export default AdminUserTable;