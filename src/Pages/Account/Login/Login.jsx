import React from 'react'
import './Login.css'
import { Checkbox } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='login border-2 border-[#eaeaea] rounded pt-12 pb-4'>
      <div className='login_title'>
        <h2 className='custom_border relative flex items-center justify-center text-center text-2xl font-bold text-black font-libre pb-2'>
          <span>
            <i class='ri-user-line px-2'></i>
          </span>{' '}
          Login
        </h2>
      </div>
      <div className='input_field px-12 py-5'>
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
          />
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
          />
        </div>
        {/* remember me  */}
        <div className='remember_me flex justify-between items-center'>
          <Checkbox className='rounded-full' label='Remember Me' />
          <Link to={""} className='border-b-[1px]'>Lost Your Password?</Link>
        </div>
        {/* login button  */}
        <div className="login_btn">
            <button className='text-center bg-black w-full text-white py-4 text-sm'>LOGIN</button>
        </div>
      </div>
    </section>
  )
}

export default Login
