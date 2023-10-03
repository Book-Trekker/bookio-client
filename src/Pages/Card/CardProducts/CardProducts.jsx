import React from 'react'
import { useGetCartQuery } from '../../../redux/features/cart/cartApiSlice'

export default function CardProducts() {
  const { data: cart } = useGetCartQuery()
  // const { removeCartItem } = useRemoveCartItem()

  // const handleRemoveClick = () => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You will not be able to recover this item!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it',
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         await removeCartItem('6506da88c45f3ada2881ae5b')
  //         Swal.fire('Deleted!', 'Your cart item has been deleted.', 'success')
  //       } catch (error) {
  //         Swal.fire('Error!', 'Unable to delete the cart item.', 'error')
  //       }
  //     }
  //   })
  // }

  return (
    <section>
      <div className='hidden md:grid md:grid-cols-4 justify-between font-libre text-xl text-primary px-5 py-3 border-2 border-[#3b323221]'>
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>SubTotal</h1>
      </div>
      {cart?.data?.map((cartData, index) => (
        <div className='hidden md:grid md:grid-cols-4 border-t-transparent justify-between font-lato text-lg text-primary px-5 py-3 border-2 border-[#3b323221]'>
          <h1>{cartData?.bookId?.name}</h1>
          <h1>${cartData?.bookId?.price}</h1>
          <h1>{cartData?.quantity}</h1>
          <h1 className='flex justify-between'>
            <span>${cartData?.bookId?.price * cartData?.quantity}</span>
            {/* <span onClick={handleRemoveClick}>
              <i className='ri-delete-bin-3-line hover:text-white p-2 rounded-full hover:bg-red-200 cursor-pointer transition-all duration-300'></i>
            </span> */}
          </h1>
        </div>
      ))}
    </section>
  )
}
