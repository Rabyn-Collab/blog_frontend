import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Login from './pages/authPages/Login'
import Home from './pages/Home'

const App = () => {

  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />

      </Routes>


    </>
  )
}

export default App
