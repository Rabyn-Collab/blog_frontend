import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      }),
      providesTags: ['Blogs']
    }),




  })
});



export const { useGetAllBlogsQuery } = blogApi;