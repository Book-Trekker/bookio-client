import { toast } from 'react-toastify'
import { useAddToCartMutation } from '../redux/features/cart/cartApiSlice'

function useCart() {
  const [addToCartMutation] = useAddToCartMutation()

  const addToCart = (userId, bookId) => {
    return addToCartMutation({ userId, bookId })
      .unwrap()
      .then((response) => {
        console.log('Book added to cart successfully!', response)
        toast.success('Book added to cart successfully!', {
          position: 'top-right',
          autoClose: 3000,
        })
      })
      .catch((error) => {
        console.error('Error adding book to cart:', error)
      })
  }

  return { addToCart }
}

export default useCart
