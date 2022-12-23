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
        <h2 className='text-3xl text-primary font-bold font-libre my-8'>
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
      <div className="book_main grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className='grid grid-cols-1 md:grid-cols-2 book_of_the_month_main'>
            <div className='book_of_the_month'>
                <div className='flex justify-between p-3'>
                    <span className='px-1 py-0 bg-[#FF0404] text-white'>-10%</span>
                    <span><i class="ri-heart-line p-3 bg-white rounded-full hover:bg-primary hover:text-white cursor-pointer"></i></span>
                </div>
                <div className="bottom_cart absolute text-white cursor-pointer">
                <i class="ri-eye-line text-3xl "></i>
                </div>
            </div>
            <div>Hello</div>
        </div>
        <div>Hello</div>
      </div>
    </section>
  )
}

export default BookOfTheMonth
