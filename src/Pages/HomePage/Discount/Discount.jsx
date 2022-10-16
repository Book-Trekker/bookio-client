import React from 'react'
import './Discount.css'
import { Button } from '@material-tailwind/react'

const Discount = () => {
  return (
    <section className='discount w-full px-5'>
      <div className='discount-bg h-80 flex justify-center items-center'>
        <div className='discount_content text-center'>
          <p className='my-3 text-white font-bold'>MORE BANG FOR YOUR BOOKS</p>
          <h2 className='text-3xl md:text-5xl text-white font-libre font-bold'>
            20% Off Select Books
          </h2>
          <Button className='bg-black text-white my-5 rounded-none hover:bg-primary'>
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Discount
