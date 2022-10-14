import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import 'animate.css'

import './Hero.css'

import slider1 from '../../../assets/images/hero/slider1.png'
import slider2 from '../../../assets/images/hero/slider2.png'
import slider3 from '../../../assets/images/hero/slider3.png'
import { Button } from '@material-tailwind/react'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    ltr: true,
  }

  return (
    <section className='hero'>
      <Slider {...settings}>
        {/* slider 1  */}
        <div className='slider-1 relative'>
          <div className='img'>
            <img src={slider1} alt='' />
          </div>
          <div className='content absolute'>
            <h1 className='animate__animated animate__fadeInDown animate__delay-2s text-3xl md:text-5xl lg:text-7xl text-primary text-center font-libre font-bold'>
              Biggest{' '}
              <span className='text-secondary underline'>Bookstore</span> <br />{' '}
              in Europe
            </h1>
            <p className='py-4 text-gray font-medium text-center text-xl'>
              We deliver books all over the world 10,000 + Books in stock
            </p>
            <div className='btn_ text-center'>
              <Button className='bg-secondary rounded-none hover:bg-primary'>
                MEET OUR BESTSELLERS{' '}
                <span className='ml-1'>
                  <i class='ri-arrow-right-line'></i>
                </span>
              </Button>
            </div>
          </div>
        </div>
        {/* slider 2  */}
        <div className='slider-2 relative'>
          <div className='img'>
            <img src={slider2} alt='' />
          </div>
          <div className='content absolute'>
            <h1 className='animate__animated animate__fadeInDown animate__delay-2s text-3xl md:text-5xl lg:text-7xl text-primary text-center font-libre font-bold'>
              Support <span className='text-secondary underline'>Local</span>{' '}
              <br /> Bookstores
            </h1>
            <p className='py-4 text-gray font-medium text-center text-xl'>
              $15,343,695.75 raised for local bookstores.
            </p>
            <div className='btn_ text-center'>
              <Button className='bg-secondary rounded-none hover:bg-primary'>
                MEET OUR BESTSELLERS{' '}
                <span className='ml-1'>
                  <i class='ri-arrow-right-line'></i>
                </span>
              </Button>
            </div>
          </div>
        </div>
        {/* slider 3  */}
        <div className='slider-3 relative'>
          <div className='img'>
            <img src={slider3} alt='' />
          </div>
          <div className='content absolute'>
            <h1 className='animate__animated animate__fadeInDown animate__delay-2s text-3xl md:text-5xl lg:text-7xl text-primary text-center font-libre font-bold'>
              Bestselling <br />
              <span className='text-secondary underline'>Fiction</span> Books
            </h1>
            <p className='py-4 text-gray font-medium text-center text-xl'>
              Over 120,000 Trustpilot reviews
            </p>
            <div className='btn_ text-center'>
              <Button className='bg-secondary rounded-none hover:bg-primary'>
                MEET OUR BESTSELLERS{' '}
                <span className='ml-1'>
                  <i class='ri-arrow-right-line'></i>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default Hero
