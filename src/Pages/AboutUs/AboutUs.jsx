import React from 'react'
import '../../style/Global.css'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import aboutBg from '../../assets/images/about/about-bg.png'
import aboutCover from '../../assets/images/about/about-cover.png'

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
        <div className='flex items-center md:pl-10'>
          <div>
            <span className='text-primary font-lato font-semibold'>
              BUSINESS FOR GOOD
            </span>
            <h2 className='py-3 text-2xl md:text-3xl lg:text-4xl font-bold font-libre text-primary'>
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
            <button className='px-5 py-2 bg-primary text-white my-3 font-semibold font-lato'>
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* largest bookstore section  */}
      <div
        style={{ backgroundImage: `url(${aboutBg})` }}
        className='largest_bookstore my-10 w-full h-full bg-no-repeat bg-cover bg-center text-center py-14'
      >
        <div className='w-full'>
          <div className='w-full flex justify-center px-5'>
            <img className='top_image' src={aboutCover} alt='about/cover' />
          </div>
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-primary font-bold font-libre py-10'>
            The Internet's Largest <br></br> Bookstore
          </h2>
          <p className='text-primary font-libre font-semibold pb-5'>
            Get behind the scenes with us and explore the re-use revolution
          </p>
          <div className='my-3 w-16 h-[2px] mx-auto bg-primary'></div>
          <p className='text-gray px-5 md:px-28 lg:px-48'>
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Vestibulum eu odio. interdum lacus sit amet orci. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; In ac dui quis mi consectetuer lacinia..
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
