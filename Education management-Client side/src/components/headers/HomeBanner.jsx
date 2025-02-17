import '../../assets/stylesheets/banner.css'

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// images
import banner1 from '../../assets/images/boi khata.jpg'
import banner2 from '../../assets/images/boi kahata.webp'
import banner3 from '../../assets/images/study2.jpg'
import banner4 from '../../assets/images/study1.jpg'

const HomeBanner = () => {
  const images = [banner1, banner2, banner3, banner4];


  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div className='relative w-full'>
      {/* main carousel */}
      <div className=' '>
        <Swiper className='' modules={[Navigation, Thumbs]} thumbs={{ swiper: thumbsSwiper }} navigation={true} loop={true}  slidesPerView={1} >
          {/* images gula ekta ekta kore map kore dekhabo */}
          {images.map((it, index) => {
            return (
              <SwiperSlide className='' key={index}>
                <div className='h-[500px] '>
                  hi
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      
      {/* thumbnail swiper */}
      <div>
        <Swiper modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper}>
          {images.map((it, index) => {
              return (
                <SwiperSlide className='' key={index}>
                  <img className='' src={it} alt="" />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;