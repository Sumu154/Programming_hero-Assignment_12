import React from 'react';

import '../../assets/stylesheets/table.css'
import image from '../../assets/images/profile.jfif'

const AdminUserTable = () => {

  const users = [
    {
      name: "Sumaiya Tasnim",
      email: "sumu@gmail.com",
      photoURL: "https://i.ibb.co.com/bRqp28mp/images.jpg",
      status: "pending",
      role: "student"
    },
    {
      name: "Rahim Ahmed",
      email: "rahim@gmail.com",
      photoURL: "https://i.ibb.co.com/qkVZJrM/user1.jpg",
      status: "approved",
      role: "teacher"
    },
    {
      name: "Ayesha Karim",
      email: "ayesha@gmail.com",
      photoURL: "https://i.ibb.co.com/XYZ123/user2.jpg",
      status: "rejected",
      role: "admin"
    },
    {
      name: "Tariq Islam",
      email: "tariq@gmail.com",
      photoURL: "https://i.ibb.co.com/ABC456/user3.jpg",
      status: "pending",
      role: "moderator"
    }
  ];



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
            const { name, email, role } = it;

            return (
              <tr key={index}>
                <th> {index+1} </th>
                <td> <img className='h-10 w-10 rounded-full' src={image} alt="" /> </td>
                <td> {name} </td>
                <td> {email} </td>
                <td> <button className={`min-w-[112px] font-medium px-3 lg:px-4 py-1 rounded-sm  ${ role === 'admin' ? 'bg-ash cursor-not-allowed' : '' }`} disabled={it.role === "admin"} > Make admin </button> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;