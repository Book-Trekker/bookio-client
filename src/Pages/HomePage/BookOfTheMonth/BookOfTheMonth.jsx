import React from 'react'
import './BookOfTheMonth.css'
// import book1 from '../../../assets/images/booksOfTheMonth/Image-17-480x693.jpg.png'
// import book2 from '../../../assets/images/booksOfTheMonth/Image-28-480x693.jpg.png'
// import book3 from '../../../assets/images/booksOfTheMonth/Image-7-480x693.jpg.png'
// import book4 from '../../../assets/images/booksOfTheMonth/Image-72-480x693.jpg.png'

const BookOfTheMonth = () => {
  return (
    <section className='px-10'>
      {/* title  */}
      <div className='trending_title flex justify-between items-center my-4'>
        <h2 className='text-xl md:text-2xl text-primary font-bold font-libre my-8'>
          Books of the Month
        </h2>
        <div className='flex items-center justify-center'>
          <p className='underline cursor-pointer'>View All</p>
          <span className='flex justify-center items-center ml-1'>
            <i class='ri-arrow-right-line'></i>
          </span>
        </div>
      </div>
      {/* main section  */}
      <div className='book_main grid grid-cols-1 md:grid-cols-2 gap-3'>
        {/* book-left  */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 book_of_the_month_main'>
          <div className='book_of_the_month'>
            <div className='flex justify-between p-3'>
              <span className='px-1 py-0 bg-[#FF0404] text-white'>-10%</span>
              <span>
                <i class='ri-heart-line p-3 bg-white rounded-full hover:bg-primary hover:text-white cursor-pointer'></i>
              </span>
            </div>
            <div className='bottom_cart absolute text-white cursor-pointer'>
              <i class='ri-eye-line text-3xl '></i>
            </div>
          </div>
          <div className='pl-5 flex flex-col justify-center'>
            <div className='top_rating flex'>
              <i class='ri-star-s-fill text-yellow'></i>
              <i class='ri-star-s-fill text-yellow'></i>
              <i class='ri-star-s-fill text-yellow'></i>
              <i class='ri-star-s-fill text-yellow'></i>
              <i class='ri-star-s-fill text-yellow'></i>
              <p className='text-gray'>(5)</p>
            </div>
            <h3 className='text-xl md:text-3xl text-primary font-bold font-libre py-3'>
              Healed New Life
            </h3>
            <p className='text-gray font-bold'>
              By: <span className='font-medium'>Alyce Kris</span>{' '}
            </p>
            <hr className='text-gray opacity-50 my-4' />
            <h2 className='text-gray text-2xl font-bold'>
              {' '}
              <span className='line-through text-xl'>100.00</span>{' '}
              <span className='text-red-600 decoration-none'>$90.00</span>{' '}
            </h2>
            <div className='top-info py-2'>
              <p className='flex items-center text-gray'>
                <i class='ri-arrow-right-s-fill text-xl font-bold text-black'></i>{' '}
                <span>For Kids</span>{' '}
              </p>
              <p className='flex items-center text-gray'>
                <i class='ri-arrow-right-s-fill text-xl font-bold text-black'></i>{' '}
                <span>First published in 2014</span>{' '}
              </p>
              <p className='flex items-center text-gray'>
                <i class='ri-arrow-right-s-fill text-xl font-bold text-black'></i>{' '}
                <span>Copyright by Wpbingo</span>{' '}
              </p>
            </div>
            <span className='mt-2'>
              <button className='border-2 px-8 py-2 text-primary font-bold hover:bg-primary hover:text-white hover:border-transparent text-sm font-lato'>
                {' '}
                ADD TO CART
              </button>
            </span>
          </div>
        </div>
        {/* book-right  */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 book_of_the_month_main'>
          <div className='book_of_the_month book_of_the_month2'>
            <div className='flex justify-between p-3'>
              <span className='px-1 py-0 bg-[#FF0404] text-white'>-10%</span>
              <span>
                <i class='ri-heart-line p-3 bg-white rounded-full hover:bg-primary hover:text-white cursor-pointer'></i>
              </span>
            </div>
            <div className='bottom_cart absolute text-white cursor-pointer'>
              <i class='ri-eye-line text-3xl '></i>
            </div>
          </div>
          <div className='pl-5 flex flex-col justify-center'>
            <div className='top_rating flex'>
              <i class='ri-star-s-fill text-gray'></i>
              <i class='ri-star-s-fill text-gray'></i>
              <i class='ri-star-s-fill text-gray'></i>
              <i class='ri-star-s-fill text-gray'></i>
              <i class='ri-star-s-fill text-gray'></i>
              <p className='text-gray'>(0)</p>
            </div>
            <h3 className='text-xl md:text-3xl text-primary font-bold font-libre py-3'>
              Cup Cake Diares
            </h3>
            <p className='text-gray font-bold'>
              By: <span className='font-medium'>Alyce Hansen</span>{' '}
            </p>
            <hr className='text-gray opacity-50 my-4' />
            <h2 className='text-gray text-2xl font-bold'>
              <span className='text-red-600 decoration-none'>$115.00</span>{' '}
            </h2>
            <div className='top-info py-2'>
              <p className='flex items-center text-gray'>
                <i class='ri-arrow-right-s-fill text-xl font-bold text-black'></i>{' '}
                <span>For Kids</span>{' '}
              </p>
              <p className='flex items-center text-gray'>
                <i class='ri-arrow-right-s-fill text-xl font-bold text-black'></i>{' '}
                <span>First published in 2014</span>{' '}
              </p>
              <p className='flex items-center text-gray'>
                <i class='ri-arrow-right-s-fill text-xl font-bold text-black'></i>{' '}
                <span>Copyright by Wpbingo</span>{' '}
              </p>
            </div>
            <span className='mt-2'>
              <button className='border-2 px-8 py-2 text-primary font-bold hover:bg-primary hover:text-white hover:border-transparent text-sm font-lato'>
                {' '}
                ADD TO CART
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookOfTheMonth
