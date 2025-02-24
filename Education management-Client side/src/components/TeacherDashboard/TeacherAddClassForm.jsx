import React from 'react';

const TeacherAddClassForm = () => {

  const handleClassAdd = () => {

  }

  return (
    <div className='w-[90%] sm:w-[400px] md:w-[500px] mx-auto'>
      <div className='w-full bg-orchid/10 my-14 p-5 border-[1px] border-dark/10 '>
        <div className='flex justify-center'> <h3 className='px-3 text-center  border-b-[2px] border-purple font-semibold mb-8 text-2xl md:text-3xl'> Add Class </h3> </div>      
        {/* form */}
        <form onSubmit={handleClassAdd} className="mt-4">
          <div className='flex justify-between flex-wrap  gap-2 mb-3'>
            <fieldset className="form-control w-full md:w-[49%]">
              <label className="label mb-1"><span className="label-text"> your name </span></label>
              <input name='email' type="email" placeholder="Sumaiya Tasnim" className="input w-full"   />
            </fieldset>
            <fieldset className="form-control w-full md:w-[49%]">
              <label className="label mb-1"><span className="label-text"> Your email </span></label>
              <input name='email' type="email" placeholder="sumaiya@gmail.com" className="input w-full"   />
            </fieldset>
          </div>
          <div className='flex justify-between flex-wrap gap-2 mb-3'>
            <fieldset className="form-control w-full md:w-[49%]">
              <label className="label mb-1"><span className="label-text"> Class title </span></label>
              <input name='email' type="email" placeholder="Enter class title" className="input w-full"   />
            </fieldset>
            <fieldset className="form-control w-full md:w-[49%]">
              <label className="label mb-1"><span className="label-text"> Class price </span></label>
              <input name='email' type="email" placeholder="Enter price" className="input w-full"   />
            </fieldset>
          </div>
          <div className='flex flex-wrap gap-2 mb-3'>
            <fieldset className="form-control w-full">
              <label className="label mb-1"><span className="label-text"> Your image</span></label>
              <input name='email' type="email" placeholder="image" className="input w-full"   />
            </fieldset>
            <fieldset className="form-control w-full ">
              <label className="label mb-1"><span className="label-text"> Title </span></label>
              <textarea className="textarea h-24 w-full text-sm p-3" placeholder="Enter description"></textarea>
            </fieldset>
          </div>  
          
          {/* login button */}
          <div className="form-control mt-12 mb-2"> 
            <button className="btn rounded-[2px] bg-orchid hover:bg-orchid/95 text-white w-full"> Submit </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TeacherAddClassForm;