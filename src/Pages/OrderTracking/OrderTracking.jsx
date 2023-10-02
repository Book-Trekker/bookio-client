import React, { useState } from 'react'
import { Fragment } from 'react'
import Header from '../HomePage/Header/Header'
import PaymentHeader from '../../Shared/PaymentHeader/PaymentHeader'
import { Button } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'
import { useGetProfileQuery } from '../../redux/features/users/userApiSlice'
import { useGetOrderQuery } from '../../redux/features/orders/orderApiSlice'
import { useNavigate } from 'react-router-dom'

export default function OrderTracking() {
  const [err, setErr] = useState('')
  const { data: userProfile } = useGetProfileQuery()
  const { data: order } = useGetOrderQuery()
  const reversedOrder = order?.data.slice(0, 1).reverse()
  const { register, handleSubmit } = useForm()

  const userEmail = userProfile?.data?.email

  const checkEmail = reversedOrder?.map((d) => d?.buyer?.email)
  const orderNo = reversedOrder?.map((d) => d?.orderNo)

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const isOrderNoMatch = orderNo.includes(parseInt(data.orderID))
    const isEmailMatch = checkEmail.includes(userEmail)

    if (isOrderNoMatch && isEmailMatch) {
      navigate('/checkout/order-info')
    } else {
      setErr('NO ORder Found!')
    }
  }

  return (
    <Fragment>
      <Header />
      <div>
        <PaymentHeader />
        <div className='w-full flex justify-center items-center my-10'>
          <div className='w-full md:w-2/3 px-5'>
            <p className='font-lato text-md pb-5'>
              To track your order please enter your Order ID in the box below
              and press the 'Track' button. This was given to you on your
              receipt and in the confirmation email you should have received.
            </p>
            <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
              <label className='font-bold text-xl' htmlFor='order_id'>
                Order ID
              </label>
              <br />
              <input
                {...register('orderID')}
                className='border w-full p-3 border-gray border-opacity-30 my-2 rounded'
                type='number'
                name='orderID'
              />
              {err && <p className='text-red-500'>{err}</p>}
              <Button
                type='submit'
                className='w-full my-3 py-6 rounded-none bg-black text-white hover:bg-primary'
              >
                Track
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
