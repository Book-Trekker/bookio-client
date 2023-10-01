import React from 'react'
import Header from '../../HomePage/Header/Header'
import Footer from '../../../Shared/Footer/Footer'
import { OrderTable } from './OrderTable'

const ConfirmOrder = () => {
    
  return (
    <section>
      <Header />
      {/* my content  */}
      <div className='w-full px-10 my-10'>
        <h3 className='w-full flex justify-center items-center p-4 border-4 border-primary border-opacity-70 border-dashed text-primary font-bold text-xl py-3'>
          Thank you. Your order has been received.
        </h3>
        <div className='w-full flex flex-wrap justify-evenly items-center my-10 font-bold text-gray text-opacity-70'>
          <h4>
            Order number: <span className='font-extrabold'>26725</span>
          </h4>
          <h4>
            Date: <span className='font-extrabold'>October 1, 2023</span>
          </h4>
          <h4>
            Email:{' '}
            <span className='font-extrabold'>webdevnazmulh@gmail.com</span>
          </h4>
          <h4>
            Total: <span className='font-extrabold'>$90.00</span>
          </h4>
          <h4>
            Payment method:{' '}
            <span className='font-extrabold'>Cash on delivery</span>
          </h4>
        </div>
        <div className='pt-5'>
          <h2 className='text-xl md:text-3xl font-libre font-bold'>
            Order Details
          </h2>
          <div className='my-3 font-libre text-black'>
            <OrderTable />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default ConfirmOrder
