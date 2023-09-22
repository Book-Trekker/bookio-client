import { api } from '../../api/apiSlice'

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (bookData) => ({
        url: '/api/v1/books',
        method: 'POST',
        body: bookData,
      }),
    }),
    getAllBooks: builder.query({
      query: (category) => ({
        url: `/api/v1/books${category ? `?category=${category}` : ''}`,
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
  useCreateBookMutation,
} = bookApi
