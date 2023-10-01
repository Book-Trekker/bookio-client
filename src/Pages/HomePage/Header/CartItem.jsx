import React from 'react'
import Swal from 'sweetalert2'
import useRemoveCartItem from '../../../Hooks/useRemoveCartItem'

const CartItem = ({ cartData }) => {
  // console.log(cartData?.bookId?.image)
  const { removeCartItem } = useRemoveCartItem()

  const formatCreatedAt = (isoTimestamp) => {
    const createdAt = new Date(isoTimestamp)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return `${createdAt.toLocaleDateString('en-US', options)}`
  }

  const handleRemoveClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeCartItem(cartData._id) // Use the removeCartItem function from the hook
          Swal.fire('Deleted!', 'Your cart item has been deleted.', 'success')
        } catch (error) {
          Swal.fire('Error!', 'Unable to delete the cart item.', 'error')
        }
      }
    })
  }

  return (
    <div className='wisht_list_card  w-full'>
      <div className=' flex items-center'>
        <div className='flex p-3 justify-between w-full'>
          <div>
            <img
              className='w-20'
              src={cartData?.bookId?.images[0]?.url}
              alt='wishlist/book'
            />
          </div>
          <div className='pl-3 flex  flex-col justify-between py-3'>
            <div>
              <h4 className='font-lato font-semibold'>
                {cartData?.bookId?.name}
              </h4>
              <p className='text-gray text-small'>
                {formatCreatedAt(cartData?.createdAt)}
              </p>
            </div>
            <div>
              <h3>Qty: {cartData?.quantity}</h3>
            </div>
          </div>
          <div className='flex items-center flex-col justify-between py-3'>
            <span className='text-[#F1592B] font-semibold border border-[#F1592B] px-2 rounded-md'>
              ${cartData?.bookId?.price}
            </span>
            <button
              onClick={handleRemoveClick}
              className='text-[#1F92CD] font-semibold'
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
