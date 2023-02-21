import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from 'swiper'
import { BsMinecartLoaded } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import './Trending.css'

const Trending = ({title}) => {
  return (
    <section className='trending px-5 my-8 w-full overflow-x-hidden'>
      {/* trending title  */}
      <div className='trending_title flex justify-between items-center my-4'>
        <h2 className='text-xl md:text-2xl font-bold font-libre my-5'>{title}</h2>
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
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='w-full change-bg-1 cursor-pointer'>
            {/* cart  */}
            <div className='trending-1 trend-bg-1 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-1 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Alec Hansen</span>
              </p>
              <p className='book-name text-lg font-libre font-medium text-primary'>
                The Art of Fashion
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                $80.00 - $200.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full change-bg-2 cursor-pointer'>
            {/* cart  */}
            <div className='trending-2 trend-bg-2 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-2 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Alyce Kris</span>
              </p>
              <p className='book-name text-sm font-libre font-bold my-2 text-primary'>
                100 Selected Poems
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                <span className="line-through text-gray">$400.00 </span>  $350.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full change-bg-3 cursor-pointer'>
            {/* cart  */}
            <div className='trending-3 trend-bg-3 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-3 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Glenna Berge</span>
              </p>
              <p className='book-name text-sm font-libre font-bold my-2 text-primary'>
                Life is What you make it
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                <span className="line-through text-gray">$120.00 </span>  $100.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full change-bg-4 cursor-pointer'>
            {/* cart  */}
            <div className='trending-4 trend-bg-4 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-4 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Norenne Mayart</span>
              </p>
              <p className='book-name text-sm font-libre font-bold my-2 text-primary'>
                Heartless Marissa Meyer
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                $214.22
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full change-bg-5 cursor-pointer'>
            {/* cart  */}
            <div className='trending-5 trend-bg-5 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-5 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Glenna Berge</span>
              </p>
              <p className='book-name text-sm font-libre font-bold my-2 text-primary'>
                The Untetheres Soul
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                $214.22
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full change-bg-6 cursor-pointer'>
            {/* cart  */}
            <div className='trending-6 trend-bg-6 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-6 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Norenne Mayart</span>
              </p>
              <p className='book-name text-sm font-libre font-bold my-2 text-primary'>
                Africa Rising
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                <span className="line-through text-gray">$130.00 </span>  $125.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full change-bg-7 cursor-pointer'>
            {/* cart  */}
            <div className='trending-7 trend-bg-7 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-7 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Grenna Berge</span>
              </p>
              <p className='book-name text-sm font-libre font-bold my-2 text-primary'>
                Once Upon A Reunion
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                <span className="line-through text-gray">$200.00 </span>  $180.00
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Trending
