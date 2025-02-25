import React from 'react';

import '../../assets/stylesheets/table.css'
import image from '../../assets/images/profile.jfif'

const AdminTeachersTable = () => {
  const teachers = [
    {
      name: "Ayesha Karim",
      email: "ayesha.karim@gmail.com",
      image: "https://i.ibb.co.com/XYZ123/teacher1.jpg",
      experience: "5",
      title: "Senior Web Developer",
      category: "Web Development"
    },
    {
      name: "Rahim Ahmed",
      email: "rahim.ahmed@gmail.com",
      image: "https://i.ibb.co.com/qkVZJrM/teacher2.jpg",
      experience: "8",
      title: "Data Science Instructor",
      category: "Data Science"
    },
    {
      name: "Fatima Noor",
      email: "fatima.noor@gmail.com",
      image: "https://i.ibb.co.com/ABC456/teacher3.jpg",
      experience: "3",
      title: "Graphic Design Mentor",
      category: "Graphic Design"
    },
    {
      name: "Tariq Islam",
      email: "tariq.islam@gmail.com",
      image: "https://i.ibb.co.com/DEF789/teacher4.jpg",
      experience: "6",
      title: "Software Engineering Lecturer",
      category: "Software Engineering"
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
            <th> Title </th>
            <th> Category </th>
            <th> Experience years </th>
            <th> Status </th>
            <th>  </th>
            <th>  </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          { teachers.map((it, index) => { 
            const { name, email, experience, title, category } = it;

            return (
              <tr key={index}>
                <th> {index+1} </th>
                <td> <img className='h-10 w-10 rounded-full' src={image} alt="" /> </td>
                <td> {name} </td>
                <td> {title} </td>
                <td> {category} </td>
                <td> {experience} </td>
                <td> <span className='bg-orange/20 text-orange font-semibold px-3 py-[2px] border-[1.5px] rounded-full  '> pending </span> </td>
                <td> <button className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-green text-white `} > Approve </button> </td>
                <td> <button className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-redd! text-white! `} > Reject </button> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTeachersTable;