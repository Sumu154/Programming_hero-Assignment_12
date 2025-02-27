import React, { useEffect, useState } from 'react';

import '../../assets/stylesheets/table.css'
import image from '../../assets/images/profile.jfif'
import { getTeacherByStatus, getTeachers, updateTeacherStatus } from '../../apis/teacherApi';
import Swal from 'sweetalert2';
import { updateUserRole } from '../../apis/userApi';

const AdminTeachersTable = () => {

  const [ teachers, setTeachers ] = useState([]);

  const fetchTeachers = async () => {
    const data = await getTeachers();
    setTeachers(data);
  }
  console.log(teachers);


  useEffect(() => {
    fetchTeachers();
  }, [])


  const handleUpdateTeacherStatus = async (teacher_id, input_status, teacher_email, teacher_name) => {
    console.log(teacher_id, input_status)
    const data = await updateTeacherStatus(teacher_id, input_status);
    fetchTeachers(data); //refetch

    // teacher approved hole user_role->teacher hbbe,,student theke change hoye
    if(input_status === 'approved'){
      Swal.fire({
        title: `${teacher_name}  has been promoted to admin!`,
        icon: "success",
        customClass: {
          popup: 'small-modal'
        }
      })
      const data = await updateUserRole(teacher_email, 'teacher');
      console.log(data);  
    }
    else{
      Swal.fire({
        title: "this course is rejected",
        text: "Failed to delete the course.",
        icon: "error",
        customClass: {
          popup: 'small-modal'
        }
      });
    }
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

            const statusClass = teacher_status === 'approved' ? 'bg-green/20 text-green border-green' :
                                teacher_status === 'pending' ? 'bg-orange/20 text-orange border-orange' :
                                teacher_status === 'rejected' ? 'bg-redd/20 text-redd border-redd' : '';

          
            const buttonClass = teacher_status === 'approved' ? 'bg-green/20 text-green border-green' :
                                teacher_status === 'pending' ? 'bg-orange/20 text-orange border-orange' :
                                teacher_status === 'rejected' ? 'bg-redd/20 text-redd border-redd' : '';

            return (
              <tr key={index}>
                <th> {index+1} </th>
                <td> <img className='h-10 w-10 rounded-full' src={teacher_image} alt="" /> </td>
                <td> {teacher_name} </td>
                <td> {teacher_title} </td>
                <td> {teacher_category} </td>
                <td> {teacher_experience} </td>
                <td> <span className={` font-semibold px-3 py-[2px] border-[1.5px] rounded-full ${statusClass} `}> {teacher_status} </span> </td>
                <td> <button  onClick={()=>handleUpdateTeacherStatus(teacher_id, 'approved', teacher_email, teacher_name) } className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-green text-white `} > Approve </button> </td>
                <td> <button  onClick={()=>handleUpdateTeacherStatus(teacher_id, 'rejected', teacher_email, teacher_name) } className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-redd! text-white! `} > Reject </button> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTeachersTable;