import React, { useEffect, useState } from "react";

import '../../assets/stylesheets/table.css'
import { formatDate } from "../../Utils/Formatters/dateFormatter";
import { getCourseTitle } from "../../apis/courseApi";
import SubmissionModal from "./SubmissionModal";

const StudentAssignmentTable = ( { course_id, assignments } ) => {
  
  const [ course_title, setCourse_title ] = useState('');
  const [ modalOpen, setModalOpen ] = useState(false);

  const fetchCourseTitle = async () => {
    const data = await getCourseTitle(course_id);
    setCourse_title(data);
  }

  useEffect(() => {
    fetchCourseTitle();
  }, [])

  
  return (
    <div className="mt-10 lg:mt-14 ">
      <h3 className="font-Montserrat text-center font-semibold opacity-80 text-xl md:text-2xl lg:text-2xl mb-5 "> {`Assignments  “${course_title}”`} </h3>
      <div className="overflow-y-hidden overflow-x-auto rounded-t-2xl ">
        <table className="table table-zebra text-[12px] md:text-sm ">
          {/* head */}
          <thead className='bg-purple text-white'>
            <tr className=''>
              <th></th>
              <th> Title </th>
              <th> Description </th>
              <th> Deadline </th>
              <th> Submit </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            { assignments.map((it, index) => { 
              const {  _id:assignment_id, course_id, assignment_title, assignment_description, assignment_deadline } = it;

              return (
                <tr key={it}>
                  <th> {index+1} </th>
                  <td> {assignment_title} </td>
                  <td> {assignment_description} </td>
                  <td> {formatDate(assignment_deadline)} </td>
                  <td> 
                    <button onClick={()=>setModalOpen(true)} className="font-medium px-3 lg:px-4 py-1 rounded-sm "> Submit </button>
                    <SubmissionModal assignment_id={assignment_id} course_id={course_id} modalOpen={modalOpen} setModalOpen={setModalOpen} ></SubmissionModal>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAssignmentTable;
