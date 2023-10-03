import React, { useEffect, useState } from 'react'
import ReviewForm from './ReviewForm'
import { useGetBookReviewsQuery } from '../../../redux/features/review/reviewApiSlice'
import { Button } from '@material-tailwind/react'
import Rating from 'react-rating'
import { useGetBookByIdQuery } from '../../../redux/features/books/bookApiSlice'
import { format } from 'date-fns'

const Reviews = ({ id, setReviewCount }) => {
  const { data: reviewData } = useGetBookReviewsQuery(id)
  const { data: bookData } = useGetBookByIdQuery(id)
  const [showAllReviews, setShowAllReviews] = useState(false)

  // console.log(bookData?.data?.avgRating)

  // Check if reviewData?.data is defined and an array, and then sort it
  const sortedReviews =
    reviewData?.data && Array.isArray(reviewData?.data)
      ? [...reviewData?.data].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
      : []

  const displayedReviews = showAllReviews
    ? sortedReviews
    : sortedReviews.slice(0, 10)

  const toggleShowAllReviews = () => {
    setShowAllReviews(!showAllReviews)
  }

  const toggleShowFirst10Reviews = () => {
    setShowAllReviews(false)
  }

  // get avg rating

  useEffect(() => {
    // Calculate the average rating
    const reviews = bookData?.data?.reviews
    let sumRatings = 0

    if (reviews && reviews.length > 0) {
      reviews.forEach((review) => {
        const individualRating = review.individualRating
        if (typeof individualRating === 'number') {
          sumRatings += individualRating
        } else {
          console.warn('Invalid individualRating:', individualRating)
        }
      })

      // Update the state with the calculated average rating
    } else {
      console.warn('No reviews found or empty reviews array.')
    }
  }, [bookData?.data?.reviews])

  useEffect(() => {
    setReviewCount(sortedReviews.length)
  }, [sortedReviews.length, setReviewCount])
  // console.log(averageRating)

  // Review days count
  const calculateDaysAgo = (date) => {
    const currentDate = new Date()
    const reviewDate = new Date(date)
    const timeDifference = currentDate.getTime() - reviewDate.getTime()

    // Calculate days, hours, and minutes
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60))
    const minutesAgo = Math.floor(timeDifference / (1000 * 60))

    if (daysAgo >= 1) {
      return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`
    } else if (minutesAgo >= 1) {
      return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`
    } else {
      return 'Less than a minute ago'
    }
  }

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
          {displayedReviews?.map((d, index) => (
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
                            <p className='text-gray font-bold'>
                              {(() => {
                                try {
                                  const createdAtDate = new Date(d?.date)
                                  return format(
                                    createdAtDate,
                                    'MMM dd, yyyy - hh:mm a'
                                  )
                                } catch (error) {
                                  return 'Review Time Not Found'
                                }
                              })()}{' '}
                              <span className='font-normal pl-3'>
                                {calculateDaysAgo(d?.date)}
                              </span>
                            </p>
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
                      <span className='text-gray pl-1'>
                        ({d?.individualRating})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-end py-5'>
            {!showAllReviews && reviewData?.data.length > 10 && (
              <Button
                onClick={toggleShowAllReviews}
                variant='outlined'
                className='flex justify-center items-center gap-1 hover:gap-4'
              >
                See All Reviews{' '}
                <span>
                  <i class='ri-arrow-right-line text-lg text-gray'></i>
                </span>{' '}
              </Button>
            )}
            {showAllReviews && (
              <Button
                onClick={toggleShowFirst10Reviews}
                variant='outlined'
                className='flex justify-center items-center gap-1 hover:gap-4'
              >
                See Less{' '}
                <span>
                  <i class='ri-arrow-right-line text-lg text-gray'></i>
                </span>{' '}
              </Button>
            )}
          </div>
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
