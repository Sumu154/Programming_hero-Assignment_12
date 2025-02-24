import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdRocketLaunch } from "react-icons/md";

import RatingComponent from './RatingComponent';

Modal.setAppElement("#root");


const StudentFeedbackModal = ( { modalOpen, setModalOpen } ) => {
  const [rating, setRating] = useState(0);

  return (
    <div className=''>
      <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Example Modal"
      className="bg-white p-6 rounded-lg w-[300px] sm:w-[360px] md:w-[390px] lg:w-[420px] mx-auto mt-20 shadow-lg"
      overlayClassName="fixed inset-0 bg-dark/60 flex justify-center items-center">

        <h3 className="font-Montserrat text-center font-semibold opacity-80 text-xl md:text-2xl mb-3"> Give a feedback  </h3>
        <p className="max-w-[750px] mx-auto text-center px-4 opacity-80 text-[15px] lg:text-base mb-1 "> Please rate  this courses and assignments </p>
        <RatingComponent rating={rating} setRating={setRating} ></RatingComponent>
        
        <fieldset className="fieldset mt-1  ">
          <legend className="opacity-80 text-[15px] lg:text-base"> Your feedback </legend>
          <textarea className="textarea h-24 w-full text-sm p-3" placeholder="Write your comment here"></textarea>
        </fieldset>

        {/* send button */}
         <button className='font-medium flex justify-center items-center gap-2 text-white bg-orange hover:bg-orange/95 w-full rounded-[2px] py-2 mt-6'> <MdRocketLaunch className='text-xl' />  <span> Send review </span> </button>
      </Modal>
    </div>
  );
};

export default StudentFeedbackModal;