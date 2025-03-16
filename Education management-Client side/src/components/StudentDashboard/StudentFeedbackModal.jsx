import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { MdRocketLaunch } from "react-icons/md";

import RatingComponent from './RatingComponent';
import { AuthContext } from '../../contexts/AuthProvider';
import { createFeedback } from '../../apis/feedbackApi';
import { toast } from 'react-toastify';

Modal.setAppElement("#root");


const StudentFeedbackModal = ( { course_id, modalOpen, setModalOpen } ) => {
  const { user } = useContext(AuthContext);
  const user_email = user.email;

  const [rating, setRating] = useState(0);


  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    if(rating===0){
      toast.warning('Please give us a rating', {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }

    // modal close
    setModalOpen(false)

    const form = new FormData(e.target);
    const feedback_description = form.get('feedback_description');

    const feedback = { user_email, course_id, feedback_rating:rating, feedback_description };
    //console.log(feedback);

    // feedback collection e store
    const data = await createFeedback(feedback)
    //console.log(data);


    // toast showing
    toast.success('Thank you for your feedback', {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });

    // rating clear for next feedback
    setRating(0);

  }

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

        <form onSubmit={handleFeedbackSubmit}>
          <fieldset className="fieldset mt-1  ">
            <legend className="opacity-80 text-[15px] lg:text-base"> Your feedback </legend>
            <textarea name='feedback_description'  className="textarea h-24 w-full text-sm p-3" placeholder="Write your feedback here" required></textarea>
          </fieldset>

          {/* send button */}
          <button className='font-medium flex justify-center items-center gap-2 text-white bg-orange hover:bg-orange/95 w-full rounded-[2px] py-2 mt-6'> <MdRocketLaunch className='text-xl' />  <span> Send review </span> </button>
        </form>
      </Modal>
    </div>
  );
};

export default StudentFeedbackModal;