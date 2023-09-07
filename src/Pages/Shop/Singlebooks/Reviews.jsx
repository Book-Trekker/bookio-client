import React from 'react'
import ReviewForm from './ReviewForm'

const Reviews = ({id}) => {
  return (
    <div>
      {/* Show user review */}
      <div>
        <h2 className='text-2xl font-libre font-bold'>Reviews</h2>
        <div>{/* Review show here  */}</div>
        <p className='text-gray'>There are no reviews yet.</p>
        <h3 className='my-5 font-libre font-bold flex items-center text-[12px] md:text-xl'>
          <span className='font-normal text-2xl mr-2'>
            <i class='ri-edit-2-line'></i>
          </span>{' '}
          BE THE FIRST TO REVIEW “CASTLE IN THE SKY”
        </h3>
      </div>
      {/* create user review */}
      <div>
        <ReviewForm id={id} />
      </div>
    </div>
  )
}

export default Reviews
