import React from 'react'
import { Link } from 'react-router-dom'

export default function ReturningCustomer() {
  return (
    <div className=' w-full'>
      <div className='bg-[#f2f2f2] pt-[18px] relative z-50 pr-[15px] pb-[21px] pl-[15px] text-[#767a79] text-[13px] flex items-center gap-3 justify-center'>
        <i class='ri-user-3-line text-2xl'></i>
        <h3>
          {' '}
          RETURNING CUSTOMER?{' '}
          <Link
            to='/sign_in'
            className='text-[#000] font-[600] hover:text-[#064532] transition-all ease-out delay-100'
          >
            CLICK HERE TO LOGIN
          </Link>
        </h3>
      </div>
    </div>
  )
}
