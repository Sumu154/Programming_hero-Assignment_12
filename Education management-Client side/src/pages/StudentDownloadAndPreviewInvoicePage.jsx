import React, { useState } from 'react';
import StudentDownloadInvoice from '../components/StudentDashboard/StudentDownloadInvoice';
import StudentPreviewInvoice from '../components/StudentDashboard/StudentPreviewInvoice';
import { useLocation } from 'react-router-dom';

const StudentDownloadAndPreviewInvoicePage = () => {
   const location = useLocation();
  const course = location.state?.course;
  const order_transaction_id = location.state?.order_transaction_id;
  
  //console.log(course, order_transaction_id);
  
  const [ pdfUrl, setPdfUrl ] = useState('');


  return (
    <div className='max-w-[700px] mx-auto '> 
      <StudentDownloadInvoice course={course} order_transaction_id={order_transaction_id} setPdfUrl={setPdfUrl} ></StudentDownloadInvoice>
      <StudentPreviewInvoice pdfUrl={pdfUrl} ></StudentPreviewInvoice>
    </div>
  );
};

export default StudentDownloadAndPreviewInvoicePage;
