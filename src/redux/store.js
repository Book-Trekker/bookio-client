import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';

export const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      // Add other reducers here if needed
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });