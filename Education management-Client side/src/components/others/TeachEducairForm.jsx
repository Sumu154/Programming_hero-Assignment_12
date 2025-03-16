import React, { useContext } from 'react';
import onlineTeach from '../../assets/Animations/online-teaching.json'
import Lottie from 'lottie-react';
import { createTeacher } from '../../apis/teacherApi';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

{/* */}
const TeachEducairForm = () => {

  const { user } = useContext(AuthContext);
  const user_email = user.email;
  const user_name = user.displayName;

  const handleApplySubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);   
    const teacher_email = user_email;
    const teacher_name = user_name;
    const teacher_image = form.get('teacher_image');
    const teacher_title = form.get('teacher_title');
    const teacher_category = form.get('teacher_category');
    const teacher_experience = form.get('teacher_experience');
    const teacher_status = 'pending';
    const teacher = { teacher_email, teacher_name, teacher_image, teacher_title, teacher_category, teacher_experience, teacher_status };
    //console.log(teacher);

    const data = await createTeacher(teacher);
    //console.log(data);
    Swal.fire({
      title: "Your request is sent",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    })

    e.target.reset();
  }

  return (
    <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center'>
      <div className='w-full md:w-[55%] bg-orchid/10 my-14 p-5 border-[1px] border-dark/10 '>
        <div className='flex justify-center'> <h3 className='px-3 text-center  border-b-[2px] border-purple font-semibold mb-8 text-2xl md:text-3xl'> Apply to Teach </h3> </div>      
        {/* form */}
        <form onSubmit={handleApplySubmit} className="mt-4">
          <div className='flex justify-between flex-wrap  mb-3'>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> your name </span></label>
              <input name='teacher_name' type="text" placeholder={`${user_name}`} className="input w-full"  readOnly   />
            </fieldset>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> Your email </span></label>
              <input name='teacher_email' type="email" placeholder={`${user_email}`} className="input w-full"  readOnly />
            </fieldset>
          </div>
          <div className='flex justify-between flex-wrap mb-3'>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> Your image</span></label>
              <input name='teacher_image' type="text" placeholder="image" className="input w-full"  required  />
            </fieldset>
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text"> Title </span></label>
              <input name='teacher_title' type="text" placeholder="title" className="input w-full"  required />
            </fieldset>
          </div>  
          <div className='flex justify-between flex-wrap mb-3'>
            {/* Choose Category */}
            <fieldset className="form-control w-full md:w-[48%]">
              <label className="label mb-1"><span className="label-text">Choose Category</span></label>
              <select name='teacher_category' className="select w-full"  required >
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
              <select name='teacher_experience' className="select w-full" required >
                <option value="" disabled selected> Select Experience Level </option>
                <option value="beginner"> Beginner </option>
                <option value="mid"> Mid-Level </option>
                <option value="pro"> Pro </option>
              </select>
            </fieldset>
          </div>

        
          {/* login button */}
          <div className="form-control mt-10 mb-4"> 
            <button className="btn rounded-[2px] bg-orchid/95 hover:bg-orchid text-white w-full"> Submit for review </button>
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