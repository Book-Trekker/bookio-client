import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API } from '../../config'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  endpoints: () => ({}),
})
