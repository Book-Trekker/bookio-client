import React from 'react'
import Swal from 'sweetalert2'
import { useDeleteWishListMutation } from '../../redux/features/wishlist/wishListApi'

const WishListCart = ({ wishListDat }) => {
  const [deleteWishListMutation] = useDeleteWishListMutation()
  const isoDate = wishListDat?.bookId?.createdAt
  if (isoDate) {
    const createdAtDate = new Date(isoDate)

    const formattedDate = createdAtDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    // handle remove wishList
    const handleRemoveWishList = () => {
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
            await deleteWishListMutation(wishListDat._id)
            Swal.fire('Deleted!', 'Item has been deleted.', 'success')
          } catch (error) {
            Swal.fire('Error!', 'Unable to delete this item.', 'error')
          }
        }
      })
    }

    return (
      <div className='wisht_list_card relative grid grid-cols-1 md:grid-cols-2 w-full'>
        <span onClick={handleRemoveWishList} className='absolute top-2 right-2'>
          <i class='ri-close-circle-line text-2xl p-1 text-gray hover:bg-red-100 font-lato rounded-full'></i>
        </span>
        <div className='border border-[#e6e6e6] flex items-center'>
          <div className='flex p-3 items-center'>
            <div>
              <img
                className='w-24'
                src={wishListDat?.bookId?.image[1]?.url}
                alt='wishlist/book'
              />
            </div>
            <div className='pl-3'>
              <h4 className='font-lato font-semibold'>
                {wishListDat?.bookId?.name}
              </h4>
              <p className='text-secondary text-xl'>
                {' '}
                <span className='line-through text-gray text-sm'>
                  $300.00
                </span>{' '}
                ${wishListDat?.bookId?.price}
              </p>
              <p className='text-gray text-small'>{formattedDate}</p>
            </div>
          </div>
        </div>
        <div className='pl-2 border border-[#e6e6e6] flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start'>
          <p className='text-gray'>{wishListDat?.bookId?.status}</p>
          <button className='px-3 py-1 bg-primary hover:bg-black text-white my-2'>
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

export default WishListCart
