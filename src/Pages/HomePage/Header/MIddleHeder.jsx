import React from 'react'
import logo from '../../../assets/images/logo/logo.png'
import Carts from './Carts'

const MIddleHeder = () => {
  return (
    <div className='hidden md:block'>
      <section className='middle_header px-10 py-3 items-center'>
        <div className='brand'>
          <img src={logo} alt='/brand-logo' />
        </div>
        <div className='search m-2 bg-grayDark'>
          <div class='sm:flex rounded shadow-sm flex justify-center items-center text-gray'>
            <span class='py-3 px-4 inline-flex items-center min-w-fit w-full  bg-gray-50 text-sm text-gray-500 -mt-px -ml-px sm:w-auto sm:mt-0 sm:first:ml-0 dark:bg-gray-700 dark:text-gray-400'>
              All categories{' '}
              <span className='text-xl'>
                <i class='ri-arrow-down-s-line'></i>
              </span>{' '}
              <span className='ml-4 text-gray'>|</span>
            </span>
            <input
              type='text'
              placeholder='Search product...'
              class='py-3 bg-grayDark px-4 pr-11 block w-full shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative dark:text-gray-400 focus:outline-none'
            />
            <span className='bg-secondary hover:bg-primary h-[54px] w-[140px] flex justify-center items-center'>
              <i class='ri-search-line text-white text-xl'></i>
            </span>
          </div>
        </div>
        <div className='cart flex justify-between items-center'>
          <div className='bookshop'>
            <p className='text-center'>
              <i class='ri-map-pin-line'></i>
            </p>
            <p className='text-sm'>Bookshop Finder</p>
          </div>
          {/* Add to cart  */}
          <Carts />
        </div>
      </section>
    </div>
  )
}

export default MIddleHeder
