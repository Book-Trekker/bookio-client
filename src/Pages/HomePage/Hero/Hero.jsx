import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import './Hero.css'

import slider1 from '../../../assets/images/hero/slider1.png'
import slider2 from '../../../assets/images/hero/slider2.png'
import slider3 from '../../../assets/images/hero/slider3.png'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    ltr: true,
  }

  return (
    <section className='hero'>
      <Slider {...settings}>
        <div className='slider-1'>
          <img src={slider1} alt='' />
        </div>
        <div>
          <img src={slider2} alt='' />
        </div>
        <div>
          <img src={slider3} alt='' />
        </div>
      </Slider>
    </section>
  )
}

export default Hero
