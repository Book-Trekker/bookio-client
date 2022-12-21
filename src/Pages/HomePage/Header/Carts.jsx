import React from 'react'

const Carts = () => {
  return (
    <div className='addToCart relative'>
      <span className='text-3xl mr-5 text-primary hover:text-secondary cursor-pointer'>
        <i class='ri-shopping-cart-line'></i>
      </span>
      <div className='cart_count absolute w-7 h-7 bg-secondary rounded-full right-[-3px] top-[-10px] text-white flex items-center justify-center'>
        10
      </div>
    </div>
  )
}

export default Carts
