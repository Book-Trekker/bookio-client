import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsMinecartLoaded } from 'react-icons/bs'
import { useNavigate } from 'react-router'

const BestSeller = ({ title }) => {
  const navigate = useNavigate()

  return (
    <div className='best_seller_items'>
      <h2 className='text-2xl font-libre font-bold'>{title}</h2>
      <div className='w-full h-[1px] bg-[#e2e2e2] relative mb-5 mt-2'>
        <div className='w-14 h-1 bg-primary absolute left-0 bottom-0'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        <div onClick={() => navigate('/shop/book/1')}>
          <div className='w-full change-bg-1 cursor-pointer mb-6'>
            {/* cart  */}
            <div className='trending-1 trend-bg-1 w-full relative'>
              <div className='trending_content flex justify-between p-2'>
                <p className='text-sm'>
                  <span className='px-2 bg-yellow text-white py-[1px]'>
                    Hot
                  </span>
                </p>
                <p className=' bg-white text-black rounded-full'>
                  <span>
                    <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
                  </span>
                </p>
              </div>
              <div className='trending-cart-1 w-full absolute bottom-0'>
                <div className='action flex justify-between items-center w-full'>
                  <button className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'>
                    <span>
                      <BsMinecartLoaded className='text-2xl' />
                    </span>
                  </button>
                  <button className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'>
                    <span>
                      <AiOutlineEye className='text-2xl' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* cart details  */}
            <div className='details'>
              <p className='author text-sm text-gray mt-2 font-bold'>
                By: <span className='font-normal'>Alec Hansen</span>
              </p>
              <p className='book-name text-lg font-libre font-medium text-primary'>
                The Art of Fashion
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                $80.00 - $200.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSeller
