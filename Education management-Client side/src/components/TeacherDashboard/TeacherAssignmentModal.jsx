import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { MdRocketLaunch } from "react-icons/md";
import { AuthContext } from '../../contexts/AuthProvider';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { createAssignment } from '../../apis/assignmentApi';
import { toast } from 'react-toastify';
import { updateCourseAssignment } from '../../apis/courseApi';


Modal.setAppElement("#root");

const TeacherAssignmentModal = ( { course_id, modalOpen, setModalOpen } ) => {

  const { user } = useContext(AuthContext);
  const teacher_email = user.email;
  //console.log(teacher_email);

  const [ assignment_deadline, setAssignment_deadline ] = useState(new Date());

  const handleCreateAssignment = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target); 
    const assignment_title = form.get('assignment_title');
    const assignment_description = form.get('assignment_description');
    const assignment_submission = 0;
    const assignment = { course_id, teacher_email, assignment_title, assignment_deadline, assignment_description, assignment_submission };
    //console.log(assignment);

    // databse e add
    const res1 = await createAssignment(assignment);
    if(res1){ // assignment is successfully created
      setModalOpen(false);
    }
    // course e ekta assignment increment
    const res2 = await updateCourseAssignment(course_id, 'increment');
    //console.log(res1, res2);

    toast.success('assignment successfully created!', {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });

  }

  return (
    <div className=''>
    <Modal
    isOpen={modalOpen}
    onRequestClose={() => setModalOpen(false)}
    contentLabel="Example Modal"
    className="bg-white p-6 rounded-lg w-[300px] sm:w-[360px] md:w-[380px] lg:w-[400px] mx-auto mt-20 shadow-lg"
    overlayClassName="fixed inset-0 bg-dark/60 flex justify-center items-center">

      <h3 className="font-Montserrat text-center font-semibold opacity-80 text-xl md:text-2xl mb-3"> Create a Assignment  </h3>
      
      <form onSubmit={handleCreateAssignment} action="">
        <fieldset className="fieldset mt-1  ">
          <legend className="opacity-80 text-[15px] lg:text-base"> Assignment title </legend>
          <input name='assignment_title' type="text" placeholder="title" className="input w-full" required />
        </fieldset>
        <fieldset className="fieldset mt-1  ">
          <legend className="opacity-80 text-[15px] lg:text-base"> Assignment deadline </legend>
          <DatePicker className="input w-full" required   
            selected={assignment_deadline} 
            placeholderText="deadline"
            onChange={(date) => setAssignment_deadline(date)} 
            dateFormat="yyyy-MM-dd"   
          />
        </fieldset>
        <fieldset className="fieldset mt-1  ">
          <legend className="opacity-80 text-[15px] lg:text-base"> Assignment description </legend>
          <textarea name='assignment_description' className="textarea h-12 w-full text-sm p-3" placeholder="description" required></textarea>
        </fieldset>

        {/* send button */}
       <button  className='font-medium flex justify-center items-center gap-2 text-white bg-purple hover:bg-purple/95 w-full rounded-[2px] py-2 mt-6'> <MdRocketLaunch className='text-xl' />  <span> Create </span> </button>
      </form>

    </Modal>
  </div>
  );
};

export default TeacherAssignmentModal;