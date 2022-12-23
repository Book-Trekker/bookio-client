import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
import './Testimonial.css'
import img from '../../../assets/images/reviewer/reviewer.png'
import { FaQuoteRight } from 'react-icons/fa'
import { Avatar } from '@material-tailwind/react'

const Testimonial = () => {
  return (
    <section className='testimonial pt-16 px-10'>
      <div className='testimonial_main'>
        <h2 className='text-3xl text-primary font-bold font-libre'>
          Happy Client Say !
        </h2>

        {/* review slider  */}
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className='mySwiper'
        >
            <SwiperSlide>
                <div className='client my-4 border-2 border-[#E9E9E9] rounded p-4'>
                <div className='review_rating flex justify-between'>
                    <div>
                    <div className='rating_icon flex'>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                    </div>
                    <h3 className='text-xl text-primary font-bold font-libre'>
                        Great Quality!
                    </h3>
                    </div>
                    <div>
                    <FaQuoteRight className='text-4xl text-primary' />{' '}
                    </div>
                </div>
                <p className='py-2 text-gray font-lato text-left'>
                    Blood bank canine teeth larynx occupational therapist oncologist
                    optician plaque spinal tap stat strep screen violence joints
                    symptoms x-ray
                </p>
                <div className='reviewer_profile flex items-center'>
                    <div className='flex gap-4 my-2'>
                    <span className='w-[50px]'>
                        <Avatar src={img} alt='avatar' variant='circular' />
                    </span>
                    <div className='text-left'>
                        <h6 className='text-primary text-sm font-bold tracking-wider'>
                        SAITAMA ONE
                        </h6>
                        <p className='text-gray font-lato font-medium'>
                        Photographer
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='client my-4 border-2 border-[#E9E9E9] rounded p-4'>
                <div className='review_rating flex justify-between'>
                    <div>
                    <div className='rating_icon flex'>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                    </div>
                    <h3 className='text-xl text-primary font-bold font-libre'>
                        Great Quality!
                    </h3>
                    </div>
                    <div>
                    <FaQuoteRight className='text-4xl text-primary' />{' '}
                    </div>
                </div>
                <p className='py-2 text-gray font-lato text-left'>
                    Blood bank canine teeth larynx occupational therapist oncologist
                    optician plaque spinal tap stat strep screen violence joints
                    symptoms x-ray
                </p>
                <div className='reviewer_profile flex items-center'>
                    <div className='flex gap-4 my-2'>
                    <span className='w-[50px]'>
                        <Avatar src={img} alt='avatar' variant='circular' />
                    </span>
                    <div className='text-left'>
                        <h6 className='text-primary text-sm font-bold tracking-wider'>
                        SAITAMA ONE
                        </h6>
                        <p className='text-gray font-lato font-medium'>
                        Photographer
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='client my-4 border-2 border-[#E9E9E9] rounded p-4'>
                <div className='review_rating flex justify-between'>
                    <div>
                    <div className='rating_icon flex'>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                    </div>
                    <h3 className='text-xl text-primary font-bold font-libre'>
                        Great Quality!
                    </h3>
                    </div>
                    <div>
                    <FaQuoteRight className='text-4xl text-primary' />{' '}
                    </div>
                </div>
                <p className='py-2 text-gray font-lato text-left'>
                    Blood bank canine teeth larynx occupational therapist oncologist
                    optician plaque spinal tap stat strep screen violence joints
                    symptoms x-ray
                </p>
                <div className='reviewer_profile flex items-center'>
                    <div className='flex gap-4 my-2'>
                    <span className='w-[50px]'>
                        <Avatar src={img} alt='avatar' variant='circular' />
                    </span>
                    <div className='text-left'>
                        <h6 className='text-primary text-sm font-bold tracking-wider'>
                        SAITAMA ONE
                        </h6>
                        <p className='text-gray font-lato font-medium'>
                        Photographer
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='client my-4 border-2 border-[#E9E9E9] rounded p-4'>
                <div className='review_rating flex justify-between'>
                    <div>
                    <div className='rating_icon flex'>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                        <i class='ri-star-s-fill text-yellow'></i>
                    </div>
                    <h3 className='text-xl text-primary font-bold font-libre'>
                        Great Quality!
                    </h3>
                    </div>
                    <div>
                    <FaQuoteRight className='text-4xl text-primary' />{' '}
                    </div>
                </div>
                <p className='py-2 text-gray font-lato text-left'>
                    Blood bank canine teeth larynx occupational therapist oncologist
                    optician plaque spinal tap stat strep screen violence joints
                    symptoms x-ray
                </p>
                <div className='reviewer_profile flex items-center'>
                    <div className='flex gap-4 my-2'>
                    <span className='w-[50px]'>
                        <Avatar src={img} alt='avatar' variant='circular' />
                    </span>
                    <div className='text-left'>
                        <h6 className='text-primary text-sm font-bold tracking-wider'>
                        SAITAMA ONE
                        </h6>
                        <p className='text-gray font-lato font-medium'>
                        Photographer
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
