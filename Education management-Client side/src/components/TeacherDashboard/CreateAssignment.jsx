import React, { useState } from 'react';
import { MdCreateNewFolder } from "react-icons/md";
import TeacherAssignmentModal from './TeacherAssignmentModal';


const CreateAssignment = () => {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div>
      <div className='mt-10'>
        <button  onClick={()=>setModalOpen(true)} className='flex items-end gap-2 bg-purple hover:bg-purple/95 text-white px-6 py-2 rounded-full '> <MdCreateNewFolder className='text-[22px]' /> <span> Create Assignment </span> </button>
        <TeacherAssignmentModal modalOpen={modalOpen} setModalOpen={setModalOpen} ></TeacherAssignmentModal>
      </div>
    </div>
  );
};

export default CreateAssignment;