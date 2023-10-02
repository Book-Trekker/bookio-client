import React from 'react'
import Header from '../../HomePage/Header/Header'
import Footer from '../../../Shared/Footer/Footer'
import { OrderTable } from './OrderTable'
import { useGetOrderQuery } from '../../../redux/features/orders/orderApiSlice'
import { useGetProfileQuery } from '../../../redux/features/users/userApiSlice'

const ConfirmOrder = () => {
  const { data: userProfile } = useGetProfileQuery()
  // console.log(userProfile?.data?.email)

  const { data: order } = useGetOrderQuery()
  const reversedOrder = order?.data.slice(0, 1).reverse()

  // const totalPrice = reversedOrder?.map(d => console.log(d?.books))

  // Calculate the total book price
  const totalBookPrice = reversedOrder?.reduce((total, orderData) => {
    const bookPrices =
      orderData?.books?.map((book) => book?.bookId?.price) || []
    const orderTotal = bookPrices.reduce(
      (subtotal, price) => subtotal + (price || 0),
      0
    )
    return total + orderTotal
  }, 0)

  // Collect all book names
  const allBookNames = reversedOrder?.reduce((names, orderData) => {
    const bookNames = orderData?.books?.map((book) => book?.bookId) || []
    return bookNames
  }, [])

  // console.log(allBookNames)

  // Function to format the date
  const formatDate = (timestamp) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(timestamp).toLocaleDateString(undefined, options)
  }

  // Example usage:

  return (
    <section>
      <Header />
      {/* my content  */}
      <div className='w-full px-10 my-10'>
        <h3 className='w-full flex justify-center items-center p-4 border-4 border-primary border-opacity-70 border-dashed text-primary font-bold text-xl py-3'>
          Thank you. Your order has been received.
        </h3>
        <div>
          {reversedOrder?.map((orderData, index) => (
            <div className='w-full flex flex-wrap justify-evenly items-center my-10 font-bold text-gray text-opacity-70'>
              <h4>
                Order number:{' '}
                <span className='font-extrabold'>{orderData?.orderNo}</span>
              </h4>
              <h4>
                Date:{' '}
                <span className='font-extrabold'>
                  {formatDate(orderData?.createdAt)}
                </span>
              </h4>
              <h4>
                Email:{' '}
                <span className='font-extrabold'>
                  {userProfile?.data?.email}
                </span>
              </h4>
              <h4>
                Total:{' '}
                <span className='font-extrabold'>
                  {totalBookPrice !== undefined
                    ? `$${totalBookPrice.toFixed(2)}`
                    : ''}
                </span>
              </h4>

              <h4>
                Payment method:{' '}
                <span className='font-extrabold'>Cash on delivery</span>
              </h4>
            </div>
          ))}
        </div>
        <div className='pt-5'>
          <h2 className='text-xl md:text-3xl font-libre font-bold'>
            Order Details
          </h2>
          <div className='my-3 font-libre text-black'>
            <OrderTable totalBookPrice={totalBookPrice} allBookNames={allBookNames} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default ConfirmOrder
