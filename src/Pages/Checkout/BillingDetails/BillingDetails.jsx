import { Button } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useGetCartQuery } from '../../../redux/features/cart/cartApiSlice'
import { useGetProfileQuery } from '../../../redux/features/users/userApiSlice'
import { useCreateOrderMutation } from '../../../redux/features/orders/orderApiSlice'
import Loading from '../../Loading/Loading'
import { useNavigate } from 'react-router-dom'

const BillingDetails = () => {
  const { data: cart } = useGetCartQuery()
  const { data: profile } = useGetProfileQuery()
  const [createOrder, { isLoading, isError, isSuccess, error }] =
    useCreateOrderMutation()
  // console.log(profile?.data?._id)

  // Calculate the total price
  const total = cart?.data?.reduce(
    (acc, item) => acc + (item?.bookId?.price || 0),
    0
  )

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm()

  // Define a function to retrieve data from localStorage
  const getLocalStorageValue = (key) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : '' // Parse JSON if the value exists
  }

  // Load data from localStorage on component mount
  useEffect(() => {
    const billingDetails = getLocalStorageValue('billingDetails')

    // Set default values for the input fields
    setValue('f_name', billingDetails.f_name || '')
    setValue('l_name', billingDetails.l_name || '')
    setValue('company_name', billingDetails.company_name || '')
    setValue('country_name', billingDetails.country_name || '')
    setValue('street_address', billingDetails.street_address || '')
    setValue('town', billingDetails.town || '')
    setValue('district', billingDetails.district || '')
    setValue('post_code', billingDetails.post_code || '')
    setValue('phone', billingDetails.phone || '')
    setValue('email', billingDetails.email || '')
  }, [setValue])

  const navigate = useNavigate()

  // create order function
  const onSubmit = async (data) => {
    try {
      // Prepare the buyer ID from profile data
      const buyerId = profile?.data?._id

      // Prepare the books array from cart data
      const books = cart?.data?.map((cartData) => ({
        bookId: cartData?.bookId?._id,
      }))

      // Calculate the total quantity based on the cart data
      const quantity = cart?.data?.reduce(
        (acc, cartData) => acc + cartData?.quantity,
        0
      )

      // Create the order data object
      const orderData = {
        buyer: buyerId,
        books: books,
        quantity: quantity,
      }

      // Store other input field values in localStorage
      localStorage.setItem('billingDetails', JSON.stringify(data))

      const result = await createOrder(orderData).unwrap()

      navigate('/checkout/order-info')
      // console.log('Order Data:', result)
    } catch (error) {
      console.log(error)
    }
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <section className='my-10 px-5 md:px-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-12 py-3'>
          <div className='grid col-span-12 md:col-span-8 w-full'>
            <h2 className='text-xl md:text-3xl font-libre font-bold'>
              Billing Details
            </h2>
            <div className='py-5'>
              {/* First name */}
              <div className='w-full flex flex-col gap-2 pr-5'>
                <label htmlFor='f_name'>
                  First name <span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='f_name'
                  control={control}
                  rules={{ required: 'First name is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.f_name && (
                        <p className='text-red-500'>{errors.f_name.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Last name */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='l_name'>
                  Last name <span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='l_name'
                  control={control}
                  rules={{ required: 'Last name is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.l_name && (
                        <p className='text-red-500'>{errors.l_name.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Company name */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='company_name'>Company name (optional)</label>
                <Controller
                  name='company_name'
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className='border-b-4 pb-2 border-gray border-opacity-20'
                      type='text'
                      placeholder=''
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>

              {/* Country / Region */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='country_name'>
                  Country / Region <span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='country_name'
                  control={control}
                  rules={{ required: 'Country / Region is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.country_name && (
                        <p className='text-red-500'>
                          {errors.country_name.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Street address */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='street_address'>
                  Street address <span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='street_address'
                  control={control}
                  rules={{ required: 'Street address is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.street_address && (
                        <p className='text-red-500'>
                          {errors.street_address.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Town / City */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='town'>
                  Town / City <span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='town'
                  control={control}
                  rules={{ required: 'Town / City is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.town && (
                        <p className='text-red-500'>{errors.town.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              {/* District */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='district'>
                  District<span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='district'
                  control={control}
                  rules={{ required: 'District is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.district && (
                        <p className='text-red-500'>
                          {errors.district.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Postcode / ZIP */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='post_code'>Postcode / ZIP (optional)</label>
                <Controller
                  name='post_code'
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className='border-b-4 pb-2 border-gray border-opacity-20'
                      type='text'
                      placeholder=''
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>

              {/* Phone */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='phone'>
                  Phone <span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='phone'
                  control={control}
                  rules={{ required: 'Phone is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.phone && (
                        <p className='text-red-500'>{errors.phone.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Email address */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='email'>
                  Email address<span className='text-red-500'>*</span>
                </label>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: 'Email address is required' }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className='border-b-4 pb-2 border-gray border-opacity-20'
                        type='text'
                        placeholder=''
                        defaultValue={field.value}
                      />
                      {errors.email && (
                        <p className='text-red-500'>{errors.email.message}</p>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className='grid col-span-12 md:col-span-4 p-5 border w-full'>
            <div>
              <h2 className='text-xl md:text-3xl font-libre font-medium'>
                Product
              </h2>
              {/* product section  */}
              <div
                style={{ maxHeight: '230px' }}
                className='py-3 mt-3 overflow-y-scroll hide-scrollbar'
              >
                {cart?.data?.map((cartData, index) => (
                  <div
                    key={index}
                    className='w-full flex justify-between border-b border-gray border-opacity-20 pb-4'
                  >
                    <div className='flex'>
                      <img
                        className='w-16 h-24'
                        src={cartData?.bookId?.images[0]?.url}
                        alt='book/img'
                      />
                      <div className='pl-3'>
                        <h4>{cartData?.bookId?.name}</h4>
                        <h5 className='font-bold'>
                          QTY : {cartData?.quantity}
                        </h5>
                      </div>
                    </div>
                    <div>${cartData?.bookId?.price}</div>
                  </div>
                ))}
              </div>

              {/* subtotal - Shipping - total  */}

              <div className='my-3'>
                {/* subtotal  */}
                <div className='flex justify-between border-b border-gray border-opacity-20 pb-5'>
                  <h3 className='font-bold font-libre'>Subtotal</h3>
                  <h5>{total !== undefined ? `$${total.toFixed(2)}` : ''}</h5>
                </div>

                {/* shiping  */}
                <div className='flex justify-between border-b border-gray border-opacity-20 pb-5 mt-5'>
                  <h3 className='font-bold font-libre'>Shiping</h3>
                  <div>
                    <input
                      className='mr-2'
                      type='radio'
                      name='shippingOption'
                      id='freeShipping'
                      checked
                    />
                    <label htmlFor='freeShipping'>Free Shipping</label>
                    <br />
                    <input
                      className='mr-2'
                      type='radio'
                      name='shippingOption'
                      id='flatRate'
                    />
                    <label htmlFor='flatRate'>Flat Rate</label>
                  </div>
                </div>

                {/* total  */}
                <div className='flex justify-between mt-5'>
                  <h3 className='font-bold font-libre'>Total</h3>
                  <h5 className='text-xl font-bold'>
                    {total !== undefined ? `$${total.toFixed(2)}` : ''}
                  </h5>
                </div>

                {/* cash On Delivery  */}
                <div className='p-4 border border-gray border-opacity-20 mt-5'>
                  <input
                    className='mr-2 form-radio text-black border-black'
                    type='radio'
                    name='delivery'
                    id='delivery'
                    checked
                  />
                  <label htmlFor='flatRate'>Cash On Delivery</label>
                  <p className='py-3'>Pay with cash upon delivery.</p>
                </div>

                {/* Order button  */}
                <Button
                  type='submit'
                  className='w-full bg-black hover:bg-primary text-white py-5 mt-8 rounded-none font-lato font-bold text-lg'
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default BillingDetails
