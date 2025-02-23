import React from 'react';
import onlineTeach from '../../assets/Animations/online-teaching.json'
import Lottie from 'lottie-react';

{/* */}
const TeachEducairForm = () => {

  const handleApplySubmit = () => {

  }

  return (
    <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center'>
      <div className='w-full md:w-[55%] bg-orchid/10 my-14 p-5 border-[1px] border-dark/10 '>
        <div className='flex justify-center'> <h3 className='px-3 text-center  border-b-[2px] border-purple font-semibold mb-8 text-2xl md:text-3xl'> Apply to Teach </h3> </div>      
        {/* form */}
        <form onSubmit={handleApplySubmit} className="mt-4">
          <div className='flex flex-wrap gap-2 mb-3'>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> your name </span></label>
              <input name='email' type="email" placeholder="name" className="input w-full"   />
            </fieldset>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> Your email </span></label>
              <input name='email' type="email" placeholder="sumaiya@gmail.com" className="input w-full"   />
            </fieldset>
          </div>
          <div className='flex flex-wrap gap-2 mb-3'>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> Your image</span></label>
              <input name='email' type="email" placeholder="image" className="input w-full"   />
            </fieldset>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> Title </span></label>
              <input name='email' type="email" placeholder="title" className="input w-full"   />
            </fieldset>
          </div>  
          <div className='flex flex-wrap gap-2 mb-3'>
            {/* Choose Category */}
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text">Choose Category</span></label>
              <select name='category' className="select w-full">
                <option value="" disabled selected> Select Category </option>
                <option value="web"> Web Development </option>
                <option value="data"> Data Science </option>
                <option value="design"> UI/UX Design </option>
                <option value="marketing"> Digital Marketing </option>
              </select>
            </fieldset>
            {/* Choose Experience */}
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text">Choose Experience</span></label>
              <select name='experience' className="select w-full">
                <option value="" disabled selected> Select Experience Level </option>
                <option value="beginner"> Beginner </option>
                <option value="mid"> Mid-Level </option>
                <option value="pro"> Pro </option>
              </select>
            </fieldset>
          </div>

        


          {/* login button */}
          <div className="form-control mt-10 mb-4"> 
            <button className="btn rounded-[2px] bg-orchid/95 hover:bg-orchid text-white w-full">Login</button>
          </div>

        </form>
      </div>

      {/* right lottie */}
      <div className='w-[60%] md:w-[40%] '>
      <Lottie className='w-full ' animationData={onlineTeach} loop={true} />
      </div>
    </div>
    
  );
};

export default TeachEducairForm;