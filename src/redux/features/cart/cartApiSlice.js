import { api } from '../../api/apiSlice'

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: '/api/v1/cart/add-cart',
        method: 'POST',
        body: cartItem,
      }),
    }),
  }),
})

export const { useAddToCartMutation } = cartApi
