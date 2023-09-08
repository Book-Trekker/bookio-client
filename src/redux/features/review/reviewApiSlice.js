import { api } from '../../api/apiSlice'

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBookReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/books/${id}/review`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['review'],
    }),
    getBookReviews: builder.query({
      query: (id) => `/api/v1/books/${id}/review`,
      providesTags: ['review'],
    }),
  }),
})

export const { useAddBookReviewMutation, useGetBookReviewsQuery } = reviewApi
