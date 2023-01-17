import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-pink-500 text-white px-10 py-3 flex justify-between items-center'>
      <h1 className='text-2xl'>Blog Post</h1>
      <nav className='space-x-5 text-black text-lg'>

        <NavLink to='/login'>Login</NavLink>
        <NavLink>Create Post</NavLink>
        <NavLink>Profile</NavLink>
      </nav>
    </div>
  )
}

export default Header
