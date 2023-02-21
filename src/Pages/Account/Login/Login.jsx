import React from 'react'
import './Login.css'
import { Checkbox } from '@material-tailwind/react'
import { useFormik } from 'formik'
import { signUpSchema } from '../../../schemas'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const initialValues = {
  loginEmail: '',
  loginPassword: ''
}

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values)
        action.resetForm()
      },
    })

  return (
    <section className='login border-2 border-[#eaeaea] rounded pt-12 pb-4'>
      <div className='login_title'>
        <h2 className='custom_border relative flex items-center justify-center text-center text-2xl font-bold text-black font-libre pb-2'>
          <span>
          <i className='ri-user-line px-2'></i>
          </span>{' '}
          Login
        </h2>
      </div>
      <form onSubmit={handleSubmit} className='input_field px-5 md:px-12 py-5'>
        {/* input email  */}
        <div className='input_email flex flex-col mb-2'>
          <label htmlFor='email' className='input-label pb-2 text-[#767a79]'>
            Email address <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='email'
            autoComplete='off'
            name='loginEmail'
            id='loginEmail'
            values={values.loginEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.loginEmail && touched.loginEmail ? (
            <p className='text-red-500'>{errors.loginEmail}</p>
          ) : null}
        </div>
        {/* input password  */}
        <div className='input_email flex flex-col mb-2'>
          <label htmlFor='password' className='input-label pb-2 text-[#767a79]'>
            Password <span className='text-red-500'>*</span>
          </label>
          <div className='w-full relative'>
            <input
              className='w-full border-2 px-2 py-4 border-[#eaeaea]'
              type={passwordVisible ? 'text' : 'password'}
              autoComplete='off'
              name='password'
              id='password'
              values={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className='absolute right-2 top-2 text-3xl text-[#767a79] '
            >
              {passwordVisible ? (
                <i class='ri-eye-off-line'></i>
              ) : (
                <i class='ri-eye-line'></i>
              )}
            </span>
          </div>

          {errors.password && touched.password ? (
            <p className='text-red-500 italic'>{errors.password}</p>
          ) : null}
        </div>
        {/* remember me  */}
        <div className='remember_me flex flex-col md:flex-row md:justify-between md:items-center'>
          <Checkbox className='rounded-full' label='Remember Me' />
          <Link to={''} className='border-b-[1px]'>
            Lost Your Password?
          </Link>
        </div>
        {/* login button  */}
        <div className='login_btn my-3'>
          <button className='text-center bg-black w-full text-white py-4 text-sm hover:bg-primary'>
            LOGIN
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login
