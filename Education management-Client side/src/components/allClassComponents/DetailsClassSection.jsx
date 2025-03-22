import React, { useEffect, useState } from 'react';

import instructor_image from '../../assets/images/profile-teacher2.jpg'
import DetailsCard from '../allCards/DetailsCard';
import { getTeacherByEmail } from '../../apis/teacherApi';

const DetailsClassSection = ( {course_id, teacher_name, teacher_email, course_price, user_enrollment, course_image} ) => {
  const [ teacher_image, setTeacher_image ] = useState('');

  const fetchTeacher = async () => {
    const data = await getTeacherByEmail(teacher_email);
    const { teacher_image } = data[0];
    console.log(data)
    setTeacher_image(teacher_image);
  } 
  
  useEffect(() => {
    fetchTeacher();
  }, [])

  


  return (
    <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between gap-8 '>
      {/* left -> added by */}
      <div className='w-[100%] md:w-[50%] mt-8 '>
        <p className='text-dark/90 text-xl font-semibold mb-3 '> This class is Added By </p>
        <div className='px-6 py-3 flex items-center gap-8 border-[1px] border-dark/15 rounded-sm '>
          <div className='w-20 h-20 rounded-full overflow-hidden'> <img className='w-full h-full object-cover' src={teacher_image} alt="" />  </div>
          <div className=''>
            <p className='text-dark/90 font-semibold text-xl '> {teacher_name} </p>
            <p className='text-dark/70'> Teacher at EduCair </p>
          </div>
        </div>
      </div>

      {/* right -> class card */}
      <div>
        <DetailsCard course_id={course_id} course_price={course_price} user_enrollment={user_enrollment} course_image={course_image} ></DetailsCard>
      </div>
    </div>
  );
};

export default DetailsClassSection;