import React from 'react';

import instructor_image from '../../assets/images/profile-teacher2.jpg'
import DetailsCard from '../allCards/DetailsCard';

const DetailsClassSection = ( {instructor_email, price, enrollment, image} ) => {

  // instructor_email theke name, and image fetch korbo
  const instructor_name = 'Fatima Noor';


  return (
    <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between gap-8 '>
      {/* left -> added by */}
      <div className='w-[100%] md:w-[50%] mt-8 '>
        <p className='text-dark/90 text-xl font-semibold mb-3 '> This class is Added By </p>
        <div className='px-6 py-3 flex items-center gap-8 border-[1px] border-dark/15 rounded-sm '>
          <div className='w-20 h-20 rounded-full overflow-hidden'> <img className='w-full h-full object-cover' src={instructor_image} alt="" />  </div>
          <div className=''>
            <p className='text-dark/90 font-semibold text-xl '> {instructor_name} </p>
            <p className='text-dark/70'> Teacher at EduCair </p>
          </div>
        </div>
      </div>

      {/* right -> class card */}
      <div>
        <DetailsCard price={price} enrollment={enrollment} image={image} ></DetailsCard>
      </div>
    </div>
  );
};

export default DetailsClassSection;