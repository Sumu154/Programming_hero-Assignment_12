import React, { useEffect, useState } from 'react';
import { getUsers, updateUserRole } from '../../apis/userApi';
import Swal from 'sweetalert2';

import '../../assets/stylesheets/alert.css'
import '../../assets/stylesheets/table.css'


const AdminUserTable = () => {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data); 
    } 
    fetchUsers();
  }, [])


  const handleMakeAdmin = async (user_email, user_name) => {
    const data1 = await updateUserRole(user_email, 'admin');
    const data2 = await getUsers();
    setUsers(data2);
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
  );
};

export default AdminUserTable;