import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
function Slide() {
  return (
    <Swiper
      // install Swiper modules
      centeredSlides={true} 
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src='/public/assets/frame1.jpg'></img></SwiperSlide>
      <SwiperSlide><img src='/public/assets/frame2.jpg'></img></SwiperSlide>
      <SwiperSlide><img src='/public/assets/image2.jpg'></img></SwiperSlide>
      <SwiperSlide><img src='/public/assets/frame1.jpg'></img></SwiperSlide>

    </Swiper>
  )
}

export default Slide