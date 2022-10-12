import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

import './Hero.css'

import slider1 from '../../../assets/images/hero/slider1.png'
import slider2 from '../../../assets/images/hero/slider2.png'
import slider3 from '../../../assets/images/hero/slider3.png'

const Hero = () => {
  return (
    <section className='w-full h-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={slider1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt='' />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero
