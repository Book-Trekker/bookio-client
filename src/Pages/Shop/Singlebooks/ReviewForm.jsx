import { Button, Input, Textarea } from '@material-tailwind/react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Rating from 'react-rating'

const ReviewForm = () => {
  const { control, handleSubmit, register } = useForm()
  const onSubmit = (data) => {
    console.log('Form Data:', data)
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
            name='rating'
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
              {...register('review', { required: true })}
            />
          </div>
        </div>
        <Button className='rounded-none bg-transparent hover:bg-primary text-black hover:text-white border w-full' type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default ReviewForm
