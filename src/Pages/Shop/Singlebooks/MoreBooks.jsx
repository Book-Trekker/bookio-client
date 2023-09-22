import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsMinecartLoaded } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const MoreBooks = ({ books }) => {
  // console.log(books?.images[0]?.url)
  const navigate = useNavigate()
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {books?.data?.slice(0, 20).map((bookData) => (
        <div
          onClick={() => navigate(`/shop/book/${bookData?._id}`)}
          className=''
        >
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
                By: <span className='font-normal'>{bookData?.author}</span>
              </p>
              <p className='book-name text-lg font-libre font-medium text-primary'>
                {bookData?.name}
              </p>
              <p className='price text-sm font-libre font-bold text-secondary'>
                $ {bookData?.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default MoreBooks
