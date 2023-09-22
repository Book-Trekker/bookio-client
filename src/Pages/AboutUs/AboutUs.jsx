import React from 'react'
import '../../style/Global.css'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import aboutBg from '../../assets/images/about/about-bg.png'
import aboutCover from '../../assets/images/about/about-cover.png'
import DeliveryProcess from './DeliveryProcess'
import Subscribe from './Subscribe'
import TopFooterCard from '../../Shared/TopFooterCard'
import { TopFooterData } from '../../utilities/DemoData'
import bookio from '../../assets/images/about/bookio.png'
import BookioSlider from './BookioSlider'
import Header from '../HomePage/Header/Header'
import Footer from '../../Shared/Footer/Footer'

const AboutUs = () => {
  return (
    <section className='about_us_section'>
      <Header />
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
      {/* delivery info  */}
      <div className='delivery_info px-5 md:px-10 my-10 md:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <DeliveryProcess
          icon={'ri-truck-line'}
          title={'Free delivery'}
          subtitle={'For all orders above $45'}
        />
        <DeliveryProcess
          icon={'ri-secure-payment-line'}
          title={'Secure payments'}
          subtitle={'Confidence on all your devices'}
        />
        <DeliveryProcess
          icon={'ri-headphone-line'}
          title={'Top-notch support'}
          subtitle={'sayhello&vapier.com'}
        />
        <DeliveryProcess
          icon={'ri-refresh-line'}
          title={'180 Days Return'}
          subtitle={'180 Days Return'}
        />
      </div>
      {/* subscribe  */}
      <div className='subscribe_section px-10'>
        <Subscribe />
      </div>
      {/* bookio testimonial  */}
      <div className='bookio_testimonial px-10'>
        <div className='bookio_main grid grid-cols-1 md:grid-cols-2 gap-4 my-14'>
          <div className='w-full'>
            <img className='top_image' src={bookio} alt='bookio/img' />
          </div>
          <div className='slider__ border border-[#E9E9E9]'>
            <BookioSlider />
          </div>
        </div>
      </div>
      {/* top footer  */}
      <div
        style={{ borderTop: '1px solid #EDEDED' }}
        className='px-10 my-5 py-8'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {TopFooterData.map((d) => (
            <TopFooterCard key={d.name} data={d} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default AboutUs
