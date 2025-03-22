import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoCloudUpload } from "react-icons/io5";
import { AuthContext } from '../../contexts/AuthProvider';
import { createSubmission } from '../../apis/submissionApi';
import { toast } from 'react-toastify';
import { updateAssignmentSubmission } from '../../apis/assignmentApi';

Modal.setAppElement("#root");


const SubmissionModal = ( { assignment_id, course_id, modalOpen, setModalOpen } ) => {
  const { user } = useContext(AuthContext);
  const user_email = user.email;
  // //console.log('assignment_id: ', assignment_id);
  console.log(course_id);


  const handleAssignmentSubmission = async (e) => {
    e.preventDefault();

    // modal close
    setModalOpen(false);
    
    const form = new FormData(e.target);
    const submission_link = form.get('submission_file');
    const submission_grade = 'not graded';

    const submission = { user_email, course:course_id, assignment_id, submission_link, submission_grade };
    console.log(submission);
    // database e stored
    const data1 = await createSubmission(submission)
    //console.log(data1);

    // toast showing
    toast.success('Assignment submitted successfully', {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });
    
    // assignment collection e submission 1 increase
    const data2 = await updateAssignmentSubmission(assignment_id);
    //console.log(data2);

    
  }



  return (
    <div className=''>
      <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Example Modal"
      className="bg-white p-6 rounded-lg w-[300px] sm:w-[360px] md:w-[390px] lg:w-[420px] mx-auto mt-20 shadow-lg"
      overlayClassName="fixed inset-0 bg-dark/30 flex justify-center items-center">

        <h3 className="font-Montserrat text-center font-semibold opacity-80 text-xl md:text-2xl mb-7"> Submit Assignment  </h3>
        <form onSubmit={handleAssignmentSubmission} action="">
          <fieldset className="fieldset mt-1  ">
            <legend className="opacity-80 text-[15px] lg:text-base mb-2"> Submit your google drive assignment link </legend>
            <input type="text" name="submission_file" className='input w-full' />
          </fieldset>

          {/* send button */}
          <button className='font-medium flex justify-center items-center gap-2 text-white bg-orchid hover:bg-orchid/95 w-full rounded-[2px] py-[6px] mt-6'> <IoCloudUpload className='text-xl' />  <span className='mb-[3px] '> Submit assignment </span> </button>
        </form>
      </Modal>
    </div>
  );
};

export default SubmissionModal;