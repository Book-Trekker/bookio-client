import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'
import { FaQuoteRight } from 'react-icons/fa'
import { Avatar } from '@material-tailwind/react'
import reviewer from '../../assets/images/about/reviewer.png'

const BookioSlider = () => {
  return (
    <div className='bookio_slider'>
      <>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='p-5 md:p-10 text-center flex flex-col items-center justify-center'>
              <div className='flex justify-center'>
                <FaQuoteRight className='text-3xl text-primary' />
              </div>
              <div className='icon flex py-3'>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
              </div>
              <h4 className='text-primary text-xl font-bold'>Great Quality!</h4>
              <p className='text-gray text-justify'>
                Blood bank canine teeth larynx occupational therapist oncologist
                optician plaque spinal tap stat strep screen violence joints
                symptoms x-ray yawn. Contagious cough diabetes mellitus...{' '}
              </p>

              <div className='prifile__ w-20 mx-auto my-3'>
                <Avatar
                  src={reviewer}
                  alt='profile/review'
                  variant='circular'
                />
                <h5 className='text-lato text-sm text-primary font-semibold'>
                  ANN SMITH
                </h5>
                <p className='text-gray text-sm font-lato'>Photographer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-5 md:p-10 text-center flex flex-col items-center justify-center'>
              <div className='flex justify-center'>
                <FaQuoteRight className='text-3xl text-primary' />
              </div>
              <div className='icon flex py-3'>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
              </div>
              <h4 className='text-primary text-xl font-bold'>Great Quality!</h4>
              <p className='text-gray text-justify'>
                Blood bank canine teeth larynx occupational therapist oncologist
                optician plaque spinal tap stat strep screen violence joints
                symptoms x-ray yawn. Contagious cough diabetes mellitus...{' '}
              </p>

              <div className='prifile__ w-20 mx-auto my-3'>
                <Avatar
                  src={reviewer}
                  alt='profile/review'
                  variant='circular'
                />
                <h5 className='text-lato text-sm text-primary font-semibold'>
                  ANN SMITH
                </h5>
                <p className='text-gray text-sm font-lato'>Photographer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-5 md:p-10 text-center flex flex-col items-center justify-center'>
              <div className='flex justify-center'>
                <FaQuoteRight className='text-3xl text-primary' />
              </div>
              <div className='icon flex py-3'>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
              </div>
              <h4 className='text-primary text-xl font-bold'>Great Quality!</h4>
              <p className='text-gray text-justify'>
                Blood bank canine teeth larynx occupational therapist oncologist
                optician plaque spinal tap stat strep screen violence joints
                symptoms x-ray yawn. Contagious cough diabetes mellitus...{' '}
              </p>

              <div className='prifile__ w-20 mx-auto my-3'>
                <Avatar
                  src={reviewer}
                  alt='profile/review'
                  variant='circular'
                />
                <h5 className='text-lato text-sm text-primary font-semibold'>
                  ANN SMITH
                </h5>
                <p className='text-gray text-sm font-lato'>Photographer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-5 md:p-10 text-center flex flex-col items-center justify-center'>
              <div className='flex justify-center'>
                <FaQuoteRight className='text-3xl text-primary' />
              </div>
              <div className='icon flex py-3'>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
              </div>
              <h4 className='text-primary text-xl font-bold'>Great Quality!</h4>
              <p className='text-gray text-justify'>
                Blood bank canine teeth larynx occupational therapist oncologist
                optician plaque spinal tap stat strep screen violence joints
                symptoms x-ray yawn. Contagious cough diabetes mellitus...{' '}
              </p>

              <div className='prifile__ w-20 mx-auto my-3'>
                <Avatar
                  src={reviewer}
                  alt='profile/review'
                  variant='circular'
                />
                <h5 className='text-lato text-sm text-primary font-semibold'>
                  ANN SMITH
                </h5>
                <p className='text-gray text-sm font-lato'>Photographer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-5 md:p-10 text-center flex flex-col items-center justify-center'>
              <div className='flex justify-center'>
                <FaQuoteRight className='text-3xl text-primary' />
              </div>
              <div className='icon flex py-3'>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
                <i class='ri-star-fill text-secondary'></i>
              </div>
              <h4 className='text-primary text-xl font-bold'>Great Quality!</h4>
              <p className='text-gray text-justify'>
                Blood bank canine teeth larynx occupational therapist oncologist
                optician plaque spinal tap stat strep screen violence joints
                symptoms x-ray yawn. Contagious cough diabetes mellitus...{' '}
              </p>

              <div className='prifile__ w-20 mx-auto my-3'>
                <Avatar
                  src={reviewer}
                  alt='profile/review'
                  variant='circular'
                />
                <h5 className='text-lato text-sm text-primary font-semibold'>
                  ANN SMITH
                </h5>
                <p className='text-gray text-sm font-lato'>Photographer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}

export default BookioSlider
