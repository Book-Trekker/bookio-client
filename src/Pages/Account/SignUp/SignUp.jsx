import React from 'react'
import { Checkbox } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUpSchema } from '../../../schemas'

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values)
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
      <form onSubmit={handleSubmit} className='input_field px-12 py-5'>
        {/* input email  */}
        <div className='input_email flex flex-col mb-2'>
          <label htmlFor='email' className='input-label pb-2 text-[#767a79]'>
            Username or email address <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='email'
            autoComplete='off'
            name='email'
            id='email'
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className='text-red-500'>{errors.email}</p>
          ) : null}
        </div>
        {/* input password  */}
        <div className='input_email flex flex-col mb-2'>
          <label htmlFor='password' className='input-label pb-2 text-[#767a79]'>
            Password <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='password'
            autoComplete='off'
            name='password'
            id='password'
            values={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className='text-red-500'>{errors.password}</p>
          ) : null}
        </div>
        {/* input confirm password  */}
        <div className='input_email flex flex-col mb-2'>
          <label
            htmlFor='confirmPassword'
            className='input-label pb-2 text-[#767a79]'
          >
            Confirm Password <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='confirmPassword'
            autoComplete='off'
            name='confirmPassword'
            id='confirmPassword'
            values={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className='text-red-500'>{errors.confirmPassword}</p>
          ) : null}
        </div>
        {/* remember me  */}
        <div className='remember_me flex justify-between items-center'>
          <Checkbox className='rounded-full' label='Remember Me' />
          <Link to={''} className='border-b-[1px]'>
            Lost Your Password?
          </Link>
        </div>
        {/* login button  */}
        <div className='login_btn my-3'>
          <button className='text-center bg-black w-full text-white py-4 text-sm'>
            LOGIN
          </button>
        </div>
      </form>
    </section>
  )
}

export default SignUp
