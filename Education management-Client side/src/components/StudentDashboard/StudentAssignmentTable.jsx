import React from "react";

import '../../assets/stylesheets/table.css'

const StudentAssignmentTable = () => {

  const assignments = [
    {
      title: "Assignment 1",
      deadline: "2025-02-10",
      description: "Description for Assignment 1",
      course_id: "CSE101"
    },
    {
      title: "Assignment 2",
      deadline: "2025-02-10",
      description: "Description for Assignment 2",
      course_id: "CSE101"
    },
    {
      title: "Assignment 3",
      deadline: "2025-02-10",
      description: "Description for Assignment 3",
      course_id: "CSE101"
    },
    {
      title: "Assignment 4",
      deadline: "2025-02-10",
      description: "Description for Assignment 4",
      course_id: "CSE101"
    },
  ]


  return (
    <div className="mt-10 lg:mt-14 ">
      <h3 className="font-Montserrat text-center font-semibold opacity-80 text-xl md:text-2xl lg:text-2xl mb-5 "> Assignments  “Full Stack web development” </h3>
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
              const { title, description, deadline } = it;

              return (
                <tr key={it}>
                  <th> {index+1} </th>
                  <td> {title} </td>
                  <td> {description} </td>
                  <td> {deadline} </td>
                  <td> <button className="font-medium px-3 lg:px-4 py-1 rounded-sm "> Submit </button> </td>
                </tr>
              )
            })}

            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAssignmentTable;
