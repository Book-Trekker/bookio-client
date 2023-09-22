import { api } from '../../api/apiSlice'

const wishListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: (cartItem) => ({
        url: '/api/v1/wishlist',
        method: 'POST',
        body: cartItem,
      }),
      invalidatesTags: ['wish'],
    }),
    getWishList: builder.query({
      query: () => ({
        url: '/api/v1/wishlist',
        method: 'GET',
        providesTags: ['wish'],
      }),
    }),
    deleteWishList: builder.mutation({
      query: (id) => ({
        url: `/api/v1/wishlist/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['wish'],
    }),
  }),
})

export const {
  useAddToWishListMutation,
  useGetWishListQuery,
  useDeleteWishListMutation,
} = wishListApi
