import { toast } from 'react-toastify'
import { useAddToWishListMutation } from '../redux/features/wishlist/wishListApi'

function useWishList() {
  const [addToWishListMutation] = useAddToWishListMutation()

  const addToWishList = (userId, bookId) => {
    return addToWishListMutation({ userId, bookId })
      .unwrap()
      .then((response) => {
        console.log('Book added to wishlist successfully!', response)
        toast.success('Book added to wishlist successfully!', {
          position: 'top-right',
          autoClose: 3000,
        })
      })
      .catch((error) => {
        const errorMessage = error?.data?.message || 'An error occurred.'
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 3000,
        })
      })
  }

  return { addToWishList }
}

export default useWishList
