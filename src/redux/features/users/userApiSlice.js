import { api } from '../../api/apiSlice'

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: '/api/v1/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/api/v1/users/my-profile',
        method: 'GET',
      }),
    }),
    updateProfile: builder.mutation({
      query: (updatedData) => ({
        url: '/api/v1/users/my-profile',
        method: 'PATCH',
        body: updatedData,
      }),
    }),
  }),
})

export const { useSignupMutation, useLoginMutation, useGetProfileQuery } =
  userApi
