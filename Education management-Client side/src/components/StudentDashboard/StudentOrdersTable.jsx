import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { getEnrollmentByEmail } from '../../apis/enrollmentApi';
import { FaDollarSign } from "react-icons/fa";

import '../../assets/stylesheets/table.css'
import { Link } from 'react-router-dom';


const StudentOrdersTable = () => {
  const { user } = useContext(AuthContext);
  const user_email = user.email;

  const [ orders, setOrders ] = useState([]);

  const fetchOrders = async () => {
    const data = await getEnrollmentByEmail(user_email);
    // //console.log(data.course_enrolled)
    setOrders(data.course_enrolled);
  }

  useEffect(() => {
    fetchOrders();
  }, [])

 

  return (
    <div className="mt-10 lg:mt-14 ">
      <div className="overflow-y-hidden overflow-x-auto rounded-t-2xl ">
        <table className="table table-zebra text-[12px] md:text-sm ">
          {/* head */}
          <thead className='bg-purple text-white'>
            <tr className=''>
              <th></th>
              <th> Title </th>
              <th> Price </th>
              <th> Teacher email </th>
              <th> Transaction Id </th>
              <th> View invoice </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            { orders.map((it, index) => { 
              const { course, order_transaction_id  } = it;
              const { course_title, course_price, teacher_email } = course;

              return (
                <tr key={index}>
                  <th> {index+1} </th>
                  <td> {course_title} </td>
                  <td> <div className=' text-dollargreen font-bold flex gap-1 items-center '> {course_price}  <span className=''> <FaDollarSign /> </span> </div> </td>
                  <td> {teacher_email} </td>
                  <td> {order_transaction_id} </td>
                  <td> 
                      <Link to={`/dashboard/studentOrders/downloadViewInvoice`} state={{ course, order_transaction_id }}  > <button className={`min-w-[112px] font-medium px-3 lg:px-4 py-1 rounded-sm `} > View invoice </button> </Link> 
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

export default StudentOrdersTable;