import { Button, Input, Textarea } from '@material-tailwind/react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Rating from 'react-rating'
import { useAddBookReviewMutation } from '../../../redux/features/review/reviewApiSlice'
import { toast } from 'react-toastify'

const ReviewForm = ({ id }) => {
  const { control, handleSubmit, register, reset } = useForm()

  const [postReview, {}] = useAddBookReviewMutation()

  const onSubmit = async (data) => {
    try {
      await postReview({ id, data }).unwrap()
      toast.success('Review added successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
      })
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p className='text-gray text-[12px] font-normal'>
        Your email address will not be published. Required fields are marked{' '}
        <span className='text-red-500'>*</span>{' '}
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-3'>
          <label className='font-normal text-sm text-gray'>Your rating:</label>
          <Controller
            name='individualRating'
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <Rating
                emptySymbol={
                  <i className='fa fa-star-o fa-2x text-[#CECECE] text-xl'></i>
                }
                fullSymbol={
                  <i className='fa fa-star fa-2x text-[#F7BC3D] text-xl'></i>
                }
                fractions={2}
                initialRating={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div>
            <div>
              <Input
                type='text'
                label='Your Name...'
                {...register('name', { required: true })}
              />
            </div>

            <div className='my-5'>
              <Input
                type='email'
                label='Your Email...'
                {...register('email', { required: true })}
              />
            </div>
          </div>
          <div>
            <Textarea
              label='Your Review...'
              {...register('userReview', { required: true })}
            />
          </div>
        </div>
        <Button
          className='rounded-none bg-transparent hover:bg-primary text-black hover:text-white border w-full'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ReviewForm
