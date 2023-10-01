import React from 'react'
import CartItem from './CartItem'
import { motion } from 'framer-motion'
import { useGetCartQuery } from '../../../redux/features/cart/cartApiSlice'
import { Link } from 'react-router-dom'

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  // const { data: cartData, isLoading, isError, error } = useGetCartQuery()
  const { data: cartItems, isLoading, isError, error } = useGetCartQuery()

  // Calculate the total price
  const total = cartItems?.data?.reduce(
    (acc, item) => acc + (item?.bookId?.price || 0),
    0
  )

  return (
    <motion.div
      animate={{
        x: showShoppingCart ? '0px' : '100%',
        transition: {
          duration: 0.6,
          type: 'spring',
          damping: 20,
        },
      }}
      className='fixed top-0 w-[100%] sm:w-[400px] right-0 bottom-0  bg-[#fff] shadow-lg border border-[#e5e7eb] h-screen z-50'
    >
      <div className=''>
        <div className='flex items-center justify-between  pb-6 p-6'>
          <span
            onClick={() => setShowShoppingCart(false)}
            className='bg-[#fff] shadow-lg shadow-[ rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;] w-[40px] h-[40px] rounded-full flex items-center justify-center'
          >
            <i className='ri-close-line text-[26px] cursor-pointer'></i>
          </span>
          <h3 className='text-[1.4rem]  tracking-wider text-[#334155] font-semibold'>
            Shopping cart
          </h3>
        </div>
        <hr className='border-[#e5e7eb]' />
        <div className='p-6 h-screen overflow-y-auto shopping_cart_product '>
          {cartItems?.data?.map((c, index) => (
            <CartItem key={index} cartData={c} />
          ))}
        </div>
        <div className='absolute bottom-0 left-0 bg-[#F9FAFB] p-6 w-full'>
          <div className='flex justify-between'>
            <div>
              <span className='text-[#334155] font-semibold'>Subtotal</span>
              <p className='text-[#333] text-[14px]'>
                Shipping and taxes calculated at checkout.
              </p>
            </div>
            <div>
              <span className='text-[#334155] font-semibold'>
                {total !== undefined ? `$${total.toFixed(2)}` : ''}
              </span>
            </div>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <Link
              to='/cart'
              className='border border-[rgb(226,232,240,1)] px-[50px] py-[15px] rounded-full bg-[#fff]'
            >
              View cart
            </Link>
            <Link
              to='/checkout'
              className='bg-[#0F172A] text-[#fff] px-[50px] py-[15px] rounded-full'
            >
              Check out
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ShoppingCart
