import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdRocketLaunch } from "react-icons/md";

Modal.setAppElement("#root");

const TeacherAssignmentModal = ( { modalOpen, setModalOpen } ) => {
  return (
    <div className=''>
    <Modal
    isOpen={modalOpen}
    onRequestClose={() => setModalOpen(false)}
    contentLabel="Example Modal"
    className="bg-white p-6 rounded-lg w-[300px] sm:w-[360px] md:w-[380px] lg:w-[400px] mx-auto mt-20 shadow-lg"
    overlayClassName="fixed inset-0 bg-dark/60 flex justify-center items-center">

      <h3 className="font-Montserrat text-center font-semibold opacity-80 text-xl md:text-2xl mb-3"> Create a Assignment  </h3>
      
      <form action="">
        <fieldset className="fieldset mt-1  ">
          <legend className="opacity-80 text-[15px] lg:text-base"> Assignment title </legend>
          <input type="text" placeholder="Type here" className="input w-full" />
        </fieldset>
        <fieldset className="fieldset mt-1  ">
          <legend className="opacity-80 text-[15px] lg:text-base"> Assignment deadline </legend>
          <input type="text" placeholder="Type here" className="input w-full" />
        </fieldset>
        <fieldset className="fieldset mt-1  ">
          <legend className="opacity-80 text-[15px] lg:text-base"> Assignment description </legend>
          <input type="text" placeholder="Type here" className="input w-full" />
        </fieldset>

        {/* send button */}
       <button className='font-medium flex justify-center items-center gap-2 text-white bg-purple hover:bg-purple/95 w-full rounded-[2px] py-2 mt-6'> <MdRocketLaunch className='text-xl' />  <span> Create </span> </button>
      </form>

    </Modal>
  </div>
  );
};

export default TeacherAssignmentModal;