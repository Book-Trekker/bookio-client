import React from 'react'
import ReviewForm from './ReviewForm'
import { useGetBookReviewsQuery } from '../../../redux/features/review/reviewApiSlice'
import { Button } from '@material-tailwind/react'
import Rating from 'react-rating'

const Reviews = ({ id }) => {
  const { data: reviewData } = useGetBookReviewsQuery(id)
  console.log(reviewData?.data?.length)

  return (
    <div>
      {/* Show user review */}
      <div>
        <div className='flex justify-between pt-5 pb-8 border-b border-b-[#0000001f]'>
          <h2 className='text-2xl font-bold font-lato'>
            Reviews ({reviewData?.data?.length})
          </h2>
          <a href='#reviewForm'>
            <Button
              variant='outlined'
              className='flex items-center gap-3 px-16'
            >
              <span>
                <i class='ri-edit-line text-lg'></i>
              </span>
              Add Review
            </Button>
          </a>
        </div>

        <div className=''>
          {reviewData?.data?.map((d, index) => (
            <div className='pb-10 pt-2 px-2 border-b border-b-[#00000017] '>
              {/* <p>{d?.userReview}</p> */}
              <div className='grid grid-cols-12'>
                <div className='grid col-span-1 justify-center items-center w-full h-full'>
                  <img
                    className='w-20 h-20 rounded'
                    src='https://png.pngtree.com/png-clipart/20230805/original/pngtree-rounded-vector-icon-depicting-a-call-center-operator-in-pink-and-blue-flat-colors-vector-picture-image_9732892.png'
                    alt='reviewer_image'
                  />
                </div>
                <div className='grid col-span-11'>
                  <div className='flex justify-between'>
                    <div>
                      <div>
                        <h2 className='font-libre'>
                          {d?.name}{' '}
                          <span className='text-gray font-lato pl-5'>
                            Jun 1 2018, 6:53 pm
                          </span>{' '}
                        </h2>
                        <span className='text-sm text-gray'>{d?.email}</span>
                      </div>
                      <div>
                        <p className='pt-3 font-lato font-medium'>
                          {d?.userReview}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Rating
                        emptySymbol={
                          <i className='fa fa-star-o fa-2x text-[#CECECE] text-xl'></i>
                        }
                        fullSymbol={
                          <i className='fa fa-star fa-2x text-[#F7BC3D] text-xl'></i>
                        }
                        initialRating={d?.individualRating}
                        readonly
                      />
                      <span className='text-gray pl-1'>({d?.individualRating})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {reviewData?.data?.length === 0 && (
          <p className='text-gray w-full h-32 flex justify-center items-center'>
            <span className='px-3 rounded text-white text-opacity-80 bg-gray'>
              There are no reviews yet...
            </span>
          </p>
        )}
        <h2 id='reviewForm' className='py-5'>
          {' '}
        </h2>
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
