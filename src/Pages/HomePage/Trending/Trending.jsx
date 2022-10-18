import React from 'react'
import './Trending.css'

const Trending = () => {
  return (
    <section className='trending px-5 my-8 w-full overflow-x-hidden'>
      {/* trending title  */}
      <div className='trending_title flex justify-between items-center my-4'>
        <h2 className='text-2xl font-bold font-libre'>Trending On Bookio</h2>
        <div className='flex items-center justify-center'>
          <p className='underline cursor-pointer'>View All</p>
          <span className='flex justify-center items-center ml-1'>
            <i class='ri-arrow-right-line'></i>
          </span>
        </div>
      </div>

      {/* trending card  */}
    </section>
  )
}

export default Trending
