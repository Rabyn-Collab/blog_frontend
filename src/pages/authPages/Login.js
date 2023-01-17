import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (val) => {

    },
    validationSchema: loginSchema
  });


  return (
    <div className='max-w-xl mx-auto  mt-10'>
      <div className=' bg-white rounded-lg border border-primaryBorder shadow-xl py-12 px-16'>
        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
          Log in to your account 🔐
        </h1>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type='email'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='email'
              name='email'
              placeholder='Your Email'
            />
            {formik.errors.email && <div className='text-pink-900'>{formik.errors.email}</div>}
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              type='password'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='password'
              name='password'
              placeholder='Your Password'
            />
          </div>

          <div className='flex justify-center items-center mt-6'>
            <button
              type='submit'
              className='bg-green-500 hover:bg-green-600 w-full py-1 text-white text-lg tracking-widest'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

