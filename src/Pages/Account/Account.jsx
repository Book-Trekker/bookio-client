import React from 'react'
import BreakCumb from '../../Shared/BreadCumb/BreakCumb'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

const Account = () => {
  return (
    <section className='account_section my-5'>
      <div className="breadCumb_main">
        <BreakCumb first={"home"} second={"account"} route={"/account"} MyAccount={"My Account"} />
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
