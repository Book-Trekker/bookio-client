import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const apiBaseUrl = 'http://localhost:5000/api/v1/auth'; // Example API URL, replace with your backend API URL

export const getAccessToken = () => {
    return Cookies.get('accessToken')
  }
export const authApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/auth" }),

    // prepareHeaders: (headers, { getState }) => {
    //     const token = getAccessToken();
    //     if (token) {
    //       headers.set('authorization', token);
    //     }
    //     headers.set('Content-Type', 'application/json');
    //     return headers;
    //   },


    endpoints: (builder) => ({
      login: builder.mutation({
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      signup: builder.mutation({
        query: (userData) => ({
          url: '/signup',
          method: 'POST',
          body: userData,
        }),
      }),
      loadUser: builder.mutation({
        query: () => ({
          url: '/my-profile',
          method: 'GET',

        }),
        // prepareHeaders: (headers, { getState }) => {
        //     const token = getAccessToken();
        //     if (token) {
        //       headers.set('Authorization', `Bearer ${token}`);
        //     }
        //     headers.set('Content-Type', 'application/json');
        //     return headers;
        //   },
        
      }),

    }),
  });

export const { useLoginMutation, useSignupMutation,useLoadUserMutation  } = authApi;
// Create an API slice for authApi
