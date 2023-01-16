import React from 'react'
import { useGetAllBlogsQuery } from './features/auth/authApi'

const App = () => {
  const { data, error } = useGetAllBlogsQuery();


  console.log(data);
  return (
    <div>
      <h1>hello </h1>
    </div>
  )
}

export default App
