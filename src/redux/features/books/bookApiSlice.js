import { api } from '../../api/apiSlice'

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (group) => ({
        url: `/api/v1/books${group ? `?group=${group}` : ''}`,
        method: 'GET',
      }),
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/api/v1/books/${id}`,
        method: 'GET',
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/v1/books/${id}`,
        method: 'DELETE',
      }),
    }),
    updateBook: builder.mutation({
      query: (updatedBook) => ({
        url: `/api/v1/books/${updatedBook.id}`,
        method: 'PUT',
        body: updatedBook,
      }),
    }),
  }),
})

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi
