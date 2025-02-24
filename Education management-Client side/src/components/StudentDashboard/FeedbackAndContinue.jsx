import React, { useState } from 'react'
import { MdFeedback } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import StudentFeedbackModal from './StudentFeedbackModal';

const FeedbackAndContinue = () => {
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='flex justify-between items-center '>
      <div>
        <button  onClick={()=>setModalOpen(true)} className='flex items-end gap-2 bg-orange hover:bg-orange/95 text-white px-6 py-2 rounded-full '> <MdFeedback className='text-[22px]' /> <span> Feedback us </span> </button>
        <StudentFeedbackModal modalOpen={modalOpen} setModalOpen={setModalOpen} ></StudentFeedbackModal>
      </div>

      <button className='flex items-end gap-2 bg-jolpai hover:bg-jolpai/95 text-white px-6 py-2 rounded-full '> <span> Continue </span> <MdOutlineSlowMotionVideo className='text-2xl' /> </button>
    </div>
  )
}

export default FeedbackAndContinue
