import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Login from './pages/authPages/Login'
import SignUp from './pages/authPages/SignUp'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />

      </Routes>
      <ToastContainer autoClose={1000} position='top-right' />

    </>
  )
}

export default App
