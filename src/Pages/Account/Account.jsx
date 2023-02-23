import React, { useRef, useState } from 'react'
import BreakCumb from '../../Shared/BreadCumb/BreakCumb'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const Account = () => {
  return (
    <section className='account_section my-5'>
      <div className='breadCumb_main'>
        <BreakCumb
          first={'home'}
          second={'account'}
          route={'/account'}
          MyAccount={'My Account'}
        />
      </div>

      {/* signUp & login */}
      <section className='hidden md:block'>
        <div className='signUp_login grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mx-5 my-10'>
          <div className='login'>
            <Login />
          </div>
          <div className='signUp'>
            <SignUp />
          </div>
        </div>
      </section>

      {/* mobile login sign up page  */}
      <section className='block md:hidden'>
        <div className='signUp_login flex justify-center items-center  gap-x-10 gap-y-5 mx-5 my-10'>
          <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
            <SwiperSlide className='w-full'>
              <Login />
            </SwiperSlide>
            <SwiperSlide className='w-full'>
              <SignUp />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      
    </section>
  )
}

export default Account
