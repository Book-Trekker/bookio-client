import React from 'react'
import '../../style/Global.css'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'

const AboutUs = () => {
  return (
    <section className='about_us_section'>
      {/* breadcumb  */}
      <div className='breadCumb'>
        <BreadCumb
          first={'Home'}
          second={'About Us'}
          route={'/about'}
          MyAccount={'About Us'}
        />
      </div>
      <div className='about_main m-5 md:m-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <section className='about_video_section'>
          <iframe
            width='100%'
            height='400'
            src='https://www.youtube.com/embed/nDwtLYAy72o'
            title='bookio'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            poster='/public/videothumb.png'
          ></iframe>
        </section>
        <div className='flex items-center pl-10'>
          <div>
            <span className='text-primary font-lato font-semibold'>
              BUSINESS FOR GOOD
            </span>
            <h2 className='py-3 text-4xl font-bold font-libre text-primary'>
              Bookio is Australia's Online Independent Bookstore
            </h2>
            <p className='text-primary font-libre font-semibold'>
              Get behind the scenes with us and explore the re-use revolution
            </p>
            <div className='my-3 w-16 h-[2px] bg-primary'></div>
            <p className='text-gray text-sm'>
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Vestibulum eu odio. interdum lacus sit amet orci. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; In ac dui quis mi consectetuer lacinia..
            </p>
            <button className='px-5 py-2 bg-primary text-white my-3 font-semibold font-lato'>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
