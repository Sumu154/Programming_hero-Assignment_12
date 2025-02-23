import React from "react";

import '../../assets/stylesheets/table.css'

const StudentAssignmentTable = () => {


  return (
    <div className="overflow-y-hidden overflow-x-auto rounded-t-2xl mt-10 lg:mt-14 ">
      <table className="table table-zebra">
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
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td> <button className="bg-orchid hover:bg-orchid/95 text-white font-medium px-3 lg:px-4 py-1 rounded-sm "> Submit </button> </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>

          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentAssignmentTable;
