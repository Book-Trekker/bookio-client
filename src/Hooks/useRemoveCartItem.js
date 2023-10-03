import { useDeleteCartMutation } from '../redux/features/cart/cartApiSlice'

const useRemoveCartItem = () => {
  const [deleteCartMutation] = useDeleteCartMutation()

  const removeCartItem = async (cartItemId) => {
    try {
      await deleteCartMutation(cartItemId)
    } catch (error) {
      throw new Error('Unable to delete the cart item.')
    }
  }

  return { removeCartItem }
}

export default useRemoveCartItem
