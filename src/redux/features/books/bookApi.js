import { api } from '@/redux/api/apiSlice'

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/api/v1/books',
    }),
    singleBook: builder.query({
      query: (id) => `/api/v1/books/${id}`,
    }),
  }),
})

export const { useGetBooksQuery, useSingleBookQuery } = bookApi
