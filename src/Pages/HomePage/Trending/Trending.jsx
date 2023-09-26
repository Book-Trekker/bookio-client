import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { BsMinecartLoaded } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import './Trending.css'
import { useGetAllBooksQuery } from '../../../redux/features/books/bookApiSlice'

const Trending = ({ title }) => {
  const { data: books } = useGetAllBooksQuery()
  // console.log(books?.data)
  // const bData = books?.data?.map(d => console.log(d?.name))

  return (
    <section className='trending px-5 my-8 w-full overflow-x-hidden'>
      {/* trending title  */}
      <div className='trending_title flex justify-between items-center my-4'>
        <h2 className='text-xl md:text-2xl font-bold font-libre my-5'>
          {title}
        </h2>
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
        {books?.data?.map((bookData, index) => {
          if (bookData.group === 'bestSeller') {
            return (
              <SwiperSlide key={index}>
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
                      By:{' '}
                      <span className='font-normal'>{bookData?.author}</span>
                    </p>
                    <p className='book-name text-lg font-libre font-medium text-primary'>
                      {bookData?.name}
                    </p>
                    <p className='price text-sm font-libre font-bold text-secondary'>
                      ${bookData?.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          }
          return null
        })}
      </Swiper>
    </section>
  )
}

export default Trending
