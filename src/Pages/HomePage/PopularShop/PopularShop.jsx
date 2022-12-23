import React, { useEffect } from 'react'
import ScrollCarousel from 'scroll-carousel'
import 'scroll-carousel/dist/scroll.carousel.min.css'
import popular from '../../../assets/images/popularShop/cate-2.jpg.png'

const PopularShop = () => {
    useEffect(() => {
        new ScrollCarousel('.popular', {
            autoplay: true,
            autoplaySpeed: 1,
            speed: 10,
            smartSpeed: false,
            direction: 'rtl',
        })
      }, [])
    
  return (
    <section className='px-10 my-16'>
        <h2 className='text-primary text-2xl font-bold font-libre my-3'>Popular Shop</h2>
        <div className="popular">
        <img src={popular} alt="popular/shop" />
        <img src={popular} alt="popular/shop" />
        <img src={popular} alt="popular/shop" />
        <img src={popular} alt="popular/shop" />
        <img src={popular} alt="popular/shop" />
        <img src={popular} alt="popular/shop" />
        <img src={popular} alt="popular/shop" />
        <img src={popular} alt="popular/shop" />
        </div>
    </section>
  )
}

export default PopularShop