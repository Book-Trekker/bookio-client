import { api } from '../../api/apiSlice'

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: '/api/v1/cart/add-cart',
        method: 'POST',
        body: cartItem,
      }),
      invalidatesTags: ['cart'],
    }),
    getCart: builder.query({
      query: () => ({
        url: '/api/v1/cart',
        method: 'GET',
        providesTags: ['cart'],
      }),
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/api/v1/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
})

export const { useAddToCartMutation, useGetCartQuery, useDeleteCartMutation } =
  cartApi
