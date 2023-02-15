import React from 'react'
import BreakCumb from '../../Shared/BreadCumb/BreakCumb'
import './Shop.css'

const ShopHero = () => {
  return (
    <section className='shop_section'>
      <div className='shop_main'>
        <div className='breakCumb'>
          <BreakCumb first={'Home'} second={'Shop'} route={'/shop'} />
        </div>
        <div className='shop_hero_main p-5 md:p-10'>
          <div className='shop_cover w-full h-96 md:h-80 relative text-center'>
            <div className='shop_hero_content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <h2 className='text-3xl md:text-5xl text-primary
              font-libre font-bold leading-[40px] md:leading-[60px]'>
                Book Your Own <br></br> Adventures
              </h2>
              <p className='py-5 font-libre font-semibold text-primary'>MORE BANG FOR YOUR BOOKS</p>
              <button className='px-8 py-2 bg-primary text-white font-libre font-bold'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopHero
