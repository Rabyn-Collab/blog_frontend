import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useGetAllBlogsQuery } from '../features/blog/blogApi'

const Home = () => {
  const { isLoading, isError, error, data: blogs } = useGetAllBlogsQuery();
  const { user } = useSelector((store) => store.user);
  const nav = useNavigate();
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

          {user.id === blog.author && <div>
            <button onClick={() => {
              nav('crud/edit', { state: blog })
            }}><i className="fa-solid fa-pen-to-square fa-xl"></i></button>
          </div>}
        </div>
      })}
    </div>
  )
}

export default Home
