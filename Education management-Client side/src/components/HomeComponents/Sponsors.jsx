import React from 'react';

import aws from '../../assets/logos/aws-educate-logo.png'
import brac from '../../assets/logos/brac-logo.png' 
import iut from '../../assets/logos/iut-logo.png' 
import khanAcademy from '../../assets/logos/khan-academy-logo.png' 
import ph from '../../assets/logos/ph-logo.png' 
import skillBuild from '../../assets/logos/skillBuild-logo.png' 

const Sponsors = () => {
  const sponsors = [aws, brac, iut, khanAcademy, ph, skillBuild];


  return (
    <div className='w-[90%] mx-auto mt-16 bg-red-800'>
      <p className=' max-w-[800px] mx-auto mb-6 px-4 text-lg md:text-xl text-dark/95 text-center font-bold '> Trusted By 5,000 companies and millions of learners around the world </p>
      <div className='grid grid-cols-6  bg-green-700'>
      {sponsors.map((it, index) => {
        return (
          <div  key={index} className='h-24 w-24 md:w-32 md:h-32 bg-amber-700 '>
            <img src={it} alt="" />
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Sponsors;