import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';





export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({

    getAllBlogs: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      }),
    }),


    userLogin: builder.mutation({
      query: (user) => ({
        url: '/api/userLogin',
        body: user,
        method: 'POST'
      })
    })



  })
});



export const { useUserLoginMutation, useGetAllBlogsQuery } = authApi;