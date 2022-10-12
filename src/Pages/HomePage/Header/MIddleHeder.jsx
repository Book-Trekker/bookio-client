import React from 'react'
import logo from '../../../assets/images/logo/logo.png'

const MIddleHeder = () => {
  return (
    <section className='middle_header px-10 py-3 items-center'>
      <div className='brand'>
        <img src={logo} alt='/brand-logo' />
      </div>
      <div className='search'>search</div>
      <div className='cart flex justify-between items-center'>
        <div className='bookshop'>
          <p className='text-center'>
            <i class='ri-map-pin-line'></i>
          </p>
          <p className='text-sm'>Bookshop Finder</p>
        </div>
        <div className='addToCart relative'>
          <span className='text-3xl mr-5'>
            <i class='ri-shopping-cart-line'></i>
          </span>
          <div className='cart_count absolute w-7 h-7 bg-secondary rounded-full right-[-3px] top-[-10px] text-white flex items-center justify-center'>
            10
          </div>
        </div>
      </div>
    </section>
  )
}

export default MIddleHeder
