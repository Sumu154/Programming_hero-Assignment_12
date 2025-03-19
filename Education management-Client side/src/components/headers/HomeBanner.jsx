import '../../assets/stylesheets/banner.css'

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// images
import banner4 from '../../assets/images/boi khata.jpg'
import banner2 from '../../assets/images/boi kahata.webp'
import banner3 from '../../assets/images/study2.jpg'
import banner1 from '../../assets/images/study1.jpg'

const HomeBanner = () => {
  const images = [banner1, banner2, banner3, banner4];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);


  return (
    <div className='relative w-full'>
      {/* main carousel */}
      <div className=' '>
        <Swiper className='' modules={[Navigation, Thumbs]}  navigation={true}  slidesPerView={1} onSwiper={setMainSwiper} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} >
          {/* images gula ekta ekta kore map kore dekhabo */}
          {images.map((it, index) => {
            return (
              <SwiperSlide id='bannerSlide' className='w-full bg-cover bg-center ' style={{backgroundImage: `linear-gradient(259deg, rgba(21, 21, 21, 0.21) 11.86%, rgba(21, 21, 21, 0.49) 56.33%, rgba(21, 21, 21, 0.70) 96.32%), url(${it})`}} key={index}>
                <div className='w-[90%] mx-auto text-white px-4 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-28   '>
                  <p className='font-Montserrat font-semibold text-lg md:text-xl pb-2  '> Skill Learning Made Simple </p>
                  <h3 className='font-Montserrat text-4xl md:text-5xl lg:text-6xl  font-bold max-w-[850px] pb-4 '> Revolutionizing Education & Skill Learning! </h3>
                  <p className='text-sm md:text-base max-w-[600px] '> Empowering institutions, tutors, and students with a seamless learning experience. Manage classes, track progress, and enhance skills—all track progress, and enhance skills—all in one place. </p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      
      {/* Thumbnail Swiper */}
      <div className="my-6 max-w-[420px] md:max-w-[550px] mx-auto grid grid-cols-4 gap-5  ">
        {images.map((img, index) => (
          <div key={index} className={`h-[50px] md:h-[60px] cursor-pointer ${activeIndex === index ? 'border-2 md:border-4  border-transparent outline-3 outline-dark/90' : 'border-transparent'}`} onClick={() => mainSwiper && mainSwiper.slideTo(index)} >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;