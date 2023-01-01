import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <section className='login h-[300px] border-2 border-[#eaeaea] rounded pt-12'>
      <div className='login_title'>
        <h2 className='custom_border relative flex items-center justify-center text-center text-2xl font-bold text-black font-libre pb-2'>
          <span>
            <i class='ri-user-line px-2'></i>
          </span>{' '}
          Login
        </h2>
      </div>
      <div className='input_field px-12 py-5'>
        <div className='input_email flex flex-col'>
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
      </div>
    </section>
  )
}

export default Login
