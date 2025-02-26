import React, { useEffect, useState } from 'react';

import '../../assets/stylesheets/table.css'
import image from '../../assets/images/profile.jfif'
import { getTeacherByStatus } from '../../apis/teacherApi';

const AdminTeachersTable = () => {

  const [ teachers, setTeachers ] = useState([]);

  const fetchTeachers = async () => {
    const data = await getTeacherByStatus('pending');
    setTeachers(data);
  }
  console.log(teachers);

  useEffect(() => {
    fetchTeachers();
  }, [])


  const handleChangeTeacherStatus = async (teacher_id, input_status) => {

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
            const { _id:teacher_id, teacher_email, teacher_name, teacher_image, teacher_title, teacher_category, teacher_experience, teacher_status } = it;

            return (
              <tr key={index}>
                <th> {index+1} </th>
                <td> <img className='h-10 w-10 rounded-full' src={teacher_image} alt="" /> </td>
                <td> {teacher_name} </td>
                <td> {teacher_title} </td>
                <td> {teacher_category} </td>
                <td> {teacher_experience} </td>
                <td> <span className='bg-orange/20 text-orange font-semibold px-3 py-[2px] border-[1.5px] rounded-full  '> pending </span> </td>
                <td> <button  onClick={()=>handleChangeTeacherStatus(teacher_id, 'approved')} className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-green text-white `} > Approve </button> </td>
                <td> <button  onClick={()=>handleChangeTeacherStatus(teacher_id, 'rejected')} className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-redd! text-white! `} > Reject </button> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTeachersTable;