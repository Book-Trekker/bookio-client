import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
import './TopCategories.css'
import topImg1 from '../../../assets/images/topCategories/cate-1.jpg.png'
import topImg2 from '../../../assets/images/topCategories/cate-2.jpg.png'
import topImg3 from '../../../assets/images/topCategories/cate-3.jpg.png'
import topImg4 from '../../../assets/images/topCategories/cate-4.jpg (1).png'
import topImg5 from '../../../assets/images/topCategories/cate-5.jpg.png'
import topImg6 from '../../../assets/images/topCategories/cate-6.jpg.png'

const TopCategories = () => {
  return (
    <section className='top_categories w-full'>
      <div className='top_slider py-16'>
        <Swiper
         slidesPerView={5}
         spaceBetween={10}
         loop={true}
         freeMode={true}
         autoplay={{
           delay: 2000,
           disableOnInteraction: false,
         }}
         breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          496: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          740: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='b-3 w-56 h-56 relative overflow-hidden bg-white rounded-full'>
              <img className='absolute top_image' src={topImg1} alt="top/books" />
            </div>
              <h2 className='text-xl mt-3 text-primary font-medium'>Romance</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='b-3 w-56 h-56 relative overflow-hidden bg-white rounded-full'>
              <img className='absolute top_image' src={topImg2} alt="top/books" />
            </div>
              <h2 className='text-xl mt-3 text-primary font-medium'>Romance</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='b-3 w-56 h-56 relative overflow-hidden bg-white rounded-full'>
              <img className='absolute top_image' src={topImg3} alt="top/books" />
            </div>
              <h2 className='text-xl mt-3 text-primary font-medium'>Romance</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='b-3 w-56 h-56 relative overflow-hidden bg-white rounded-full'>
              <img className='absolute top_image' src={topImg4} alt="top/books" />
            </div>
              <h2 className='text-xl mt-3 text-primary font-medium'>Romance</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='b-3 w-56 h-56 relative overflow-hidden bg-white rounded-full'>
              <img className='absolute top_image' src={topImg5} alt="top/books" />
            </div>
              <h2 className='text-xl mt-3 text-primary font-medium'>Romance</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='b-3 w-56 h-56 relative overflow-hidden bg-white rounded-full'>
              <img className='absolute top_image' src={topImg6} alt="top/books" />
            </div>
              <h2 className='text-xl mt-3 text-primary font-medium'>Romance</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default TopCategories
