import React from 'react'
import { useGetAllBlogsQuery } from '../features/blog/blogApi'

const Home = () => {
  const { isLoading, isError, error, data: blogs } = useGetAllBlogsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='px-[2%] py-[3%] grid grid-cols-3 gap-5'>
      {blogs && blogs.map((blog) => {
        return <div className='shadow-xl' key={blog._id}>
          <img src={blog.imageUrl} alt="" />

          <div className='p-2'>
            <h1 className='text-2xl font-medium'>{blog.title}</h1>
            <p className='text-gray-700'>{blog.detail}</p>
          </div>


        </div>
      })}
    </div>
  )
}

export default Home
