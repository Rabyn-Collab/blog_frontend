import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Header from './components/Header'
import Login from './pages/authPages/Login'
import SignUp from './pages/authPages/SignUp'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './pages/authPages/RequireAuth'
import CrudForm from './components/crud'
import { useSelector } from 'react-redux'
import Profile from './pages/Profile'

const App = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        {/* {user === null ? <Route path='login' element={<Login />} /> :
          <Route path='/' element={<Home />} />} */}
        <Route path='login' element={user === null ? <Login /> : <Navigate to='/' replace />} />
        <Route path='signUp' element={<SignUp />} />
        <Route element={<RequireAuth />} >
          <Route path='crud/:type' element={<CrudForm />} />
          <Route path='user/profile' element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} position='top-right' />

    </>
  )
}

export default App
