import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import axiosInstance from '../../config/axiosInstance';
import Swal from 'sweetalert2';
import '../../assets/stylesheets/alert.css'
import { createCourse } from '../../apis/courseApi';

const TeacherAddClassForm = () => {

  const { user } = useContext(AuthContext);
  const user_name = user.displayName;
  const user_email = user.email;

  const handleClassAdd = async (e) => {
    e.preventDefault();

    //get the form data
    const form = new FormData(e.target);   
    const course_title = form.get('title');
    const course_image = form.get('image');
    const teacher_name = user_name;
    const teacher_email = user_email;
    const course_description = form.get('description');
    const course_price = form.get('price');
    const course_status = 'pending';
    const user_enrollment = 0;

    const course = { course_title, course_image, teacher_name, teacher_email, course_description, course_price, course_status, user_enrollment };
    console.log(course);

     // database e store korte hbe
     const res = await createCourse(course)
     console.log(res.data);

    Swal.fire({
      title: "Class added successfully!",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });

    e.target.reset();

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
              <input name='email' type="text" placeholder={`${user_name}`} className="input w-full"  readOnly  />
            </fieldset>
            <fieldset className="form-control w-full md:w-[49%]">
              <label className="label mb-1"><span className="label-text"> Your email </span></label>
              <input name='email' type="email" placeholder={`${user_email}`} className="input w-full" readOnly   />
            </fieldset>
          </div>
          <div className='flex justify-between flex-wrap gap-2 mb-3'>
            <fieldset className="form-control w-full md:w-[49%]">
              <label className="label mb-1"><span className="label-text"> Class title </span></label>
              <input name='title' type="text" placeholder="Enter class title" className="input w-full" required  />
            </fieldset>
            <fieldset className="form-control w-full md:w-[49%]">
              <label className="label mb-1"><span className="label-text"> Class price </span></label>
              <input name='price' type="number" placeholder="Enter price" className="input w-full" required  />
            </fieldset>
          </div>
          <div className='flex flex-wrap gap-2 mb-3'>
            <fieldset className="form-control w-full">
              <label className="label mb-1"><span className="label-text"> Class image</span></label>
              <input name='image' type="text" placeholder="image" className="input w-full" required  />
            </fieldset>
            <fieldset className="form-control w-full ">
              <label className="label mb-1"><span className="label-text"> Title </span></label>
              <textarea name='description' className="textarea h-24 w-full text-sm p-3" placeholder="Enter description" required></textarea>
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