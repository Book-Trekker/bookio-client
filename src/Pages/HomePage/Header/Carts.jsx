import React from 'react'
import { useGetCartQuery } from '../../../redux/features/cart/cartApiSlice'

const Carts = ({ setShowShoppingCart }) => {
  const { data: cartItems, isLoading, isError, error } = useGetCartQuery()
  // console.log(cartItems?.data?.length)

  return (
    <div
      onClick={() => setShowShoppingCart(true)}
      className='addToCart relative'
    >
      <span className='text-3xl text-primary hover:text-secondary cursor-pointer'>
        <i class='ri-shopping-cart-line text-4xl'></i>
      </span>
      <div className='cart_count absolute w-7 h-7 bg-secondary rounded-full right-[-3px] top-[-10px] text-white flex items-center justify-center'>
        {cartItems?.data?.length}
      </div>
    </div>
  )
}

export default Carts
