import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

import './Trending.css'

const Trending = () => {

  const [hovered, setHovered] = useState(false)
  
  return (
    <section className='trending px-5 my-8 w-full overflow-x-hidden'>
      {/* trending title  */}
      <div className='trending_title flex justify-between items-center my-4'>
        <h2 className='text-2xl font-bold font-libre'>Trending On Bookio</h2>
        <div className='flex items-center justify-center'>
          <p className='underline cursor-pointer'>View All</p>
          <span className='flex justify-center items-center ml-1'>
            <i class='ri-arrow-right-line'></i>
          </span>
        </div>
      </div>

      {/* trending card /swiper */}
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='trending-1 trend-bg-1 w-full relative'>
            <div className='trending_content flex justify-between'>
              <p>Hot</p>
              <p>Hot</p>
            </div>
            <div className='trending-cart-1 w-full absolute bottom-0'>
              <div className='action flex justify-between items-center w-full'>
                <button className='py-3 bg-black text-white w-full custom-border relative'>Add</button>
                <button className='py-3 bg-black text-white w-full'>
                  cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='trending-2 trend-bg-2 w-full relative'>
            <div className='trending_content flex justify-between'>
              <p>Hot</p>
              <p>Hot</p>
            </div>
            <div className='trending-cart-2 w-full absolute bottom-0'>
              <div className='action flex justify-between items-center w-full'>
                <button className='py-3 bg-black text-white w-full custom-border relative'>Add</button>
                <button className='py-3 bg-black text-white w-full'>
                  cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='trending-3 trend-bg-3 w-full relative'>
            <div className='trending_content flex justify-between'>
              <p>Hot</p>
              <p>Hot</p>
            </div>
            <div className='trending-cart-3 w-full absolute bottom-0'>
              <div className='action flex justify-between items-center w-full'>
                <button className='py-3 bg-black text-white w-full custom-border relative'>Add</button>
                <button className='py-3 bg-black text-white w-full'>
                  cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='trending-4 trend-bg-4 w-full relative'>
            <div className='trending_content flex justify-between'>
              <p>Hot</p>
              <p>Hot</p>
            </div>
            <div className='trending-cart-4 w-full absolute bottom-0'>
              <div className='action flex justify-between items-center w-full'>
                <button className='py-3 bg-black text-white w-full custom-border relative'>Add</button>
                <button className='py-3 bg-black text-white w-full'>
                  cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='trending-5 trend-bg-5 w-full relative'>
            <div className='trending_content flex justify-between'>
              <p>Hot</p>
              <p>Hot</p>
            </div>
            <div className='trending-cart-5 w-full absolute bottom-0'>
              <div className='action flex justify-between items-center w-full'>
                <button className='py-3 bg-black text-white w-full custom-border relative'>Add</button>
                <button className='py-3 bg-black text-white w-full'>
                  cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='trending-6 trend-bg-6 w-full relative'>
            <div className='trending_content flex justify-between'>
              <p>Hot</p>
              <p>Hot</p>
            </div>
            <div className='trending-cart-6 w-full absolute bottom-0'>
              <div className='action flex justify-between items-center w-full'>
                <button className='py-3 bg-black text-white w-full custom-border relative'>Add</button>
                <button className='py-3 bg-black text-white w-full'>
                  cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='trending-7 trend-bg-7 w-full relative'>
            <div className='trending_content flex justify-between'>
              <p>Hot</p>
              <p>Hot</p>
            </div>
            <div className='trending-cart-7 w-full absolute bottom-0'>
              <div className='action flex justify-between items-center w-full'>
                <button className='py-3 bg-black text-white w-full custom-border relative'>Add</button>
                <button className='py-3 bg-black text-white w-full'>
                  cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Trending
