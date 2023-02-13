import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

const Account = () => {
  return (
    <section className='account_section my-5'>
      <div className='account_title px-10 py-6 bg-[#F0F3F8] flex justify-between items-center'>
        <Breadcrumbs>
          <Link to={'/'} className='opacity-60'>
            home
          </Link>
          <Link to={'/account'}>account</Link>
        </Breadcrumbs>
        <h2 className='text-2xl font-bold font-libre text-black'>My Account</h2>
      </div>

      {/* signUp & login */}
      <section className='signUp_login grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mx-5 my-10'>
        <div className='login'>
          <Login />
        </div>
        <div className='signUp'>
          <SignUp />
        </div>
      </section>
    </section>
  )
}

export default Account
