import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import instructor from '../../assets/images/instructor.png'
import instructor_bg from '../../assets/images/instructor_bg.png'



const BecomeInstructor = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true, // enables when scrolling up as well
      offset: window.innerHeight/2,
    });
  }, []);

  return (
    <div className='w-[90%] mx-auto lg:px-12 py-20 lg:py-32 flex flex-col-reverse sm:flex-row justify-between items-end mt-10 '>
      <div data-aos="fade-right"  data-aos-easing="ease-in-sine" className='lg:ml-8 pb-4'>
        <h3 className="font-Montserrat font-semibold opacity-80 text-2xl md:text-3xl lg:text-4xl mb-2 "> Become an instructor </h3>
        <p className="max-w-[400px] mb-6 opacity-80 text-sm md:text-[15px] lg:text-base"> Share your knowledge with students worldwide, create engaging courses, and inspire the next generation of learners by becoming an instructor today </p>
        <Link to={`/teachEducair`}> <button className='bg-orchid/95 hover:bg-orchid text-white font-semibold text-[15px] px-6 py-2 '> Start Teaching Today </button> </Link>
      </div>

      <div data-aos="fade-left"  data-aos-easing="ease-in-sine" className="lg:mr-12 mx-auto relative h-[120px] w-[180px]  md:h-[180px] md:w-[240px]  lg:h-[240px] lg:w-[300px]  pb-3 sm:pb-0">
        {/* Background Image */}
        <img className="absolute bottom-0 h-[120px] md:h-[180px] lg:h-[200px]   w-full" src={instructor_bg} alt="" />

        {/* Cover Image (Foreground) */}
        <img className="absolute bottom-0 h-[180px] md:h-[240px] lg:h-[320px]  w-full" src={instructor} alt="" />
      </div>
    </div>
  );
};

export default BecomeInstructor;