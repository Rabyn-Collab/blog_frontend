import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import userReducer from './auth/userSlice'





export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer
  },

  middleware: (getDefault) => getDefault().concat([
    authApi.middleware
  ])

});