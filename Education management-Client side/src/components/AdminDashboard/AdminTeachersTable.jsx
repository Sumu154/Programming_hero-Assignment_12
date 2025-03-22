import React, { useEffect, useState } from 'react';
import { getTeacherByStatus, getTeachers, getTeachersWithLimit, updateTeacherStatus } from '../../apis/teacherApi';
import Swal from 'sweetalert2';
import { updateUserRole } from '../../apis/userApi';
import { IoIosSearch } from "react-icons/io";

import '../../assets/stylesheets/table.css'
import '../../assets/stylesheets/alert.css'
import Pagination from '../shared/Pagination';


const ITEMS_PER_PAGE = 8; 


const AdminTeachersTable = () => {
  const [ teachers, setTeachers ] = useState([]); 
  const [ currentPage, setCurrentPage ] = useState(0);  // Track page number
  const [ pageCount, setPageCount ] = useState(0);  // Total pages
  const [ searchQuery, setSearchQuery] = useState("");


  const fetchTeachers = async () => {
    const data = await getTeachersWithLimit(currentPage, ITEMS_PER_PAGE, searchQuery);
    setTeachers(data.teachers);
    setPageCount(data.totalPages);
    console.log(data.teachers);

  }


  useEffect(() => {
    fetchTeachers();
  }, [ currentPage, searchQuery ])

  const handleSearchChange = async (query) => {
    console.log(query);
    setSearchQuery(query)
  }


  const handleUpdateTeacherStatus = async (teacher_id, input_status, teacher_email, teacher_name) => {
    //console.log(teacher_id, input_status)
    const data = await updateTeacherStatus(teacher_id, input_status);
    fetchTeachers(data); //refetch

    // teacher approved hole user_role->teacher hbbe,,student theke change hoye
    if(input_status === 'approved'){
      Swal.fire({
        title: `${teacher_name}  has been promoted to teacher!`,
        icon: "success",
        customClass: {
          popup: 'small-modal'
        }
      })
      const data = await updateUserRole(teacher_email, 'teacher');
      //console.log(data);  
    }
    else if(input_status === 'rejected'){
      Swal.fire({
        title: `${teacher_name}  has been rejected`,
        icon: "error",
        customClass: {
          popup: 'small-modal'
        }
      });
      const data = await updateUserRole(teacher_email, 'student');
    }
  }

  
  return (
    <div>
      {/* headers */}
      <div className='flex flex-col sm:flex-row sm:justify-between  sm:items-center  mt-20 mb-8'>
        <h3 className='font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold'> Teacher request </h3>
        <div className='flex gap-3 items-center'>
          <span className='text-2xl text-dark/70 hidden sm:block '> <IoIosSearch /> </span>
          <input onChange={(e) => handleSearchChange(e.target.value)} value={searchQuery} name='search-bar' type="text" placeholder="Search courses..." className='px-3 md:min-w-[380px] border-[1px] border-dark/20 h-8 rounded-md ' />
          <span className='text-2xl text-dark/70 sm:hidden'> <IoIosSearch /> </span>
        </div>
      </div>

      {/* teachers */}
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

            
              return (
                <tr key={index}>
                  <th> {index+1} </th>
                  <td> <img className='h-10 w-10 rounded-full' src={teacher_image} alt="" /> </td>
                  <td> {teacher_name} </td>
                  <td> {teacher_title} </td>
                  <td> {teacher_category} </td>
                  <td> {teacher_experience} </td>
                  <td> <span className={` font-semibold px-3 pb-[3px] border-[1.5px] rounded-full ${statusClass} `}> {teacher_status} </span> </td>
                  <td> <button  onClick={()=>handleUpdateTeacherStatus(teacher_id, 'approved', teacher_email, teacher_name) } className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-green text-white `} > Approve </button> </td>
                  <td> <button  onClick={()=>handleUpdateTeacherStatus(teacher_id, 'rejected', teacher_email, teacher_name) } className={`min-w-[100px] font-medium px-3 lg:px-4 py-1 rounded-sm  bg-redd! text-white! `} disabled={teacher_status==='rejected'} > Reject </button> </td>
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

export default AdminTeachersTable;