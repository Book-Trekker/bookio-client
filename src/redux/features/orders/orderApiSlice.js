import { api } from '../../api/apiSlice'

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/api/v1/orders',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['order'],
    }),
    getOrder: builder.query({
      query: () => ({
        url: '/api/v1/orders',
        method: 'GET',
        providesTags: ['order'],
      }),
    }),
  }),
})

export const { useCreateOrderMutation, useGetOrderQuery } = orderApi
